// 全局变量
let currentGame = null;
let isFullscreen = false;
let gameLoadTimeout = null;

// DOM 元素
const gameFrame = document.getElementById('gameFrame');
const gameLoading = document.getElementById('gameLoading');
const gameError = document.getElementById('gameError');
const gameTitle = document.getElementById('gameTitle');
const gameDetailsTitle = document.getElementById('gameDetailsTitle');
const gameCategory = document.getElementById('gameCategory');
const gameRating = document.getElementById('gameRating');
const gameDescription = document.getElementById('gameDescription');
const gameTags = document.getElementById('gameTags');
const relatedGamesGrid = document.getElementById('relatedGamesGrid');

// New DOM elements for enhanced content
const howToPlaySection = document.getElementById('howToPlaySection');
const howToPlayList = document.getElementById('howToPlayList');
const goalsSection = document.getElementById('goalsSection');
const goalsContent = document.getElementById('goalsContent');
const levelsSection = document.getElementById('levelsSection');
const levelsList = document.getElementById('levelsList');
const proTipsSection = document.getElementById('proTipsSection');
const proTipsList = document.getElementById('proTipsList');
const compatibilitySection = document.getElementById('compatibilitySection');
const compatibilityContent = document.getElementById('compatibilityContent');
const faqSection = document.getElementById('faqSection');
const faqList = document.getElementById('faqList');
const attributionSection = document.getElementById('attributionSection');
const attributionContent = document.getElementById('attributionContent');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeGamePage();
});

// Initialize game page
function initializeGamePage() {
    console.log('🎮 Initializing game page...');
    
    // First try to get game from URL parameters (slug support)
    const urlParams = new URLSearchParams(window.location.search);
    const gameSlug = urlParams.get('game');
    const gameId = urlParams.get('id');
    
    console.log('🔍 URL parameters - slug:', gameSlug, 'id:', gameId);
    
    if (gameSlug) {
        // Find game by slug (SEO-friendly URL)
        currentGame = window.GAMES.find(game => game.slug === gameSlug);
        console.log('🎯 Found game by slug:', currentGame);
    } else if (gameId) {
        // Fallback: find game by ID (backward compatibility)
        currentGame = window.GAMES.find(game => game.id === parseInt(gameId));
        console.log('🎯 Found game by ID:', currentGame);
    }
    
    // If still no game found, try sessionStorage
    if (!currentGame) {
        const gameData = sessionStorage.getItem('currentGame');
        console.log('📦 Trying sessionStorage:', gameData);
        
        if (gameData) {
            try {
                currentGame = JSON.parse(gameData);
                console.log('✅ Successfully parsed game data from sessionStorage:', currentGame);
            } catch (error) {
                console.error('❌ Failed to parse game data from sessionStorage:', error);
            }
        }
    }
    
    if (!currentGame) {
        console.warn('⚠️ No game found, redirecting to homepage');
        window.location.href = 'index.html';
        return;
    }
    
    // Update URL to use slug if not already using it
    if (!gameSlug && currentGame.slug) {
        const newUrl = `${window.location.pathname}?game=${currentGame.slug}`;
        window.history.replaceState({}, '', newUrl);
        console.log('🔄 Updated URL to use slug:', newUrl);
    }
    
    setupGamePage();
    setupEventListeners();
    loadGame();
}

