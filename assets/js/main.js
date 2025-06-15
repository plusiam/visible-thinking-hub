// DOM이 로드되면 실행
document.addEventListener('DOMContentLoaded', function() {
    // 도구 카드 렌더링
    renderToolCards();
    
    // 테마 토글 기능
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('.theme-icon').textContent = '🌙';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.querySelector('.theme-icon').textContent = isDark ? '🌙' : '☀️';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    
    // 검색 기능
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            const allCards = document.querySelectorAll('.tool-card');
            
            allCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (keyword === '' || text.includes(keyword)) {
                    card.classList.remove('search-hidden');
                } else {
                    card.classList.add('search-hidden');
                }
            });
        });
    }
    
    // 추천 기능
    const subjectSelect = document.getElementById('subject-select');
    const themeSelect = document.getElementById('theme-select');
    const recommendBtn = document.getElementById('get-recommendation');
    
    if (subjectSelect && themeSelect && recommendBtn) {
        subjectSelect.addEventListener('change', (e) => {
            const subject = e.target.value;
            themeSelect.innerHTML = '<option value="">학습 주제 선택...</option>';
            themeSelect.disabled = !subject;
            recommendBtn.disabled = !subject;
            
            if (subject && subjectThemes[subject]) {
                subjectThemes[subject].forEach(theme => {
                    const option = document.createElement('option');
                    option.value = theme.value;
                    option.textContent = theme.label;
                    themeSelect.appendChild(option);
                });
            }
        });
        
        themeSelect.addEventListener('change', (e) => {
            recommendBtn.disabled = !e.target.value;
        });
        
        recommendBtn.addEventListener('click', () => {
            const subject = subjectSelect.value;
            const theme = themeSelect.value;
            const recommendationKey = `${subject}-${theme}`;
            
            const resultDiv = document.getElementById('recommendation-result');
            const recommendations = recommendationMap[recommendationKey] || [];
            
            if (recommendations.length > 0) {
                const recommendedTools = recommendations.map(id => 
                    thinkingTools.find(tool => tool.id === id)
                ).filter(Boolean);
                
                resultDiv.innerHTML = `
                    <h3>🎯 추천 사고가시화 도구</h3>
                    <div class="recommended-tools">
                        ${recommendedTools.map(tool => `
                            <div class="recommended-tool">
                                <span class="tool-emoji">${tool.emoji}</span>
                                <div>
                                    <h4>${tool.name} (${tool.nameKo})</h4>
                                    <p>${tool.description}</p>
                                    ${tool.url ? `<a href="${tool.url}" target="_blank" class="tool-link">사용하기 →</a>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
                resultDiv.style.display = 'block';
            } else {
                resultDiv.innerHTML = `
                    <p>선택하신 주제에 대한 추천 도구를 찾을 수 없습니다. 
                    다른 주제를 선택해보시거나 전체 도구를 둘러보세요.</p>
                `;
                resultDiv.style.display = 'block';
            }
        });
    }
    
    // 부드러운 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 오프라인 감지
    window.addEventListener('offline', () => {
        document.body.classList.add('offline');
    });
    
    window.addEventListener('online', () => {
        document.body.classList.remove('offline');
    });
    
    // 저작권 연도 업데이트
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});