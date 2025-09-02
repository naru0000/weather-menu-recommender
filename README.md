<div align="center">

# 오늘 뭐 먹지?

### 날씨별 메뉴 추천 웹 애플리케이션 🍽️

[<img src="https://img.shields.io/badge/-readme.md-important?style=flat&logo=google-chrome&logoColor=white" />](https://github.com/naru0000/weather-menu-recommender) [<img src="https://img.shields.io/badge/프로젝트 기간-7일-fab2ac?style=flat&logo=&logoColor=white" />]() [<img src="https://img.shields.io/badge/팀원-3명-blue?style=flat&logo=&logoColor=white" />]()

</div>

## 소개

Redux Toolkit 학습을 목적으로 개발한 날씨별 메뉴 추천 웹 애플리케이션입니다.

**개발 동기**

- Redux Toolkit을 활용한 전역 상태 관리 패턴 학습
- 팀 협업을 통한 Git Flow 워크플로우 경험
- "오늘 뭐 먹지?"라는 일상적인 고민 해결

**주요 기능**

- **날씨 선택**: 흐린 날/비오는 날/맑은 날 날 (3개 중 1개 선택)
- **온도 선택**: 추운 날/더운 날
- **스마트 추천**: 선택 조건에 따른 맞춤 메뉴 추천
- **배경 변화**: 날씨 선택 시 배경 이미지 자동 변경
- **추천 히스토리**: 로컬 스토리지를 통한 기록 관리

<br />

## 메뉴 추천 로직

### **선택 조합별 추천 방식**
- **날씨만 선택**: 해당 날씨에 맞는 메뉴 랜덤 추천
- **온도만 선택**: 해당 온도에 맞는 메뉴 랜덤 추천
- **날씨 + 온도**: 조합에 최적화된 메뉴 우선 추천
- **아무것도 선택 안 함**: 전체 메뉴에서 완전 랜덤 추천

### **선택 규칙**
- 날씨 선택: 3개 중 1개만 (중복 선택 불가)
- 온도 선택: 2개 중 선택 (중복 선택 불가)
- 날씨와 온도는 중복으로 선택 가능

<br />

## 화면 구성

| 메인 화면 |
| :---: |
| ![메인 화면](https://github.com/user-attachments/assets/4d8052e8-0801-44a9-96dd-3cda41eb5391) |
| 날씨 선택, 온도 선택 버튼과 메뉴 추천 버튼이 있는 메인 화면 |

| 날씨&온도 선택 화면 |
| :---: |
| ![날씨 선택](https://github.com/user-attachments/assets/4d1ee88e-25e0-45f5-a056-27f966455df4) |
| 흐린 날, 비오는 날, 맑은 날 중 선택할 수 있는 화면 |

| 메뉴 추천 결과 |
| :---: |
| ![메인 화면](https://github.com/user-attachments/assets/7669d724-7151-49f1-83d6-402c08ab4028) |
| 선택한 조건에 맞는 랜덤 메뉴가 추천되는 화면 |

| 추천 히스토리 |
| :---: |
| ![추천 히스토리](https://github.com/user-attachments/assets/ecacb97b-ac5b-4353-a4dc-a8eeff374fdc) |
| 이전 추천 기록들을 확인하고 삭제할 수 있는 화면 |

<br />

## 기술 스택

### Frontend

<div>
<img src="https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

### 상태 관리

<div>
<img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white">
</div>

### 스타일링

<div>
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
</div>

### 개발 도구

<div>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
</div>

<br />

## 설치 및 실행

```bash
# 저장소 클론
git clone [https://github.com/naru0000/weather-menu-recommender.git](https://github.com/naru0000/weather-menu-recommender.git)

# 프로젝트 폴더로 이동
cd weather-menu-recommender

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:5173 접속
```

## 프로젝트 구조

```
weather-menu-recommender/
├── src/
│   ├── App.jsx                    # 메인 애플리케이션
│   ├── main.jsx                   # 애플리케이션 진입점
│   ├── app/
│   │   └── store.js               # Redux store 설정
│   ├── features/                  # 기능별 폴더
│   │   ├── slice/                 # Redux 로직
│   │   │   ├── weatherSlice.js    # 날씨 선택 상태 관리
│   │   │   ├── temperatureSlice.js # 온도 선택 상태 관리
│   │   │   ├── menuSlice.js       # 메뉴 추천 로직
│   │   │   └── historySlice.js    # 추천 히스토리 관리
│   │   ├── components/            # UI 컴포넌트
│   │   │   ├── WeatherSelector.jsx
│   │   │   ├── TemperatureSelector.jsx
│   │   │   ├── MenuRecommender.jsx
│   │   │   └── HistoryList.jsx
│   │   └── data/                  # 정적 데이터
│   │       └── menuData.json      # 메뉴 데이터 (JSON)
│   ├── assets/                    # 정적 자원
│   └── utils/

│       └── localStorage.js        # localStorage 헬퍼
└── README.md
```

<br />

## Redux 상태 구조

### **State 구조**

```javascript
{
  weather: {
    selected: null | 'cloudy' | 'rainy' | 'sunny'
  },
  temperature: {
    selected: null | 'cold' | 'hot'  
  },
  menu: {
    currentRecommendation: null | { name, description, image }
  },
  history: {
    recommendations: [
      {
        id: string,
        menu: object,
        timestamp: number
      }
    ]
  }
}
```

**주요 액션들**

- **`setWeather(weatherType)`**: 날씨 선택
- **`setTemperature(tempType)`**: 온도 선택
- **`recommendMenu()`**: 메뉴 추천 실행
- **`addToHistory(recommendation)`**: 히스토리에 추가
- **`removeFromHistory(id)`**: 특정 기록 삭제
- **`clearHistory()`**: 전체 히스토리 삭제

<br />



## 메뉴 데이터 구조

```json
[
  {
    "id": 1,
    "name": "낫또",
    "weather": ["cloudy", "sunny", "rainy", "snowy"],
    "temperature": ["cold", "hot"]
  },
  {
    "id": 2,
    "name": "순두부찌개",
    "weather": ["cloudy", "rainy"],
    "temperature": ["cold"]
  }
]
```

<br />

## 추가 기능 상세

### **제외 음식 관리 (localStorage 활용)**
- 사용자가 원하지 않는 음식을 직접 입력하여 제외 목록에 추가
- localStorage에 배열 형태로 영구 저장
- 메뉴 추천 시 제외 목록에 있는 음식은 자동으로 필터링
- 제외 목록에서 개별 삭제 및 전체 삭제 기능

### **즐겨찾기 기능 (Redux + localStorage)**
- 추천받은 메뉴를 즐겨찾기에 추가/제거 (토글 기능)
- Redux slice로 즐겨찾기 상태 관리
- 즐겨찾기 목록 표시 및 개별/전체 삭제 기능
- 즐겨찾기 목록에서만 랜덤 추천하는 기능
- localStorage로 데이터 영구 저장
  
### **실시간 날씨 API 연동 (추후 개발 예정)**
- Geolocation API를 통해 사용자의 현재 위치를 파악
- 위치 기반으로 실시간 날씨 정보를 API로 호출
- API 응답 값을 기반으로 날씨/온도 상태를 자동으로 업데이트
- 버튼 클릭 방식에서 자동화된 사용자 경험으로 개선

<br />

## 기술적 이슈와 해결 과정

### **이슈 1: Redux 초기 상태(initialState) 설계 오류**

- **문제**: 날씨/온도 slice의 초기값이 `null`이 아닌 특정 값(예: 'sunny')으로 하드코딩 되어, "아무것도 선택하지 않은 상태"에서의 전체 메뉴 추천 기능이 동작하지 않았습니다.
- **해결**: `initialState`의 `value`를 `null`로 변경하여, 의도된 초기 상태를 명확히 하고 조건부 필터링 로직이 정상 작동하도록 수정했습니다.

### **이슈 2: 배포 환경에 따른 SPA 라우팅 및 경로 문제**

- **문제**: GitHub Pages에서 배포 시 새로고침하면 404 에러가 발생했고, Netlify 배포 환경에서는 이미지 파일(`src/assets` 내)이 로드되지 않았습니다.
- **해결**: SPA 라우팅을 완벽히 지원하는 **Netlify**로 배포 플랫폼을 변경하고, `public/_redirects` 파일을 추가하여 라우팅 문제를 해결했습니다. 이미지 경로는 빌드 후에도 접근 가능하도록 `public/images` 폴더로 이동하여 경로를 수정했습니다.

### **이슈 3: 데이터 구조 불일치로 인한 버그**

- **문제**: 메뉴 추천 시 히스토리에 저장되는 데이터 구조와, 히스토리 목록을 화면에 표시할 때 참조하는 데이터 구조가 달라 메뉴 이름이 표시되지 않았습니다.
- **해결**: `dispatch(addHistory({random}))`으로 잘못 전달하던 액션 페이로드를 `dispatch(addHistory(random))`으로 수정하여 데이터 구조를 일치시켰습니다.

### **이슈 4: 빌드 도구 환경 설정 착오**

- **문제**: 프로젝트가 **Vite**(`dist` 폴더) 기반임에도 불구하고, Netlify 배포 설정 시 CRA 기준인 `build` 폴더로 잘못 설정했습니다.
- **해결**: `.gitignore`와 `package.json`을 분석하여 프로젝트가 Vite 환경임을 파악하고, 배포 디렉토리를 `dist`로 정확하게 수정했습니다.

<br />

## 프로젝트 팀원

| 날씨&온도 선택 기능 | 메뉴 추천 기능 | 히스토리 & 통합 |
| :---: | :---: | :---: |
| ![](https://github.com/chlwlsgh777.png?size=50) | ![](https://github.com/gyeone.png?size=50) | ![](https://github.com/naru0000.png?size=150) |
| [최진호](https://github.com/chlwlsgh777) | [백기연](https://github.com/gyeone) | [고우리](https://github.com/naru0000) |

### 역할 분담

- **최진호**: `weatherSlice` 및 `temperatureSlice` 작성, 관련 UI 컴포넌트(Selector) 및 날씨별 배경 변경 로직 구현
- **백기연**: `menuSlice` 작성 및 `MenuRecommender` 컴포넌트 구현, 메뉴 데이터 기반의 조건부 필터링 로직 담당
- **고우리**: `historySlice` 작성 및 `localStorage` 연동 유틸리티 구현, Redux `store` 설정 및 전체 기능 통합 담당

<br />

## 학습 성과

### **Redux Toolkit 학습**

- **createSlice 패턴**: 여러 개의 slice를 기능별로 분리하여 상태를 모듈식으로 관리하는 패턴을 익혔습니다.
- **상태 조합**: `useSelector`로 여러 slice의 상태를 조합하여, 날씨와 온도 조건에 맞는 메뉴를 추천하는 복잡한 비즈니스 로직을 구현했습니다.
- **Side Effect 처리**: `useEffect` 훅을 활용하여 Redux 상태가 변경될 때마다 `localStorage`에 자동으로 데이터를 동기화하는 패턴을 학습했습니다.

### **실전 협업 경험**

- **모듈화된 개발**: `features` 폴더 기반 아키텍처를 통해 각 팀원이 독립적인 기능(slice와 컴포넌트)을 병렬적으로 개발했습니다.
- **Git Flow 워크플로우**: `develop`을 기본 브랜치로 사용하는 Git-flow 전략을 통해 안정적인 협업 프로세스를 경험했습니다.
- **코드 리뷰 문화**: 팀원 간 코드 리뷰를 통해 데이터 구조의 불일치나 로직 오류를 발견하고 함께 해결하는 과정을 학습했습니다.

### **사용자 경험 고려**

- **데이터 영속성**: 브라우저를 새로고침해도 추천 기록이 사라지지 않도록 `localStorage`를 활용하여 사용자 경험을 향상시켰습니다.
- **직관적 UI**: 선택된 조건에 따라 배경 이미지가 바뀌고, 버튼이 하이라이트되는 등 시각적 피드백을 통해 사용자 친화적인 인터페이스를 구현했습니다.