// 设置游戏页面
function setupGamePage() {
    // 更新页面标题和SEO meta标签
    const gameTitleText = currentGame.seo?.metaTitle || `${currentGame.title} - Play Online Free | WAVE⚡DASH`;
    const gameDescriptionText = currentGame.seo?.metaDescription || `${currentGame.description} Play ${currentGame.title} online for free on WavesDash - no downloads required!`;
    const canonicalUrl = currentGame.seo?.canonicalUrl || `https://wavesdash.com/game.html?game=${currentGame.slug || currentGame.id}`;
    const gameImage = currentGame.thumb ? `https://wavesdash.com/${currentGame.thumb}` : 'https://wavesdash.com/images/wave-dash.jpg';
    
    document.title = gameTitleText;
    
    // 更新或创建meta标签
    updateMetaTag('name', 'description', gameDescriptionText);
    updateMetaTag('name', 'keywords', `${currentGame.title}, ${currentGame.category}, free online games, browser games${currentGame.tags ? ', ' + currentGame.tags.join(', ') : ''}`);
    updateMetaTag('property', 'og:title', gameTitleText);
    updateMetaTag('property', 'og:description', gameDescriptionText);
    updateMetaTag('property', 'og:image', gameImage);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'twitter:title', gameTitleText);
    updateMetaTag('property', 'twitter:description', gameDescriptionText);
    updateMetaTag('property', 'twitter:image', gameImage);
    
    // 更新canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
    
    // 更新导航栏游戏标题
    gameTitle.textContent = currentGame.title;
    
    // 更新游戏信息
    gameDetailsTitle.textContent = `About ${currentGame.title}`;
    gameCategory.textContent = window.CATEGORY_NAMES[currentGame.category] || currentGame.category;
    gameRating.textContent = currentGame.rating;
    gameDescription.textContent = currentGame.description;
    
    // 更新游戏操作说明
    gameTags.innerHTML = '';
    if (currentGame.instructions && currentGame.instructions.length > 0) {
        currentGame.instructions.forEach(instruction => {
            const tagElement = document.createElement('span');
            tagElement.className = 'game-tag';
            tagElement.textContent = instruction;
            gameTags.appendChild(tagElement);
        });
    }
    
    // 添加结构化数据
    addGameStructuredData();
    
    // 渲染增强内容
    renderEnhancedContent();
    
    // 加载相关游戏
    loadRelatedGames();
}

// 更新或创建meta标签的辅助函数
function updateMetaTag(attr, value, content) {
    let meta = document.querySelector(`meta[${attr}="${value}"]`);
    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, value);
        document.head.appendChild(meta);
    }
    meta.content = content;
}

// 添加游戏结构化数据
function addGameStructuredData() {
    // 移除旧的结构化数据（如果存在）
    const oldScript = document.querySelector('script#game-structured-data');
    if (oldScript) {
        oldScript.remove();
    }
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "VideoGame",
        "name": currentGame.title,
        "description": currentGame.description,
        "gameLocation": window.location.href,
        "applicationCategory": "Game",
        "operatingSystem": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "aggregateRating": currentGame.rating ? {
            "@type": "AggregateRating",
            "ratingValue": currentGame.rating,
            "bestRating": "5",
            "ratingCount": "1"
        } : undefined,
        "genre": currentGame.category || "Game",
        "gameItem": currentGame.tags || []
    };
    
    if (currentGame.thumb) {
        structuredData.image = `https://wavesdash.com/${currentGame.thumb}`;
    }
    
    // 移除undefined属性
    Object.keys(structuredData).forEach(key => {
        if (structuredData[key] === undefined) {
            delete structuredData[key];
        }
    });
    
    const script = document.createElement('script');
    script.id = 'game-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    // 添加BreadcrumbList结构化数据
    addBreadcrumbStructuredData();
}

// 添加面包屑结构化数据
function addBreadcrumbStructuredData() {
    const oldBreadcrumb = document.querySelector('script#breadcrumb-structured-data');
    if (oldBreadcrumb) {
        oldBreadcrumb.remove();
    }
    
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://wavesdash.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": window.CATEGORY_NAMES[currentGame.category] || currentGame.category,
                "item": `https://wavesdash.com/?category=${currentGame.category}`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": currentGame.title,
                "item": window.location.href
            }
        ]
    };
    
    const script = document.createElement('script');
    script.id = 'breadcrumb-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(script);
}

// 设置事件监听器
function setupEventListeners() {
    // 全屏按钮
    document.addEventListener('keydown', handleKeydown);
    
    // 键盘快捷键
    document.addEventListener('keydown', handleKeydown);
    
    // iframe 加载事件
    gameFrame.addEventListener('load', handleGameLoad);
    gameFrame.addEventListener('error', handleGameError);
    
    // 全屏状态变化
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
}

// Load game
function loadGame() {
    showGameLoading();
    
    // Set loading timeout
    gameLoadTimeout = setTimeout(() => {
        handleGameError();
    }, 15000); // 15 second timeout
    
    // Load iframe
    gameFrame.src = currentGame.iframeUrl;
}

