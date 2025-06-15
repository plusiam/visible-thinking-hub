// 과목별 학습 주제 데이터
const subjectThemes = {
    korean: [
        { value: 'reading', label: '읽기 이해' },
        { value: 'writing', label: '글쓰기' },
        { value: 'literature', label: '문학 감상' },
        { value: 'grammar', label: '문법' }
    ],
    math: [
        { value: 'number', label: '수와 연산' },
        { value: 'geometry', label: '도형' },
        { value: 'measurement', label: '측정' },
        { value: 'pattern', label: '규칙성' }
    ],
    science: [
        { value: 'physics', label: '물리' },
        { value: 'chemistry', label: '화학' },
        { value: 'biology', label: '생물' },
        { value: 'earth', label: '지구과학' }
    ],
    social: [
        { value: 'history', label: '역사' },
        { value: 'geography', label: '지리' },
        { value: 'society', label: '사회 현상' },
        { value: 'culture', label: '문화' }
    ],
    art: [
        { value: 'appreciation', label: '작품 감상' },
        { value: 'expression', label: '표현 활동' },
        { value: 'creativity', label: '창작' },
        { value: 'analysis', label: '분석' }
    ]
};

// 추천 도구 매핑 (현재는 2개 도구만 있으므로 간단하게)
const recommendationMap = {
    // 국어
    'korean-reading': ['see-think-wonder'],
    'korean-writing': ['think-puzzle-explore'],
    'korean-literature': ['see-think-wonder'],
    
    // 수학
    'math-number': ['think-puzzle-explore'],
    'math-geometry': ['see-think-wonder'],
    
    // 과학
    'science-physics': ['see-think-wonder', 'think-puzzle-explore'],
    'science-biology': ['see-think-wonder'],
    
    // 사회
    'social-history': ['see-think-wonder'],
    'social-society': ['think-puzzle-explore'],
    
    // 예술
    'art-appreciation': ['see-think-wonder'],
    'art-creativity': ['think-puzzle-explore']
};