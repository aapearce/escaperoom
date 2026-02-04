// Main Game Engine
class Game {
    constructor() {
        this.currentRoom = null;
        this.timer = null;
        this.startTime = null;
        this.isPaused = false;
        this.hintsUsed = 0;
        this.maxHints = 3;
        this.progress = this.loadProgress();
        this.currentRoomData = null;
    }

    init() {
        this.updateProgressDisplay();
        this.showMainMenu();
    }

    // Navigation
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    showMainMenu() {
        this.showScreen('main-menu');
    }

    showInstructions() {
        this.showScreen('instructions');
    }

    showRoomSelect() {
        this.updateRoomSelection();
        this.showScreen('room-select');
    }

    showProgress() {
        this.updateProgressDisplay();
        this.showScreen('progress');
    }

    // Room Management
    startRoom(roomId) {
        this.currentRoom = roomId;
        this.hintsUsed = 0;
        this.startTime = Date.now();
        this.isPaused = false;
        
        // Load room data
        if (roomId === 'egypt') {
            this.currentRoomData = new EgyptRoom();
        } else if (roomId === 'renaissance') {
            this.currentRoomData = new RenaissanceRoom();
        } else if (roomId === 'space') {
            this.currentRoomData = new SpaceRoom();
        }
        
        this.currentRoomData.init();
        this.showScreen('game-room');
        this.startTimer();
        this.updateHintsDisplay();
        
        // Show welcome message from Chronos
        this.showChronosMessage(this.currentRoomData.welcomeMessage);
    }

