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
    moral: [
        { value: 'self-relation', label: '자신과의 관계' },
        { value: 'others-relation', label: '타인과의 관계' },
        { value: 'community-relation', label: '사회-공동체와의 관계' },
        { value: 'nature-relation', label: '자연과의 관계' }
    ],
    art: [
        { value: 'appreciation', label: '작품 감상' },
        { value: 'expression', label: '표현 활동' },
        { value: 'creativity', label: '창작' },
        { value: 'analysis', label: '분석' }
    ]
};

// 추천 도구 매핑
const recommendationMap = {
    // 국어
    'korean-reading': ['see-think-wonder'],
    'korean-writing': ['think-puzzle-explore', 'connect-extend-challenge'],
    'korean-literature': ['see-think-wonder', 'step-inside', 'color-symbol-image'],
    'korean-grammar': ['think-puzzle-explore'],
    
    // 수학
    'math-number': ['think-puzzle-explore'],
    'math-geometry': ['see-think-wonder', 'color-symbol-image'],
    'math-measurement': ['think-puzzle-explore'],
    'math-pattern': ['see-think-wonder', 'connect-extend-challenge'],
    
    // 과학
    'science-physics': ['see-think-wonder', 'think-puzzle-explore'],
    'science-chemistry': ['think-puzzle-explore', 'color-symbol-image'],
    'science-biology': ['see-think-wonder', 'step-inside'],
    'science-earth': ['see-think-wonder', 'connect-extend-challenge'],
    
    // 사회
    'social-history': ['see-think-wonder', 'step-inside', 'color-symbol-image'],
    'social-geography': ['see-think-wonder', 'think-puzzle-explore'],
    'social-society': ['think-puzzle-explore', 'step-inside'],
    'social-culture': ['color-symbol-image', 'step-inside'],
    
    // 도덕
    'moral-self-relation': ['connect-extend-challenge', 'step-inside'],
    'moral-others-relation': ['circle-of-viewpoints', 'step-inside'],
    'moral-community-relation': ['compass-points', 'think-puzzle-explore'],
    'moral-nature-relation': ['see-think-wonder', 'color-symbol-image'],
    
    // 예술
    'art-appreciation': ['see-think-wonder', 'color-symbol-image', 'step-inside'],
    'art-expression': ['color-symbol-image', 'think-puzzle-explore'],
    'art-creativity': ['think-puzzle-explore', 'color-symbol-image'],
    'art-analysis': ['see-think-wonder', 'connect-extend-challenge']
};