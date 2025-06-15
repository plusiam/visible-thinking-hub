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
            ${tool.githubUrl ? `
                <a href="${tool.githubUrl}" target="_blank" class="tool-link github">
                    <svg class="github-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    소스 코드
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