# League of Legends Info App

## 소개
이 프로젝트는 Riot Games API를 활용하여 리그 오브 레전드의 챔피언과 아이템 정보를 제공하는 웹 애플리케이션입니다. 사용자 친화적인 인터페이스로 게임 정보를 쉽게 탐색할 수 있습니다.

## 주요 기능
- 챔피언 목록 및 상세 정보 조회
  - 챔피언 스킬, 스토리, 난이도 정보
  - 챔피언 역할 및 특성
- 아이템 목록 및 상세 정보 조회
  - 아이템 스탯, 가격 정보
  - 아이템 빌드 트리
- 주간 무료 로테이션 챔피언 목록
  - 실시간 업데이트
- 다크 모드 지원
  - 사용자 선호도에 따른 테마 전환

## 기술 스택
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Zustand (상태 관리)
- Riot Games API & DataDragon API

## 시작하기

### 필수 요구사항
- Node.js 18.0.0 이상
- Yarn 패키지 매니저
- Riot Games API 키

### 주요 페이지
- `/`: 메인 페이지
- `/champions`: 챔피언 목록
- `/champions/[id]`: 챔피언 상세 정보
- `/items`: 아이템 목록
- `/items/[id]`: 아이템 상세 정보
- `/rotation`: 로테이션 챔피언 목록

## 프로젝트 구조
```
src/
├── app/
│   ├── components/    # 재사용 가능한 컴포넌트
│   │   ├── Header    # 네비게이션 헤더
│   │   ├── LoadingSpinner    # 로딩 스피너 컴포넌트
│   │   └── Cards     # 챔피언/아이템 카드 컴포넌트
│   ├── types/        # TypeScript 타입 정의
│   ├── utils/        # 유틸리티 함수
│   └── store/        # Zustand 스토어
├── pages/            # 페이지 컴포넌트
└── styles/           # 전역 스타일
```

## API 통합
- 챔피언 데이터: DataDragon API
  - 챔피언 정보, 이미지, 스킬 데이터
- 로테이션 정보: Riot Games API
  - 주간 무료 챔피언 목록

## 특징
- 반응형 디자인: 모든 디바이스에서 최적화된 경험
- SEO 최적화: Next.js의 SSR/ISR 활용
- 성능 최적화: 이미지 최적화 및 코드 스플리팅
- 사용자 경험: 부드러운 애니메이션과 전환 효과