    // Timer
    startTimer() {
        this.timer = setInterval(() => {
            if (!this.isPaused) {
                const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
                const minutes = Math.floor(elapsed / 60);
                const seconds = elapsed % 60;
                document.getElementById('timer').textContent = 
                    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    getElapsedTime() {
        return Math.floor((Date.now() - this.startTime) / 1000);
    }

    // Hints
    useHint() {
        if (this.hintsUsed >= this.maxHints) {
            this.showChronosMessage("Sorry, you've used all your hints! But you can do this! 🌟");
            return;
        }
        
        this.hintsUsed++;
        this.updateHintsDisplay();
        
        const hint = this.currentRoomData.getHint(this.hintsUsed);
        this.showChronosMessage(hint);
    }

    updateHintsDisplay() {
        const remaining = this.maxHints - this.hintsUsed;
        document.getElementById('hints-count').textContent = remaining;
    }

    // Chronos Messages
    showChronosMessage(message) {
        const bubble = document.getElementById('chronos-assistant');
        const messageEl = document.getElementById('chronos-message');
        
        messageEl.textContent = message;
        bubble.classList.remove('hidden');
        
        setTimeout(() => {
            bubble.classList.add('hidden');
        }, 5000);
    }

    // Clues and Inventory
    addClue(clue) {
        const cluesList = document.getElementById('clues-list');
        const noClues = cluesList.querySelector('.no-clues');
        if (noClues) noClues.remove();
        
        const clueEl = document.createElement('div');
        clueEl.className = 'clue-item';
        clueEl.textContent = clue;
        cluesList.appendChild(clueEl);
    }

    addInventoryItem(item, icon) {
        const inventory = document.getElementById('inventory');
        const noItems = inventory.querySelector('.no-items');
        if (noItems) noItems.remove();
        
        const itemEl = document.createElement('div');
        itemEl.className = 'inventory-item';
        itemEl.textContent = icon;
        itemEl.title = item;
        inventory.appendChild(itemEl);
    }

    // Puzzle Management
    showPuzzle(puzzleTitle, puzzleContent) {
        document.getElementById('puzzle-title').textContent = puzzleTitle;
        document.getElementById('puzzle-content').innerHTML = puzzleContent;
        document.getElementById('puzzle-modal').classList.add('active');
    }

    closePuzzle() {
        document.getElementById('puzzle-modal').classList.remove('active');
    }

    // Pause/Resume
    pauseGame() {
        this.isPaused = true;
        document.getElementById('pause-menu').classList.add('active');
    }

    resumeGame() {
        this.isPaused = false;
        document.getElementById('pause-menu').classList.remove('active');
    }

    restartRoom() {
        this.stopTimer();
        document.getElementById('pause-menu').classList.remove('active');
        this.startRoom(this.currentRoom);
    }

    quitToMenu() {
        this.stopTimer();
        document.getElementById('pause-menu').classList.remove('active');
        this.showMainMenu();
    }

    // Success
    completeRoom() {
        this.stopTimer();
        const timeElapsed = this.getElapsedTime();
        
        // Update progress
        if (!this.progress.completed[this.currentRoom]) {
            this.progress.totalEscapes++;
        }
        
        this.progress.completed[this.currentRoom] = true;
        this.progress.times[this.currentRoom] = timeElapsed;
        this.progress.totalHintsUsed += this.hintsUsed;
        
        // Update best time
        if (!this.progress.bestTime || timeElapsed < this.progress.bestTime) {
            this.progress.bestTime = timeElapsed;
        }
        
        // Check achievements
        this.checkAchievements();
        
        this.saveProgress();
        this.showSuccess(timeElapsed);
    }

    showSuccess(timeElapsed) {
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;
        const timeString = `${minutes}:${String(seconds).padStart(2, '0')}`;
        
        const stars = this.hintsUsed === 0 ? '⭐⭐⭐' : 
                     this.hintsUsed <= 1 ? '⭐⭐' : '⭐';
        
        document.getElementById('success-stats').innerHTML = `
            <div class="success-stat"><strong>Time:</strong> ${timeString}</div>
            <div class="success-stat"><strong>Hints Used:</strong> ${this.hintsUsed}/${this.maxHints}</div>
            <div class="success-stat"><strong>Rating:</strong> ${stars}</div>
            <div class="success-stat" style="margin-top: 15px; font-size: 1rem;">
                ${this.currentRoomData.successMessage}
            </div>
        `;
        
        document.getElementById('success-modal').classList.add('active');
    }

    nextRoom() {
        document.getElementById('success-modal').classList.remove('active');
        const rooms = ['egypt', 'renaissance', 'space'];
        const currentIndex = rooms.indexOf(this.currentRoom);
        const nextIndex = (currentIndex + 1) % rooms.length;
        this.startRoom(rooms[nextIndex]);
    }

    // Progress Management
    loadProgress() {
        const saved = localStorage.getItem('timetravel-progress');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            completed: {},
            times: {},
            totalEscapes: 0,
            totalHintsUsed: 0,
            bestTime: null,
            achievements: []
        };
    }

    saveProgress() {
        localStorage.setItem('timetravel-progress', JSON.stringify(this.progress));
    }

    updateProgressDisplay() {
        document.getElementById('total-escapes').textContent = this.progress.totalEscapes;
        document.getElementById('total-hints').textContent = this.progress.totalHintsUsed;
        
        if (this.progress.bestTime) {
            const minutes = Math.floor(this.progress.bestTime / 60);
            const seconds = this.progress.bestTime % 60;
            document.getElementById('best-time').textContent = 
                `${minutes}:${String(seconds).padStart(2, '0')}`;
        }
        
        // Update achievements
        const achievementsList = document.getElementById('achievements-list');
        if (achievementsList) {
            achievementsList.innerHTML = this.getAchievementsHTML();
        }
    }

    updateRoomSelection() {
        ['egypt', 'renaissance', 'space'].forEach(room => {
            const completed = this.progress.completed[room];
            const completionEl = document.getElementById(`${room}-completion`);
            const timeEl = document.getElementById(`${room}-time`);
            
            if (completed) {
                completionEl.textContent = '✅ Completed';
                completionEl.style.color = '#4CAF50';
                
                if (this.progress.times[room]) {
                    const time = this.progress.times[room];
                    const minutes = Math.floor(time / 60);
                    const seconds = time % 60;
                    timeEl.textContent = `⏱️ ${minutes}:${String(seconds).padStart(2, '0')}`;
                }
            }
        });
    }

    checkAchievements() {
        const achievements = [
            { id: 'first-escape', name: 'First Escape', condition: () => this.progress.totalEscapes >= 1 },
            { id: 'speed-demon', name: 'Speed Demon', condition: () => this.progress.bestTime && this.progress.bestTime < 300 },
            { id: 'no-hints', name: 'Genius', condition: () => this.hintsUsed === 0 },
            { id: 'complete-all', name: 'Time Master', condition: () => this.progress.totalEscapes >= 3 }
        ];
        
        achievements.forEach(achievement => {
            if (achievement.condition() && !this.progress.achievements.includes(achievement.id)) {
                this.progress.achievements.push(achievement.id);
                this.showChronosMessage(`🎉 Achievement Unlocked: ${achievement.name}!`);
            }
        });
    }

    getAchievementsHTML() {
        const allAchievements = [
            { id: 'first-escape', name: 'First Escape', icon: '🎯' },
            { id: 'speed-demon', name: 'Speed Demon', icon: '⚡' },
            { id: 'no-hints', name: 'Genius', icon: '🧠' },
            { id: 'complete-all', name: 'Time Master', icon: '👑' }
        ];
        
        return allAchievements.map(achievement => {
            const unlocked = this.progress.achievements.includes(achievement.id);
            return `
                <div class="achievement ${unlocked ? 'unlocked' : ''}">
                    <span class="achievement-icon">${unlocked ? achievement.icon : '🔒'}</span>
                    <div class="achievement-name">${achievement.name}</div>
                </div>
            `;
        }).join('');
    }
}

// Initialize game when page loads
const game = new Game();
window.addEventListener('DOMContentLoaded', () => {
    game.init();
});