// Show game loading state
function showGameLoading() {
    gameLoading.style.display = 'flex';
    gameFrame.style.display = 'none';
    gameError.style.display = 'none';
}

// Handle game load complete
function handleGameLoad() {
    clearTimeout(gameLoadTimeout);
    
    setTimeout(() => {
        gameLoading.style.display = 'none';
        gameFrame.style.display = 'block'; // 确保iframe显示
        gameError.style.display = 'none';
        
        console.log('✅ 游戏加载完成，iframe已显示');
        console.log('iframe当前样式:', {
            display: gameFrame.style.display,
            width: gameFrame.style.width,
            height: gameFrame.style.height
        });
    }, 1000); // Delay 1 second to ensure content loads completely
}

// Handle game loading error
function handleGameError() {
    clearTimeout(gameLoadTimeout);
    
    gameLoading.style.display = 'none';
    gameFrame.style.display = 'none';
    gameError.style.display = 'flex';
}

// Refresh game
function refreshGame() {
    loadGame();
}

// Retry game loading
function retryGame() {
    loadGame();
}

// Toggle fullscreen mode
function toggleFullscreen() {
    if (!isFullscreen) {
        enterFullscreen();
    } else {
        exitFullscreen();
    }
}

// Enter fullscreen
function enterFullscreen() {
    const gameContainer = document.querySelector('.game-container');
    const gameFrame = document.getElementById('gameFrame');
    
    console.log('🔍 进入全屏模式...');
    console.log('gameContainer:', gameContainer);
    console.log('gameFrame:', gameFrame);
    
    // 确保iframe可见
    if (gameFrame) {
        gameFrame.style.display = 'block';
        console.log('✅ 设置iframe为可见');
    }
    
    // 添加全屏样式类
    gameContainer.classList.add('fullscreen');
    document.body.classList.add('fullscreen-active');
    
    console.log('✅ 添加全屏CSS类');
    
    // 尝试浏览器原生全屏API
    const element = gameContainer;
    if (element.requestFullscreen) {
        element.requestFullscreen().catch(err => {
            console.log('浏览器全屏API失败，使用CSS全屏:', err);
        });
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else {
        console.log('浏览器不支持全屏API，仅使用CSS全屏');
    }

    // 更新按钮状态
    const fullscreenBtn = document.querySelector('.fullscreen-btn');
    const icon = fullscreenBtn.querySelector('i');
    const text = fullscreenBtn.querySelector('span') || fullscreenBtn.childNodes[fullscreenBtn.childNodes.length - 1];
    
    if (icon) icon.className = 'fas fa-compress';
    if (text && text.textContent) text.textContent = ' 退出全屏';
    
    isFullscreen = true;
    
    // 强制重新计算iframe尺寸
    setTimeout(() => {
        if (gameFrame) {
            gameFrame.style.width = '100vw';
            gameFrame.style.height = '100vh';
            console.log('🔧 强制设置iframe全屏尺寸');
        }
    }, 100);
}

// Exit fullscreen
function exitFullscreen() {
    const gameContainer = document.querySelector('.game-container');
    const gameFrame = document.getElementById('gameFrame');
    
    console.log('🔍 退出全屏模式...');
    
    // 移除全屏样式类
    gameContainer.classList.remove('fullscreen');
    document.body.classList.remove('fullscreen-active');
    
    // 恢复iframe正常尺寸
    if (gameFrame) {
        gameFrame.style.width = '';
        gameFrame.style.height = '';
        console.log('🔧 恢复iframe正常尺寸');
    }
    
    // 退出浏览器原生全屏
    if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => {
            console.log('退出浏览器全屏失败:', err);
        });
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }

    // 更新按钮状态
    const fullscreenBtn = document.querySelector('.fullscreen-btn');
    const icon = fullscreenBtn.querySelector('i');
    const text = fullscreenBtn.querySelector('span') || fullscreenBtn.childNodes[fullscreenBtn.childNodes.length - 1];
    
    if (icon) icon.className = 'fas fa-expand';
    if (text && text.textContent) text.textContent = ' 全屏';
    
    isFullscreen = false;
}

