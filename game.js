// 删除原有的games数组，直接用window.GAMES
// Import game data (与script.js保持一致)
const games = [
    {
        id: 1,
        title: "Subway Surfers",
        category: "action",
        thumb: "images/placeholder.svg",
        iframeUrl: "https://poki.com/en/g/subway-surfers",
        description: "Run as fast as you can in this endless running game! Dodge trains, collect coins, and surf through colorful cities.",
        instructions: ["Arrow keys or WASD to move", "Spacebar to jump", "Collect coins and power-ups"],
        rating: 4.8
    },
    {
        id: 2,
        title: "Among Us Online",
        category: "multiplayer",
        thumb: "images/placeholder.svg",
        iframeUrl: "https://poki.com/en/g/among-us-online",
        description: "Find the impostor among your crew! Work together to complete tasks or eliminate crewmates as the impostor.",
        instructions: ["Mouse to move and interact", "Click to use", "Complete tasks or find impostor"],
        rating: 4.6
    },
    {
        id: 3,
        title: "Wave Dash",
        category: "wave-dash",
        thumb: "images/wave-dash.svg",
        iframeUrl: "https://www.miniplay.com/embed/wave-dash",
        description: "Jump and fly your way through danger in this rhythm-based action platformer!",
        instructions: ["Spacebar or mouse click to jump", "Follow the rhythm", "Avoid obstacles"],
        rating: 4.7
    },
    {
        id: 4,
        title: "Minecraft Classic",
        category: "minecraft",
        thumb: "images/placeholder.svg",
        iframeUrl: "https://classic.minecraft.net/",
        description: "Build your own world with blocks! Create amazing structures in this classic sandbox game.",
        instructions: ["WASD to move", "Mouse to look around", "Left click to break, right click to place"],
        rating: 4.9
    },
    {
        id: 5,
        title: "Temple Run 2",
        category: "action",
        thumb: "images/placeholder.svg",
        iframeUrl: "https://poki.com/en/g/temple-run-2",
        description: "Navigate perilous cliffs, zip lines, mines and forests in this endless running adventure!",
        instructions: ["Swipe to turn and jump", "Tilt to lean", "Collect coins and gems"],
        rating: 4.5
    },
    {
        id: 6,
        title: "2048",
        category: "puzzle",
        thumb: "images/placeholder.svg",
        iframeUrl: "https://poki.com/en/g/2048",
        description: "Join the numbers and get to the 2048 tile! Swipe to move tiles and combine matching numbers.",
        instructions: ["Arrow keys to move tiles", "Combine matching numbers", "Reach 2048 to win"],
        rating: 4.4
    },
    {
        id: 7,
        title: "Slither.io",
        category: "io",
        thumb: "images/placeholder.svg",
        iframeUrl: "https://slither.io/",
        description: "Control a snake and eat glowing orbs to grow longer. Avoid other snakes and try to become the biggest!",
        instructions: ["Mouse to control direction", "Eat glowing orbs", "Avoid other snakes"],
        rating: 4.3
    },
    {
        id: 8,
        title: "Basketball Stars",
        category: "sports",
        thumb: "images/placeholder.svg",
        iframeUrl: "https://poki.com/en/g/basketball-stars",
        description: "Shoot hoops and score big in this exciting basketball game! Challenge players worldwide.",
        instructions: ["Mouse to aim and shoot", "Time your shots perfectly", "Score more than opponent"],
        rating: 4.6
    },
    {
        id: 9,
        title: "Papa's Pizzeria",
        category: "girls",
        thumb: "images/placeholder.svg",
        iframeUrl: "https://poki.com/en/g/papas-pizzeria",
        description: "Run your own pizza restaurant! Take orders, make pizzas, and serve customers in this time management game.",
        instructions: ["Mouse to interact", "Take orders carefully", "Make pizzas to specification"],
        rating: 4.7
    },
    {
        id: 10,
        title: "Granny Horror",
        category: "horror",
        thumb: "images/placeholder.svg",
        iframeUrl: "https://poki.com/en/g/granny",
        description: "Escape from Granny's house! You have 5 days to get out. Don't make noise or she'll hear you...",
        instructions: ["WASD to move quietly", "Mouse to interact", "Find keys and items to escape"],
        rating: 4.2
    },
    {
        id: 11,
        title: "Fireboy and Watergirl",
        category: "2player",
        thumb: "images/placeholder.svg",
        iframeUrl: "https://poki.com/en/g/fireboy-and-watergirl-the-forest-temple",
        description: "Help Fireboy and Watergirl work together to collect gems and reach the exit in each level.",
        instructions: ["Arrow keys for Fireboy", "WASD for Watergirl", "Collect gems and reach exits"],
        rating: 4.8
    },
    {
        id: 12,
        title: "Bubble Shooter",
        category: "puzzle",
        thumb: "images/placeholder.svg",
        iframeUrl: "https://poki.com/en/g/bubble-shooter",
        description: "Match three or more bubbles of the same color to clear them from the board in this classic puzzle game.",
        instructions: ["Mouse to aim and shoot", "Match 3+ same colors", "Clear all bubbles to win"],
        rating: 4.1
    }
];

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

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeGamePage();
});

// Initialize game page
function initializeGamePage() {
    console.log('🎮 Initializing game page...');
    
    // Get game data from sessionStorage
    const gameData = sessionStorage.getItem('currentGame');
    console.log('📦 Raw sessionStorage data:', gameData);
    
    if (!gameData) {
        console.warn('⚠️ No game data found in sessionStorage, redirecting to homepage');
        // If no game data, return to homepage
        window.location.href = 'index.html';
        return;
    }
    
    try {
        currentGame = JSON.parse(gameData);
        console.log('✅ Successfully parsed game data:', currentGame);
        
        setupGamePage();
        setupEventListeners();
        loadGame();
    } catch (error) {
        console.error('❌ Failed to parse game data:', error);
        console.log('📄 Raw data that failed to parse:', gameData);
        window.location.href = 'index.html';
    }
}

// 设置游戏页面
function setupGamePage() {
    // 更新页面标题
    document.title = `${currentGame.title} - WAVE⚡DASH`;
    
    // 更新导航栏游戏标题
    gameTitle.textContent = currentGame.title;
    
    // 更新游戏信息
    gameDetailsTitle.textContent = `About ${currentGame.title}`;
    gameCategory.textContent = window.CATEGORY_NAMES[currentGame.category] || currentGame.category;
    gameRating.textContent = currentGame.rating;
    gameDescription.textContent = currentGame.description;
    
    // 更新游戏操作说明
    gameTags.innerHTML = '';
    currentGame.instructions.forEach(instruction => {
        const tagElement = document.createElement('span');
        tagElement.className = 'game-tag';
        tagElement.textContent = instruction;
        gameTags.appendChild(tagElement);
    });
    
    // 加载相关游戏
    loadRelatedGames();
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