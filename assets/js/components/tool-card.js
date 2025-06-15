// 도구 카드 생성 함수
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.setAttribute('data-tool-id', tool.id);
    card.setAttribute('data-stage', tool.stage);
    card.setAttribute('data-subjects', tool.subjects.join(','));
    
    // 인터랙티브 도구인 경우 링크 가능하게
    if (tool.hasInteractive && tool.url) {
        card.style.cursor = 'pointer';
        card.onclick = () => window.open(tool.url, '_blank');
    }
    
    card.innerHTML = `
        <div class="tool-header">
            <span class="tool-emoji">${tool.emoji}</span>
            <h4 class="tool-name">
                ${tool.name}
                <span class="tool-name-ko">${tool.nameKo}</span>
            </h4>
            ${tool.hasInteractive ? '<span class="interactive-badge">🚀 바로 사용</span>' : ''}
        </div>
        
        <p class="tool-description">${tool.description}</p>
        
        <div class="tool-meta">
            <div class="tool-purpose">
                <strong>목적:</strong> ${tool.purpose}
            </div>
            
            <div class="tool-usage">
                <strong>활용:</strong> ${tool.usage}
            </div>
            
            ${tool.features ? `
                <div class="tool-features">
                    ${tool.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
                </div>
            ` : ''}
            
            <div class="tool-subjects">
                ${tool.subjects.map(s => `<span class="subject-tag ${s}">${getSubjectName(s)}</span>`).join('')}
            </div>
        </div>
        
        <div class="tool-actions">
            ${tool.url ? `
                <a href="${tool.url}" target="_blank" class="tool-link primary">
                    도구 사용하기 →
                </a>
            ` : ''}
        </div>
    `;
    
    return card;
}

// 과목명 변환 함수
function getSubjectName(subject) {
    const subjectNames = {
        'all': '전체',
        'korean': '국어',
        'math': '수학',
        'science': '과학',
        'social': '사회',
        'art': '예술'
    };
    return subjectNames[subject] || subject;
}

// 도구 카드들을 렌더링하는 함수
function renderToolCards() {
    // 1단계 도구들
    const explorationContainer = document.getElementById('exploration-tools');
    if (explorationContainer) {
        explorationContainer.innerHTML = '';
        getToolsByStage('exploration').forEach(tool => {
            explorationContainer.appendChild(createToolCard(tool));
        });
    }
    
    // 2단계 도구들
    const synthesisContainer = document.getElementById('synthesis-tools');
    if (synthesisContainer) {
        synthesisContainer.innerHTML = '';
        getToolsByStage('synthesis').forEach(tool => {
            synthesisContainer.appendChild(createToolCard(tool));
        });
    }
    
    // 3단계 도구들
    const deepeningContainer = document.getElementById('deepening-tools');
    if (deepeningContainer) {
        deepeningContainer.innerHTML = '';
        getToolsByStage('deepening').forEach(tool => {
            deepeningContainer.appendChild(createToolCard(tool));
        });
    }
    
    // 도구 개수 업데이트
    const toolsCountElement = document.getElementById('tools-count');
    if (toolsCountElement) {
        toolsCountElement.textContent = thinkingTools.length;
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createToolCard, renderToolCards };
}