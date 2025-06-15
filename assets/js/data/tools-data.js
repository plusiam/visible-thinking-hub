// 사고가시화 도구 데이터
const thinkingTools = [
    // 1단계: 도입·탐구 (Exploration)
    {
        id: 'see-think-wonder',
        name: 'See-Think-Wonder',
        nameKo: '보기-생각하기-궁금하기',
        stage: 'exploration',
        emoji: '👀',
        description: '관찰, 해석, 질문을 통해 탐구를 시작하는 기본 루틴',
        purpose: '시각 자료나 현상에 대한 깊이 있는 관찰과 탐구 질문 생성',
        usage: '새로운 주제 도입, 예술작품 감상, 과학 실험 관찰',
        subjects: ['art', 'science', 'social', 'korean'],
        features: ['이미지 업로드', '카메라 촬영', '그림 그리기', '자동 저장', 'PDF 다운로드'],
        keywords: ['관찰', '해석', '질문', '탐구', '시각적 사고'],
        url: 'https://plusiam.github.io/see-think-wonder-v2/',
        githubUrl: 'https://github.com/plusiam/see-think-wonder-v2',
        hasInteractive: true
    },
    {
        id: 'see-think-wonder-template',
        name: 'See-Think-Wonder Template',
        nameKo: '보기-생각하기-궁금하기 템플릿',
        stage: 'exploration',
        emoji: '🖼️',
        description: '간단한 템플릿 형태의 See-Think-Wonder 활동지',
        purpose: '빠른 관찰 활동과 간편한 기록을 위한 템플릿 버전',
        usage: '짧은 활동, 종이 활동지 대체, 모바일 환경',
        subjects: ['art', 'science', 'social', 'korean'],
        features: ['간편한 입력', '템플릿 구조', '인쇄 최적화', '모바일 친화적'],
        keywords: ['관찰', '템플릿', '간편', '활동지', 'STW'],
        url: 'https://plusiam.github.io/see-think-wonder-templet/',
        githubUrl: 'https://github.com/plusiam/see-think-wonder-templet',
        hasInteractive: true
    },
    {
        id: 'think-puzzle-explore',
        name: 'Think-Puzzle-Explore',
        nameKo: '생각-퍼즐-탐구',
        stage: 'exploration',
        emoji: '🧩',
        description: '기존 지식 활성화, 궁금증 유발, 탐구 계획 수립',
        purpose: '사전 지식을 점검하고 학습 방향을 설정하는 도구',
        usage: '단원 시작, 프로젝트 기획, 탐구 학습 도입',
        subjects: ['all'],
        features: ['대화형 입력', '탐구 계획 템플릿', '자동 저장', '이미지 다운로드'],
        keywords: ['사전지식', '궁금증', '탐구계획', '학습목표'],
        url: 'https://plusiam.github.io/think-puzzle-explore/',
        githubUrl: 'https://github.com/plusiam/think-puzzle-explore',
        hasInteractive: true
    },
    {
        id: '321-bridge',
        name: '3-2-1 Bridge',
        nameKo: '3-2-1 브릿지',
        stage: 'exploration',
        emoji: '🌉',
        description: '학습 전후의 생각을 연결하여 이해의 변화를 확인',
        purpose: '사전 지식 활성화와 학습 후 개념 변화 시각화',
        usage: '개념 학습, 실험/탐구 활동, 독서 활동, 프로젝트 학습',
        subjects: ['all'],
        features: ['3-2-1 구조', '학습 전후 비교', '자동 저장', '진행률 표시', '이미지 다운로드', 'A4 인쇄 최적화'],
        keywords: ['개념변화', '메타인지', '성찰', '학습전후', '브릿지'],
        url: 'https://plusiam.github.io/321-bridge-worksheet/321.html',
        githubUrl: 'https://github.com/plusiam/321-bridge-worksheet',
        hasInteractive: true
    },
    
    // 2단계: 종합·체계화 (Synthesis)
    {
        id: 'headlines',
        name: 'Headlines',
        nameKo: '나만의 한 줄 요약',
        stage: 'synthesis',
        emoji: '📰',
        description: '학습 내용을 창의적인 헤드라인으로 요약하는 도구',
        purpose: '핵심 개념 추출과 창의적 표현 능력 개발',
        usage: '수업 마무리, 단원 정리, 독서 후 활동, 프로젝트 요약',
        subjects: ['all'],
        features: ['다양한 헤드라인 템플릿', '이모지 지원', '실시간 미리보기', '이미지 다운로드'],
        keywords: ['요약', '헤드라인', '핵심정리', '창의성', '기사제목'],
        url: 'https://plusiam.github.io/headline-maker-kids/',
        githubUrl: 'https://github.com/plusiam/headline-maker-kids',
        hasInteractive: true
    },
    {
        id: 'color-symbol-image',
        name: 'Color, Symbol, Image',
        nameKo: '색상-상징-이미지',
        stage: 'synthesis',
        emoji: '🎨',
        description: '개념을 색상, 상징, 이미지로 표현하여 깊이 이해',
        purpose: '추상적 개념의 시각화와 은유적 사고 발달',
        usage: '문학 작품 분석, 역사 인물 이해, 감정 표현',
        subjects: ['art', 'korean', 'social'],
        features: ['색상 팔레트', '12색 프리셋', '커스텀 컬러', '자동 저장', 'PNG 다운로드'],
        keywords: ['시각화', '은유', '상징', '창의성', 'CSI'],
        url: 'https://plusiam.github.io/color-symbol-image-worksheet/',
        githubUrl: 'https://github.com/plusiam/color-symbol-image-worksheet',
        hasInteractive: true
    },
    {
        id: 'generate-sort-connect-elaborate',
        name: 'Generate-Sort-Connect-Elaborate',
        nameKo: '생성-분류-연결-정교화',
        stage: 'synthesis',
        emoji: '🗂️',
        description: '아이디어를 생성하고 분류하여 연결하고 정교하게 발전시키는 도구',
        purpose: '창의적 사고와 체계적 정리 능력 개발',
        usage: '브레인스토밍, 개념 정리, 프로젝트 기획, 문제 해결',
        subjects: ['all'],
        features: ['아이디어 생성', '카테고리 분류', '연결선 그리기', '정교화 작성', '시각적 맵핑'],
        keywords: ['생성', '분류', '연결', '정교화', 'GSCE'],
        url: 'https://plusiam.github.io/generate-classify-connect-elaborate/',
        githubUrl: 'https://github.com/plusiam/generate-classify-connect-elaborate',
        hasInteractive: true
    },
    {
        id: 'connect-extend-challenge',
        name: 'Connect-Extend-Challenge',
        nameKo: '연결-확장-도전',
        stage: 'synthesis',
        emoji: '🔄',
        description: '기존 지식과 연결, 새로운 학습으로 확장, 도전 과제 설정',
        purpose: '학습의 연속성 확보와 심화 학습 방향 설정',
        usage: '단원 연결, 심화 학습, 자기주도 학습',
        subjects: ['all'],
        features: ['연결 다이어그램', '도전 과제 설정', '학습 맵', '자동 저장'],
        keywords: ['연결', '확장', '도전', '심화', 'CEC'],
        url: 'https://plusiam.github.io/connect-extend-challenge/',
        githubUrl: 'https://github.com/plusiam/connect-extend-challenge',
        hasInteractive: true
    },
    {
        id: 'connect-extend-challenge-templates',
        name: 'Connect-Extend-Challenge Templates',
        nameKo: '연결-확장-도전 템플릿',
        stage: 'synthesis',
        emoji: '📋',
        description: '다양한 템플릿이 제공되는 Connect-Extend-Challenge 도구',
        purpose: '상황별 맞춤형 템플릿으로 효율적인 학습 정리',
        usage: '교과별 템플릿 활용, 수준별 학습, 협동 학습',
        subjects: ['all'],
        features: ['다양한 템플릿', '교과별 최적화', '협동 학습 지원', '템플릿 선택'],
        keywords: ['연결', '확장', '도전', '템플릿', 'CEC템플릿'],
        url: 'https://plusiam.github.io/connect-extend-challengge-templates/',
        githubUrl: 'https://github.com/plusiam/connect-extend-challengge-templates',
        hasInteractive: true
    },
    
    // 3단계: 심화 (Deepening)
    {
        id: 'step-inside',
        name: 'Step Inside',
        nameKo: '마음속으로 들어가기',
        stage: 'deepening',
        emoji: '👤',
        description: '타인의 관점에서 생각하고 느끼고 궁금해하기',
        purpose: '공감 능력과 다양한 관점 이해 능력 개발',
        usage: '역사 인물 이해, 문학 작품 감상, 갈등 상황 이해',
        subjects: ['social', 'korean', 'art'],
        features: ['학생 정보 입력', '자동 저장', '개선된 이미지 저장', 'A4 인쇄 최적화', '키보드 네비게이션', '초기화 기능'],
        keywords: ['공감', '관점', '역할', '이해', '마음'],
        url: 'https://plusiam.github.io/step-inside-v2/',
        githubUrl: 'https://github.com/plusiam/step-inside-v2',
        hasInteractive: true
    },
    {
        id: 'step-inside-improved',
        name: 'Step Inside Improved',
        nameKo: '마음속으로 들어가기 개선판',
        stage: 'deepening',
        emoji: '🎭',
        description: '영상 관리와 교사 전용 페이지가 추가된 향상된 버전',
        purpose: '멀티미디어를 활용한 깊이 있는 공감 학습',
        usage: '영상 기반 인물 분석, 역할극, 교사 주도 수업',
        subjects: ['social', 'korean', 'art'],
        features: ['영상 관리', '교사 전용 페이지', '반응형 웹', '새로시작 기능', '영상 URL 입력'],
        keywords: ['공감', '영상', '교사도구', '멀티미디어', '개선판'],
        url: 'https://plusiam.github.io/step-inside-worksheet-improved/',
        githubUrl: 'https://github.com/plusiam/step-inside-worksheet-improved',
        hasInteractive: true
    },
    {
        id: 'abc-thinking',
        name: 'ABC Thinking',
        nameKo: 'ABC 생각바꾸기',
        stage: 'deepening',
        emoji: '🔤',
        description: '상황-생각-감정-행동의 연결고리를 이해하고 긍정적 사고로 전환',
        purpose: '인지행동 접근법을 통한 사고 패턴 인식과 전환',
        usage: '감정 조절, 갈등 해결, 긍정적 사고 훈련, 문제 상황 분석',
        subjects: ['all'],
        features: ['ABC 모델 구조', '사고 전환 가이드', '감정 이모지', '자동 저장', '이미지 다운로드'],
        keywords: ['인지행동', '사고전환', '감정조절', 'ABC모델', '긍정사고'],
        url: 'https://plusiam.github.io/abc-think/',
        githubUrl: 'https://github.com/plusiam/abc-think',
        hasInteractive: true
    }
];

// 단계별로 도구 필터링하는 헬퍼 함수
function getToolsByStage(stage) {
    return thinkingTools.filter(tool => tool.stage === stage);
}

// 과목별로 도구 필터링하는 헬퍼 함수
function getToolsBySubject(subject) {
    return thinkingTools.filter(tool => 
        tool.subjects.includes('all') || tool.subjects.includes(subject)
    );
}

// 키워드로 도구 검색하는 헬퍼 함수
function searchTools(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return thinkingTools.filter(tool => 
        tool.name.toLowerCase().includes(lowerKeyword) ||
        tool.nameKo.includes(keyword) ||
        tool.description.includes(keyword) ||
        tool.keywords.some(k => k.includes(keyword))
    );
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { thinkingTools, getToolsByStage, getToolsBySubject, searchTools };
}