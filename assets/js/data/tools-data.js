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