// Handle fullscreen state change
function handleFullscreenChange() {
    const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
    );
    
    if (!isCurrentlyFullscreen && isFullscreen) {
        exitFullscreen();
    }
}

// Handle keyboard events
function handleKeydown(event) {
    switch (event.key) {
        case 'F11':
            event.preventDefault();
            toggleFullscreen();
            break;
        case 'Escape':
            if (isFullscreen) {
                exitFullscreen();
            }
            break;
        case 'F5':
            event.preventDefault();
            refreshGame();
            break;
    }
}

// Return to homepage
function goBack() {
    window.location.href = 'index.html';
}

// 渲染增强内容
function renderEnhancedContent() {
    // Render How to Play section
    if (currentGame.howToPlay && currentGame.howToPlay.length > 0) {
        howToPlayList.innerHTML = '';
        currentGame.howToPlay.forEach((step, index) => {
            const stepElement = document.createElement('div');
            stepElement.className = 'how-to-play-step';
            stepElement.innerHTML = `
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                    <h4>${step.step}</h4>
                    <p>${step.detail}</p>
                </div>
            `;
            howToPlayList.appendChild(stepElement);
        });
        howToPlaySection.style.display = 'block';
    }

    // Render Goals and Scoring section
    if (currentGame.goalsAndScoring) {
        goalsContent.innerHTML = `
            <div class="goal-item">
                <h4><i class="fas fa-flag-checkered"></i> Win Condition</h4>
                <p>${currentGame.goalsAndScoring.win}</p>
            </div>
            <div class="goal-item">
                <h4><i class="fas fa-star"></i> Scoring</h4>
                <p>${currentGame.goalsAndScoring.score}</p>
            </div>
        `;
        goalsSection.style.display = 'block';
    }

    // Render Levels section
    if (currentGame.levels && currentGame.levels.length > 0) {
        levelsList.innerHTML = '';
        currentGame.levels.forEach((level, index) => {
            const levelElement = document.createElement('div');
            levelElement.className = 'level-item';
            levelElement.innerHTML = `
                <h4>${level.name}</h4>
                <p>${level.strategy}</p>
            `;
            levelsList.appendChild(levelElement);
        });
        levelsSection.style.display = 'block';
    }

    // Render Pro Tips section
    if (currentGame.proTips && currentGame.proTips.length > 0) {
        proTipsList.innerHTML = '';
        currentGame.proTips.forEach(tip => {
            const tipElement = document.createElement('div');
            tipElement.className = 'pro-tip-item';
            tipElement.innerHTML = `
                <i class="fas fa-lightbulb"></i>
                <span>${tip}</span>
            `;
            proTipsList.appendChild(tipElement);
        });
        proTipsSection.style.display = 'block';
    }

    // Render Compatibility section
    if (currentGame.compatibility) {
        let issuesHtml = '';
        if (currentGame.compatibility.issues && currentGame.compatibility.issues.length > 0) {
            issuesHtml = `
                <div class="compatibility-issues">
                    <h4>Known Issues:</h4>
                    <ul>
                        ${currentGame.compatibility.issues.map(issue => `<li>${issue}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        compatibilityContent.innerHTML = `
            <div class="compatibility-info">
                <div class="compatibility-item">
                    <i class="fas fa-mobile-alt"></i>
                    <span><strong>Mobile:</strong> ${currentGame.compatibility.mobile}</span>
                </div>
                <div class="compatibility-item">
                    <i class="fas fa-desktop"></i>
                    <span><strong>Desktop:</strong> ${currentGame.compatibility.pc}</span>
                </div>
            </div>
            ${issuesHtml}
        `;
        compatibilitySection.style.display = 'block';
    }

    // Render FAQ section
    if (currentGame.faq && currentGame.faq.length > 0) {
        faqList.innerHTML = '';
        currentGame.faq.forEach(faq => {
            const faqElement = document.createElement('div');
            faqElement.className = 'faq-item';
            faqElement.innerHTML = `
                <div class="faq-question">
                    <h4>${faq.q}</h4>
                </div>
                <div class="faq-answer">
                    <p>${faq.a}</p>
                </div>
            `;
            faqList.appendChild(faqElement);
        });
        faqSection.style.display = 'block';
    }

    // Render Attribution section
    if (currentGame.attribution) {
        attributionContent.innerHTML = `
            <div class="attribution-info">
                <div class="attribution-item">
                    <i class="fas fa-external-link-alt"></i>
                    <span><strong>Source:</strong> ${currentGame.attribution.source}</span>
                </div>
                ${currentGame.attribution.publisher ? `
                <div class="attribution-item">
                    <i class="fas fa-copyright"></i>
                    <span><strong>Publisher:</strong> ${currentGame.attribution.publisher}</span>
                </div>
                ` : ''}
                ${currentGame.attribution.sourceUrl ? `
                <div class="attribution-item">
                    <a href="${currentGame.attribution.sourceUrl}" target="_blank" rel="noopener">
                        <i class="fas fa-link"></i>
                        <span>Visit Original Source</span>
                    </a>
                </div>
                ` : ''}
            </div>
        `;
        attributionSection.style.display = 'block';
    }
}

// Load related games
function loadRelatedGames() {
    // Get other games in the same category
    const relatedGames = window.GAMES
        .filter(game => game.id !== currentGame.id && game.category === currentGame.category)
        .slice(0, 5); // Show maximum 5 related games
    
    // If not enough games in same category, add other high-rated games
    if (relatedGames.length < 5) {
        const otherGames = window.GAMES
            .filter(game => game.id !== currentGame.id && game.category !== currentGame.category)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5 - relatedGames.length);
        
        relatedGames.push(...otherGames);
    }
    
    renderRelatedGames(relatedGames);
}

