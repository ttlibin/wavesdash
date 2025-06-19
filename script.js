// Global variables
let currentCategory = 'all';
let currentSearchTerm = '';
let allGames = window.GAMES || [];

// DOM elements
const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('searchInput');
const contentTitle = document.getElementById('contentTitle');
const gameCount = document.getElementById('gameCount');
const loadingState = document.getElementById('loadingState');
const noResults = document.getElementById('noResults');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

// Initialize application
function initializeApp() {
    console.log('🚀 Initializing WavesDash Games Platform...');
    console.log('📊 Total games in database:', allGames.length);
    
    // Simulate loading
    setTimeout(() => {
        loadingState.style.display = 'none';
        loadGames();
        setupCategoryNavigation();
    }, 1000);
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality with debouncing
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                currentSearchTerm = e.target.value.toLowerCase().trim();
                filterAndDisplayGames();
            }, 300);
        });
    }
}

// Setup category navigation
function setupCategoryNavigation() {
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            selectCategory(category);
        });
    });
}

// Select category
function selectCategory(category) {
    // Update active state
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const selectedItem = document.querySelector(`[data-category="${category}"]`);
    if (selectedItem) {
        selectedItem.classList.add('active');
    }
    
    // Update current category
    currentCategory = category;
    
    // Update title
    const categoryName = window.CATEGORIES[category]?.name || 'Games';
    if (contentTitle) {
        contentTitle.textContent = categoryName;
    }
    
    // Filter and display games
    filterAndDisplayGames();
}

// Filter and display games
function filterAndDisplayGames() {
    let filteredGames = [...allGames];
    
    // Filter by category
    if (currentCategory !== 'all') {
        if (currentCategory === 'new') {
            // New games: 显示1个月内上架的游戏
            const oneMonthAgo = new Date();
            oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
            
            filteredGames = filteredGames.filter(game => {
                if (game.dateAdded) {
                    const gameDate = new Date(game.dateAdded);
                    return gameDate >= oneMonthAgo;
                }
                return false; // 如果没有上架日期，不显示在新游戏中
            }).sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)); // 按上架时间降序排序
            
        } else if (currentCategory === 'trending') {
            // Trending games: 显示评分大于4.5的游戏
            filteredGames = filteredGames
                .filter(game => game.rating > 4.5)
                .sort((a, b) => b.rating - a.rating); // 按评分降序排序
                
        } else {
            // 普通分类筛选 - 支持主分类和副分类
            filteredGames = filteredGames.filter(game => {
                // 检查主分类字段
                if (game.category === currentCategory) {
                    return true;
                }
                // 检查tags数组中是否包含分类名称（副分类）
                if (game.tags && Array.isArray(game.tags)) {
                    return game.tags.includes(currentCategory);
                }
                return false;
            });
        }
    }
    
    // Filter by search term
    if (currentSearchTerm) {
        filteredGames = filteredGames.filter(game =>
            game.title.toLowerCase().includes(currentSearchTerm) ||
            game.description.toLowerCase().includes(currentSearchTerm) ||
            game.tags.some(tag => tag.toLowerCase().includes(currentSearchTerm))
        );
    }
    
    // Update game count
    updateGameCount(filteredGames.length);
    
    // Display games or no results
    if (filteredGames.length === 0) {
        showNoResults();
    } else {
        hideNoResults();
        displayGames(filteredGames);
    }
}

// Load and display games
function loadGames() {
    displayGames(allGames);
    updateGameCount(allGames.length);
}

// Display games in grid
function displayGames(games) {
    console.log('🎯 Displaying games:', games.length);
    
    if (!gamesGrid) return;
    
    gamesGrid.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
    
    // 添加调试：检查所有游戏卡片的位置和可见性
    setTimeout(() => {
        const gameCards = gamesGrid.querySelectorAll('.game-card');
        console.log('🔗 Adding event listeners to', gameCards.length, 'game cards');
        
        gameCards.forEach((card, index) => {
            console.log(`🎯 Processing card ${index + 1}:`, card.dataset.gameId, card.className);
            
            // 检查卡片的位置和样式
            const rect = card.getBoundingClientRect();
            const style = getComputedStyle(card);
            console.log(`📐 Card ${index + 1} position:`, {
                rect: rect,
                pointerEvents: style.pointerEvents,
                zIndex: style.zIndex,
                display: style.display,
                visibility: style.visibility
            });
            
            card.addEventListener('click', (event) => {
                console.log('🖱️ Event listener triggered!', event);
                event.preventDefault();
                event.stopPropagation();
                
                const gameId = parseInt(card.dataset.gameId);
                console.log('🖱️ Game card clicked! Dataset gameId:', card.dataset.gameId, '→ Parsed:', gameId);
                openGame(gameId);
            }, true); // 使用capture模式
        });
        
        // 添加全局点击测试
        document.addEventListener('click', function(e) {
            console.log('🌍 Global click detected:', e.target, e.target.className);
        });
        
    }, 100);
}

// Create game card element
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.dataset.gameId = game.id;
    
    // 添加多重点击测试
    card.setAttribute('onclick', `alert('Card ${game.id} clicked!'); console.log('✨ Alert click for game ${game.id}'); openGame(${game.id});`);
    
    // 添加样式确保可点击
    card.style.cursor = 'pointer';
    card.style.pointerEvents = 'auto';
    card.style.zIndex = '1';
    
    // 处理分类显示
    let categoryDisplay = '';
    if (game.category) {
        categoryDisplay = window.CATEGORIES[game.category]?.name || game.category;
    }

    card.innerHTML = `
        <div class="game-thumb">
            <img src="${game.thumb}" alt="${game.title}" onerror="this.src='images/placeholder.svg'">
            <div class="game-overlay">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <div class="game-info-card">
            <h3>${game.title}</h3>
            <span class="game-category">${categoryDisplay}</span>
        </div>
    `;
    
    return card;
}

// Update game count display
function updateGameCount(count) {
    if (gameCount) {
        const text = count === 1 ? '1 game available' : `${count} games available`;
        gameCount.textContent = text;
    }
}

// Show no results state
function showNoResults() {
    if (gamesGrid) gamesGrid.style.display = 'none';
    if (noResults) noResults.style.display = 'block';
}

// Hide no results state
function hideNoResults() {
    if (gamesGrid) gamesGrid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';
}

// Open game page
function openGame(gameId) {
    console.log('🎮 Opening game with ID:', gameId);
    
    const game = allGames.find(g => g.id == gameId);
    if (game) {
        console.log('🎯 Found game:', game);
        
        // Store game data in sessionStorage
        sessionStorage.setItem('currentGame', JSON.stringify(game));
        
        // Verify storage
        const stored = JSON.parse(sessionStorage.getItem('currentGame'));
        console.log('✅ Verified stored data:', stored);
        
        // Navigate to game page using slug (SEO-friendly URL)
        const gameUrl = game.slug ? `game.html?game=${game.slug}` : `game.html?id=${gameId}`;
        console.log('🚀 Navigating to:', gameUrl);
        window.location.href = gameUrl;
    } else {
        console.error('❌ Game not found with ID:', gameId);
        console.log('📋 Available games:', allGames);
    }
}

// Get game by ID
function getGameById(id) {
    return allGames.find(game => game.id == id);
}

// Get games by category (for related games)
function getGamesByCategory(category, excludeId = null, limit = 4) {
    return allGames
        .filter(game => game.category === category && game.id !== excludeId)
        .slice(0, limit);
}

// Export functions for use in other files
window.getGameById = getGameById;
window.getGamesByCategory = getGamesByCategory; 
