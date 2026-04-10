<div align="center">
  <h1>🖥️ AI Intelligence CRM — Frontend</h1>
  <p><strong>AI 기반 상담 기록 관리 시스템의 인텔리전트 대시보드</strong></p>
  <p>
    <img src="https://img.shields.io/badge/React%2019-61DAFB?style=flat-square&logo=react&logoColor=black"/>
    <img src="https://img.shields.io/badge/TypeScript%205.7-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/Vite%207-646CFF?style=flat-square&logo=vite&logoColor=white"/>
    <img src="https://img.shields.io/badge/TanStack_Start-FF4154?style=flat-square&logo=reactquery&logoColor=white"/>
    <img src="https://img.shields.io/badge/TanStack_Router-FF4154?style=flat-square&logo=reactquery&logoColor=white"/>
    <img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white"/>
    <img src="https://img.shields.io/badge/Tailwind_CSS%204-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/>
    <img src="https://img.shields.io/badge/Zustand-433E38?style=flat-square&logo=zustand&logoColor=white"/>
    <img src="https://img.shields.io/badge/Recharts-22B5BF?style=flat-square"/>
    <img src="https://img.shields.io/badge/Orval-FF6B6B?style=flat-square"/>
    <img src="https://img.shields.io/badge/Biome-60A5FA?style=flat-square"/>
    <img src="https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white"/>
    <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
  </p>
  <p>
    <img src="https://img.shields.io/badge/포트-3000-blue?style=flat-square"/>
    <img src="https://img.shields.io/badge/런타임-Node.js%2020-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>
  </p>
</div>

---

## 📌 목차