// Render related games
function renderRelatedGames(relatedGames) {
    relatedGamesGrid.innerHTML = '';
    
    relatedGames.forEach(game => {
        const gameCard = createRelatedGameCard(game);
        relatedGamesGrid.appendChild(gameCard);
    });
}

// Create related game item
function createRelatedGameCard(game) {
    const card = document.createElement('div');
    card.className = 'related-game-card';
    card.onclick = () => openRelatedGame(game);
    
    card.innerHTML = `
        <div class="related-game-thumb">
            <img src="${game.thumb}" alt="${game.title}" loading="lazy">
        </div>
        <div class="related-game-info">
            <h4>${game.title}</h4>
            <span>${window.CATEGORY_NAMES[game.category] || game.category}</span>
        </div>
    `;
    
    return card;
}

// Open related game
function openRelatedGame(game) {
    // Update sessionStorage
    sessionStorage.setItem('currentGame', JSON.stringify(game));
    
    // Update URL to use slug (SEO-friendly)
    const gameUrl = game.slug ? `?game=${game.slug}` : `?id=${game.id}`;
    window.history.pushState({}, '', gameUrl);
    
    // Re-initialize current page
    currentGame = game;
    setupGamePage();
    loadGame();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Utility function: detect device type
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Utility function: detect network status
function isOnline() {
    return navigator.onLine;
}

// Network status monitoring
window.addEventListener('online', function() {
    if (gameError.style.display === 'flex') {
        retryGame();
    }
});

window.addEventListener('offline', function() {
    console.warn('Network connection lost');
});

// Prevent right-click menu (optional)
gameFrame.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Game performance monitoring
let gameStartTime = Date.now();

function logGamePerformance() {
    const loadTime = Date.now() - gameStartTime;
    console.log(`Game loading time: ${loadTime}ms`);
}

// Record performance after game loads
gameFrame.addEventListener('load', logGamePerformance);

// Error reporting
window.addEventListener('error', function(e) {
    console.error('Game page error:', e.error);
});

// Mobile optimization
if (isMobileDevice()) {
    // Mobile-specific optimizations
    document.body.classList.add('mobile');
    
    // Prevent mobile pinch zoom
    document.addEventListener('touchstart', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    });
    
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(e) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    });
}

// Page Visibility API
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause game when page is hidden (if supported)
        console.log('Page hidden, may need to pause game');
    } else {
        // Resume game when page is shown
        console.log('Page visible, resume game');
    }
});

// Memory cleanup
window.addEventListener('beforeunload', function() {
    clearTimeout(gameLoadTimeout);
    sessionStorage.removeItem('currentGame');
}); 
