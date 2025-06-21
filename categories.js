window.CATEGORIES = {
    "all": {
        name: "All Games",
        icon: "fas fa-th",
        color: "#8B5CF6"
    },
    "new": {
        name: "New Games", 
        icon: "fas fa-star",
        color: "#F59E0B"
    },
    "trending": {
        name: "Trending",
        icon: "fas fa-fire",
        color: "#EF4444"
    },
    "geometry-dash": {
        name: "Geometry Dash",
        icon: "fas fa-shapes",
        color: "#10B981"
    },
    "action": {
        name: "Action",
        icon: "fas fa-fist-raised",
        color: "#EF4444"
    },
    "adventure": {
        name: "Adventure", 
        icon: "fas fa-mountain",
        color: "#8B5CF6"
    },
    "puzzle": {
        name: "Puzzle",
        icon: "fas fa-puzzle-piece",
        color: "#06B6D4"
    },
    "match3": {
        name: "Match 3",
        icon: "fas fa-gem",
        color: "#DC2626"
    },
    "strategy": {
        name: "Strategy",
        icon: "fas fa-chess",
        color: "#6366F1"
    },
    "multiplayer": {
        name: "Multiplayer",
        icon: "fas fa-users",
        color: "#F59E0B"
    },
    "sports": {
        name: "Sports",
        icon: "fas fa-football-ball",
        color: "#10B981"
    },
    "simulation": {
        name: "Simulation",
        icon: "fas fa-cogs",
        color: "#84CC16"
    },
    "horror": {
        name: "Horror",
        icon: "fas fa-ghost",
        color: "#1F2937"
    },
    "casual": {
        name: "Casual",
        icon: "fas fa-smile",
        color: "#F97316"
    },
    "2player": {
        name: "2 Player",
        icon: "fas fa-user-friends",
        color: "#EC4899"
    },
    "skill": {
        name: "Skill Games",
        icon: "fas fa-brain",
        color: "#10B981"
    },
    girls: { name: "Girls Games", icon: "fas fa-heart" },
    card: { name: "Card Games", icon: "fas fa-clubs" },
    mahjong: { name: "Mahjong", icon: "fas fa-th" },
    minecraft: { name: "Minecraft", icon: "fas fa-cubes" },
    "wave-dash": { name: "Wave Dash", icon: "fas fa-wave-square" },
    io: { 
        name: "IO Games", 
        icon: "fas fa-globe",
        color: "#6366F1"
    },
    "tower-defense": { name: "Tower Defense", icon: "fas fa-chess-rook" }
};

window.CATEGORY_NAMES = Object.fromEntries(
    Object.entries(window.CATEGORIES).map(([k, v]) => [k, v.name])
); 