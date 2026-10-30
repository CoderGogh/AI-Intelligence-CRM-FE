// 데모 모드: 녹화한 API 응답(public/demo/*.json)을 재생, 백엔드 없이 동작
import { getRole } from "../roleStore";

export const isDemo = import.meta.env.VITE_DEMO_MODE === "true";

export const DEMO_TOKEN = "demo-token";

type Role = "관리자" | "상담사";

interface FixtureFile {
	login: { role: Role; expiredAt?: string };
	fixtures: Record<string, unknown>;
}

const FILE: Record<Role, string> = {
	관리자: "/demo/admin.json",
	상담사: "/demo/agent.json",
};

// 화면이 오늘 날짜로 보내는 값은 녹화 시점과 달라 매칭에서 제외
const IGNORED = new Set([
	"date",
	"baseDate",
	"compareDate",
	"sort",
	"fromDate",
	"toDate",
]);

// 검색·필터 조건이 안 맞을 때 남길 기본 파라미터
const BASIC = new Set([
	"page",
	"size",
	"period",
	"classification",
	"slot",
	"consultId",
	"targetEmpId",
	"agentId",
	"status",
	"year",
	"week",
	"categoryCode",
]);

const cache: Partial<Record<Role, Promise<FixtureFile>>> = {};

function load(role: Role) {
	cache[role] ??= fetch(FILE[role]).then(
		(r) => r.json() as Promise<FixtureFile>,
	);
	return cache[role];
}

function currentRole(): Role {
	return getRole() ?? "상담사";
}

function toKey(path: string, params: [string, string][]) {
	if (params.length === 0) return path;
	const qs = new URLSearchParams(
		[...params].sort(([a], [b]) => a.localeCompare(b)),
	);
	return `${path}?${qs.toString()}`;
}

function normalize(params?: Record<string, unknown>): [string, string][] {
	if (!params) return [];
	return Object.entries(params).flatMap(([k, v]) => {
		if (v === undefined || v === null || v === "" || IGNORED.has(k)) return [];
		if (Array.isArray(v))
			return v.length ? v.map((x) => [k, String(x)] as [string, string]) : [];
		return [[k, String(v)] as [string, string]];
	});
}

// 숫자 경로 조각 → 같은 형태의 녹화 키 아무거나
function templateOf(key: string) {
	return key.split("?")[0].replace(/\/\d+(?=\/|$)/g, "/:id");
}

function lookup(
	fixtures: Record<string, unknown>,
	path: string,
	params: [string, string][],
) {
	const tries = [
		toKey(path, params),
		toKey(
			path,
			params.filter(([k]) => BASIC.has(k)),
		),
		toKey(
			path,
			params.filter(([k]) => k === "page" || k === "size"),
		),
		toKey(
			path,
			params.filter(([k]) => k === "size"),
		),
		path,
	];
	for (const k of tries) if (k in fixtures) return fixtures[k];

	// 녹화하지 않은 상세 ID → 같은 경로 형태의 첫 응답
	const keys = Object.keys(fixtures);
	const candidate = params.some(([k]) => k === "consultId")
		? keys.find((k) => k.startsWith(`${path}?consultId=`))
		: /\/\d+(\/|$)/.test(path)
			? keys.find((k) => !k.includes("?") && templateOf(k) === templateOf(path))
			: undefined;
	return candidate ? fixtures[candidate] : undefined;
}

const ok = (
	data: unknown = null,
	message = "데모 모드에서는 변경 내용이 저장되지 않습니다.",
) => ({ success: true, message, data });

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function demoRequest<T>(config: {
	url: string;
	method: string;
	params?: Record<string, unknown>;
	data?: unknown;
}): Promise<T> {
	await delay(120);
	const method = config.method.toUpperCase();
	const path = `/${config.url.replace(/^\//, "")}`;

	// 로그인: 아이디로 역할 결정 (admin → 관리자, 그 외 → 상담사)
	if (path === "/auth/login") {
		const loginId =
			(config.data as { loginId?: string } | undefined)?.loginId ?? "";
		const role: Role = loginId.startsWith("admin") ? "관리자" : "상담사";
		const file = await load(role);
		return { ...file.login, role, accessToken: DEMO_TOKEN } as T;
	}
	if (path === "/auth/refresh") return { accessToken: DEMO_TOKEN } as T;
	if (path === "/auth/logout") return ok(null, "로그아웃") as T;

	if (method !== "GET") {
		const bookmark = path.match(
			/^\/bookmarks\/(consultations|manuals)\/(\d+)$/,
		);
		if (bookmark) {
			return ok({
				type: bookmark[1],
				targetId: Number(bookmark[2]),
				bookmarked: method === "POST",
			}) as T;
		}
		return ok() as T;
	}

	const file = await load(currentRole());
	const hit = lookup(file.fixtures, path, normalize(config.params));
	if (hit === undefined) {
		// 백엔드의 204(데이터 없음)와 같게 빈 응답
		console.warn("[demo] 녹화되지 않은 요청", method, path, config.params);
		return "" as T;
	}
	return structuredClone(hit) as T;
}
