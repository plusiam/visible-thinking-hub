# 🌱 Visible Thinking Hub

> 하버드 프로젝트 제로 기반 3단계 사고가시화 전략 허브

## 📚 프로젝트 소개

이 프로젝트는 하버드 프로젝트 제로(Project Zero)의 사고가시화 전략을 한국 초등교육 현장에 맞게 재구성한 디지털 플랫폼입니다.

### 🎯 주요 특징

- **3단계 체계적 구성**: 도입·탐구 → 종합·체계화 → 심화
- **13개의 검증된 사고 루틴**: See-Think-Wonder, ORID 등
- **과목별 맞춤 추천**: 국어, 수학, 과학, 사회, 예술
- **반응형 웹 디자인**: 모바일, 태블릿, 데스크톱 지원
- **다크 모드 지원**: 눈의 피로를 줄이는 테마 전환

## 🚀 시작하기

### 온라인 접속

https://plusiam.github.io/visible-thinking-hub

### 로컬 개발 환경

```bash
# 저장소 클론
git clone https://github.com/plusiam/visible-thinking-hub.git

# 디렉토리 이동
cd visible-thinking-hub

# 로컬 서버 실행 (Python 3)
python -m http.server 8000

# 브라우저에서 접속
http://localhost:8000
```

## 📁 프로젝트 구조

```
visible-thinking-hub/
├── index.html              # 메인 HTML 파일
├── assets/
│   ├── css/               # 스타일시트
│   │   ├── main.css       # 기본 스타일
│   │   ├── stages.css     # 3단계 스타일
│   │   ├── tools.css      # 도구 카드 스타일
│   │   ├── responsive.css # 반응형 스타일
│   │   └── themes.css     # 테마 스타일
│   └── js/                # JavaScript 파일
│       ├── data/          # 데이터 파일
│       │   ├── tools-data.js
│       │   └── subjects-data.js
│       ├── components/    # 컴포넌트
│       │   ├── tool-card.js
│       │   └── search.js
│       └── main.js        # 메인 스크립트
└── README.md              # 프로젝트 문서
```

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Font**: Noto Sans KR
- **Icons**: Emoji
- **Hosting**: GitHub Pages

## 📋 사용된 사고 루틴

### 🟡 1단계: 도입·탐구
- See-Think-Wonder (보기·생각하기·궁금해하기)
- Think-Puzzle-Explore (생각-퍼즐-탐구)
- 3-2-1 Bridge (3-2-1 브릿지)
- Frayer Model (프레이어 모델)

### 🟠 2단계: 종합·체계화
- Headlines (나만의 한 줄 요약)
- Color, Symbol, Image (색상-상징-이미지)
- Generate-Sort-Connect-Elaborate (생성-분류-연결-정교화)
- Connect-Extend-Challenge (연결-확장-도전)
- Sentence-Phrase-Word (문장-구절-단어)

### 🔵 3단계: 심화
- ORID Reflection (ORID 성찰 도구)
- Step Inside (마음속으로 들어가기)
- Circle of Viewpoints (관점의 원)
- ABC Thinking (ABC 생각바꾸기)

## 🤝 기여하기

프로젝트 개선을 위한 제안이나 기여를 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 교육 목적으로 자유롭게 사용할 수 있습니다.

## 👨‍🏫 개발자

**룰루랄라 한기쌤**
- Facebook: [@playrurulala](https://www.facebook.com/playrurulala)
- GitHub: [@plusiam](https://github.com/plusiam)

## 🙏 감사의 말

- Harvard Project Zero의 연구진들
- 함께 사고가시화를 실천하는 모든 선생님들
- 생각이 자라나는 모든 학생들