1. [시스템 개요](#-시스템-개요)
2. [이 레포의 역할](#-이-레포의-역할--frontend)
3. [기술 스택](#-기술-스택)
4. [주요 기능](#-주요-기능)
5. [프로젝트 구조](#-프로젝트-구조)
6. [환경 변수](#-환경-변수)
7. [시작하기](#-시작하기)
8. [스크립트 명세](#-스크립트-명세)
9. [관련 레포지토리](#-관련-레포지토리)

---

## 🌐 시스템 개요

**AI Intelligence CRM** 은 대규모 상담 데이터를 AI로 분석·인덱싱하고, 이를 빠르게 검색·시각화할 수 있는 **AI 기반 상담 기록 관리 시스템**입니다. 전체 시스템은 세 개의 레포지토리로 구성됩니다.

| 레포 | 역할 | 포트 |
| :--- | :--- | :---: |
| **Frontend** (이 레포) | 상담 분석 대시보드, 데이터 시각화, 검색 UI | `3000` |
| **API Server** ([AI-Intelligence-CRM-BE-Api](https://github.com/CoderGogh/AI-Intelligence-CRM-BE-Api)) | REST API, JWT 인증, Google OAuth2, 실시간 조회 | `8080` |
| **Batch Server** ([AI-Intelligence-CRM-BE-Batch](https://github.com/CoderGogh/AI-Intelligence-CRM-BE-Batch)) | Gemini AI 분석, 대용량 배치 처리, 검색 인덱싱 | `8081` |

---

## ⚙️ 이 레포의 역할 — Frontend

상담 분석 결과를 **인터랙티브 대시보드**로 시각화하는 React 기반 SPA입니다.

API 서버에서 받아온 AI 분석 데이터를 차트·그래프로 렌더링하고, 감정 트렌드 추이와 AI 요약 리포트를 운영자가 한눈에 파악할 수 있도록 제공합니다. **TanStack Start** 기반의 SSR 지원 풀스택 프레임워크 위에서 동작하며, **Orval**로 API 서버의 Swagger 명세를 자동으로 TypeScript 클라이언트 코드로 생성합니다.

---

## 🛠 기술 스택

### Core

| 기술 | 버전 | 용도 |
| :--- | :---: | :--- |
| React | 19 | UI 컴포넌트 라이브러리 |
| TypeScript | 5.7 | 타입 안전성 |
| Vite | 7 | 빌드 도구 및 개발 서버 |
| TanStack Start | 1.132 | SSR 지원 풀스택 React 프레임워크 |
| TanStack Router | 1.132 | 파일 기반 라우팅 (type-safe) |
| TanStack Query | 5.90 | 서버 상태 관리 및 데이터 패칭 |
| Zustand | 5.0 | 클라이언트 전역 상태 관리 |

### UI & 스타일링

| 기술 | 버전 | 용도 |
| :--- | :---: | :--- |
| Tailwind CSS | 4.1 | 유틸리티 기반 스타일링 |
| Vanilla Extract | 1.18 | 타입 안전한 CSS-in-TS (Zero-runtime) |
| Recharts | 3.8 | 감정 트렌드·분석 데이터 인터랙티브 차트 |
| Lucide React | 0.545 | 아이콘 라이브러리 |
| React Select | 5.10 | 고급 드롭다운 선택 컴포넌트 |

### 개발 도구

| 기술 | 버전 | 용도 |
| :--- | :---: | :--- |
| Orval | 7.13 | Swagger → TypeScript API 클라이언트 자동 생성 |
| Biome | 2.2.4 | 린팅 + 포맷팅 통합 도구 (ESLint + Prettier 대체) |
| Vitest | 3.0 | 단위 테스트 |
| Testing Library | 16 | React 컴포넌트 테스트 |
| `ky` | 1.14 | HTTP 클라이언트 (fetch 래퍼) |

### 인프라

| 기술 | 용도 |
| :--- | :--- |
| Docker (node:20-alpine, 멀티스테이지) | 빌드 최적화 컨테이너화 |
| `server.mjs` (Node.js) | 프로덕션 SSR 서버 |
| GitHub Actions | CI/CD 워크플로우 자동화 |

---

## ✨ 주요 기능

### 📊 상담 분석 대시보드

- AI가 분석한 상담 데이터를 **인터랙티브 차트(Recharts)**로 실시간 시각화
- **감정 트렌드 그래프** — 시간대별 고객 감정 변화 추이 시각화
- **AI 생성 요약 리포트** — Gemini AI가 분석한 상담 내용 요약 표시
- 상담 현황 KPI 지표 및 통계 대시보드

### 🔍 상담 검색 및 조회

- API 서버의 Elasticsearch 기반 **전문 검색** UI
- React Select를 활용한 **고급 필터링** (기간, 감정 분류, 담당자 등)
- 검색 결과 페이지네이션

### 🔐 인증

- **JWT 기반 로그인** — Access / Refresh Token 처리
- **Google OAuth2 소셜 로그인** — Google 계정으로 간편 로그인
- TanStack Router의 loader를 통한 **인증 가드 라우팅**

### 🔄 API 클라이언트 자동 생성 (Orval)

- API 서버의 Swagger 명세를 자동으로 내려받아 TypeScript 타입 및 `ky` 기반 API 클라이언트 코드를 자동 생성
- API 변경 사항을 `npm run generate` 한 번으로 즉시 반영

---

## 📂 프로젝트 구조

```
AI-Intelligence-CRM-FE/
├── src/
│   ├── routes/               # 파일 기반 라우팅 (TanStack Router)
│   │   ├── __root.tsx        # 레이아웃 루트 (헤더·네비게이션 포함)
│   │   ├── index.tsx         # 메인 대시보드
│   │   ├── consult/          # 상담 목록·상세 조회
│   │   ├── auth/             # 로그인·OAuth 콜백
│   │   └── ...
│   ├── components/           # 공통 UI 컴포넌트
│   ├── stores/               # Zustand 전역 상태
│   ├── api/                  # Orval 자동 생성 API 클라이언트
│   ├── styles/               # Vanilla Extract CSS 스타일
│   └── styles.css            # Tailwind CSS 글로벌 스타일
├── scripts/
│   └── download-swagger.mjs  # Orval 실행 전 Swagger JSON 자동 다운로드
├── public/                   # 정적 에셋
├── .github/workflows/        # GitHub Actions CI/CD
├── Dockerfile                # 멀티스테이지 빌드 (node:20-alpine)
├── server.mjs                # 프로덕션 SSR 서버
├── vite.config.ts            # Vite + TanStack Start + Vanilla Extract 설정
├── biome.json                # Biome 린트·포맷 설정
├── tsconfig.json
└── package.json
```

---

## 🔐 환경 변수

Dockerfile의 `ARG` / `ENV`에서 확인된 빌드 타임 환경 변수입니다. 로컬 개발 시 프로젝트 루트에 `.env` 파일을 생성하고 아래 항목을 채워넣으세요.

| 변수명 | 설명 |
| :--- | :--- |
| `VITE_API_BASE_URL` | API 서버 기본 URL — 예: `http://localhost:8080/api` |
| `VITE_GOOGLE_REDIRECT_URI` | Google OAuth2 리다이렉트 URI |
| `VITE_GOOGLE_AUTH_URL` | Google OAuth2 인증 엔드포인트 URL |

---

## 🚀 시작하기

### 사전 요구사항

- Node.js 20+
- npm
- **API 서버가 먼저 실행 중이어야 합니다** — [AI-Intelligence-CRM-BE-Api](https://github.com/CoderGogh/AI-Intelligence-CRM-BE-Api) 참고

### 로컬 개발 실행

**1. 레포지토리 클론**

```bash
git clone https://github.com/CoderGogh/AI-Intelligence-CRM-FE.git
cd AI-Intelligence-CRM-FE
```

**2. 의존성 설치**

```bash
npm install
```

**3. 환경 변수 설정**

```bash
# .env 파일 생성 후 값 입력
VITE_API_BASE_URL=http://localhost:8080/api
VITE_GOOGLE_REDIRECT_URI=http://localhost:3000/auth/callback
VITE_GOOGLE_AUTH_URL=https://accounts.google.com/o/oauth2/v2/auth
```

**4. API 클라이언트 코드 생성 (선택 — API 명세 변경 시)**

```bash
npm run generate
# 내부적으로 scripts/download-swagger.mjs 실행 후 Orval로 TypeScript 클라이언트 자동 생성
```

**5. 개발 서버 실행**

```bash
npm run dev
# → http://localhost:3000
```

### Docker 빌드 및 실행

```bash
docker build \
  --build-arg VITE_API_BASE_URL=http://localhost:8080/api \
  --build-arg VITE_GOOGLE_REDIRECT_URI=http://localhost:3000/auth/callback \
  --build-arg VITE_GOOGLE_AUTH_URL=https://accounts.google.com/o/oauth2/v2/auth \
  -t crm-fe .

docker run -p 3000:3000 crm-fe
```

> Dockerfile은 `node:20-alpine` 기반 멀티스테이지 빌드로 최적화되어 있으며, 프로덕션 서버는 `server.mjs`로 실행됩니다.

---

## 📋 스크립트 명세

| 스크립트 | 명령어 | 설명 |
| :--- | :--- | :--- |
| 개발 서버 | `npm run dev` | Vite 개발 서버 실행 (포트 3000) |
| 프로덕션 빌드 | `npm run build` | Vite 프로덕션 빌드 |
| 빌드 미리보기 | `npm run preview` | 빌드 결과물 로컬 미리보기 |
| 테스트 | `npm run test` | Vitest 단위 테스트 실행 |
| API 코드 생성 | `npm run generate` | Swagger → TypeScript 클라이언트 자동 생성 |
| 린트 | `npm run lint` | Biome 린트 검사 |
| 포맷 | `npm run format` | Biome 코드 포맷팅 |
| 린트+포맷 통합 | `npm run check` | Biome check (lint + format 동시 검사) |

---

## 🔗 관련 레포지토리

| 레포 | 역할 |
| :--- | :--- |
| [CoderGogh/AI-Intelligence-CRM-FE](https://github.com/CoderGogh/AI-Intelligence-CRM-FE) | 이 레포 — 대시보드 프론트엔드 |
| [CoderGogh/AI-Intelligence-CRM-BE-Api](https://github.com/CoderGogh/AI-Intelligence-CRM-BE-Api) | API 서버 — 인증, 실시간 조회·검색, 인프라 Docker 구성 |
| [CoderGogh/AI-Intelligence-CRM-BE-Batch](https://github.com/CoderGogh/AI-Intelligence-CRM-BE-Batch) | Batch 서버 — Gemini AI 분석, 대용량 배치 처리 |
