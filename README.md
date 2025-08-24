<div align="center">

# 오늘 뭐 먹지?

### 날씨별 메뉴 추천 웹 애플리케이션 🍽️

[<img src="https://img.shields.io/badge/-readme.md-important?style=flat&logo=google-chrome&logoColor=white" />](https://github.com/naru0000/weather-menu-recommender) [<img src="https://img.shields.io/badge/프로젝트 기간-7일-fab2ac?style=flat&logo=&logoColor=white" />]() [<img src="https://img.shields.io/badge/팀원-3명-blue?style=flat&logo=&logoColor=white" />]()

</div>

## 📝 소개

Redux Toolkit 학습을 목적으로 개발한 날씨별 메뉴 추천 웹 애플리케이션입니다.

**개발 동기**

- Redux Toolkit을 활용한 전역 상태 관리 패턴 학습
- 팀 협업을 통한 Git Flow 워크플로우 경험
- "오늘 뭐 먹지?"라는 일상적인 고민 해결

**주요 기능**

- **날씨 선택**: 흐린 날/비오는 날/햇빛 쨍쨍한 날 (3개 중 1개 선택)
- **온도 선택**: 추운 날/더운 날 (중복 선택 가능)
- **스마트 추천**: 선택 조건에 따른 맞춤 메뉴 추천
- **배경 변화**: 날씨 선택 시 배경 이미지 자동 변경
- **추천 히스토리**: 로컬 스토리지를 통한 기록 관리 (최근 5개)

<br />

## 🎯 메뉴 추천 로직

### **선택 조합별 추천 방식**
- **날씨만 선택**: 해당 날씨에 맞는 메뉴 랜덤 추천
- **온도만 선택**: 해당 온도에 맞는 메뉴 랜덤 추천  
- **날씨 + 온도**: 조합에 최적화된 메뉴 우선 추천
- **아무것도 선택 안 함**: 전체 메뉴에서 완전 랜덤 추천

### **선택 규칙**
- 날씨 선택: 3개 중 1개만 (중복 선택 불가)
- 온도 선택: 2개 중 선택 (중복 선택 가능)
- 날씨와 온도는 독립적으로 선택 가능

<br />

## 📱 화면 구성

|                    메인 화면                     |
| :----------------------------------------------: |
|   ![메인 화면](./docs/images/main-screen.png)    |
| 날씨 선택, 온도 선택 버튼과 메뉴 추천 버튼이 있는 메인 화면 |

|                   날씨 선택 화면                   |
| :------------------------------------------------: |
| ![날씨 선택](./docs/images/weather-selection.png)  |
| 흐린 날, 비오는 날, 햇빛 쨍쨍한 날 중 선택할 수 있는 화면 |

|                   온도 선택 화면                   |
| :------------------------------------------------: |
| ![온도 선택](./docs/images/temperature-selection.png)  |
| 추운 날, 더운 날 중 선택할 수 있는 화면 |

|                   메뉴 추천 결과                    |
| :-------------------------------------------------: |
| ![메뉴 추천](./docs/images/menu-recommendation.png) |
|    선택한 조건에 맞는 랜덤 메뉴가 추천되는 화면     |

|                       추천 히스토리                        |
| :--------------------------------------------------------: |
| ![추천 히스토리](./docs/images/recommendation-history.png) |
|      이전 추천 기록들을 확인하고 삭제할 수 있는 화면       |


<br />

## ⚙ 기술 스택

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

## 🚀 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/naru0000/weather-menu-recommender.git

# 프로젝트 폴더로 이동
cd weather-menu-recommender

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:5173 접속
```

<br />

## 🗂 프로젝트 구조

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

## 🧠 Redux 상태 구조

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

### **주요 액션들**

**기본 기능**
- `setWeather(weatherType)`: 날씨 선택
- `setTemperature(tempType)`: 온도 선택
- `recommendMenu()`: 메뉴 추천 실행
- `addToHistory(recommendation)`: 히스토리에 추가
- `removeFromHistory(id)`: 특정 기록 삭제
- `clearHistory()`: 전체 히스토리 삭제

<br />

## 📊 메뉴 데이터 구조

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

## ✨ 추가 기능 상세

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

<br />

## 🤔 기술적 이슈와 해결 과정

### **이슈 1: **
- **문제**: 
- **해결**: 

- **학습 포인트**: 


<br />

## 👥 프로젝트 팀원

|                 날씨 선택 기능                  |                온도 & 메뉴 기능                 |                  히스토리 & 통합                  |
| :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: |
| ![](https://github.com/username-a.png?size=120) | ![](https://github.com/username-b.png?size=120) | ![](https://github.com/username-c.png?size=120) |
|     [팀원 A](https://github.com/username-a)     |     [팀원 B](https://github.com/username-b)     |     [팀원 C](https://github.com/username-c)     |

### 역할 분담

- **팀원 A**: weatherSlice 작성, WeatherSelector 컴포넌트, 날씨별 배경 변경 로직
- **팀원 B**: temperatureSlice, menuSlice 작성, TemperatureSelector, MenuRecommender 컴포넌트, 메뉴 데이터와 추천 로직
- **팀원 C**: historySlice 작성 및 Redux store 설정, HistoryList 컴포넌트, localStorage 연동

<br />

## 🎯 학습 성과

### **Redux Toolkit 완전 정복**
- **createSlice 패턴**: 5개의 서로 다른 slice를 통해 다양한 상태 관리 패턴 학습
- **상태 조합**: 여러 slice의 상태를 조합하여 복잡한 비즈니스 로직 구현

### **실전 협업 경험**
- **모듈화된 개발**: 각 팀원이 독립적인 slice와 컴포넌트를 담당하여 병렬 개발
- **Git Flow 워크플로우**: feature 브랜치를 통한 안전한 협업 프로세스
- **코드 리뷰 문화**: 서로의 Redux 코드를 리뷰하며 최적화 방법 학습

### **사용자 경험 고려**
- **데이터 영속성**: localStorage를 활용한 사용자 설정 저장
- **직관적 UI**: 조건부 스타일링과 상태 피드백을 통한 사용자 친화적 인터페이스

### **포트폴리오 핵심 어필 포인트**
- **"Redux Toolkit을 활용한 모듈화된 상태 관리 아키텍처 설계"**
- **"localStorage와 Redux 상태 동기화를 통한 데이터 영속성 구현"**
- **"복잡한 조건부 로직을 단계적 필터링으로 해결하는 문제 해결 능력"**
- **"팀 협업을 통한 확장 가능한 컴포넌트 아키텍처 구현"**

<br />

## 📄 라이센스

MIT License
