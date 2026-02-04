// Ancient Egypt Room - The Pharaoh's Lost Cipher
class EgyptRoom {
    constructor() {
        this.puzzlesSolved = {
            hieroglyphs: false,
            sarcophagus: false,
            scales: false,
            portal: false
        };
        this.welcomeMessage = "Welcome to Ancient Egypt, 3000 BCE! You're trapped in a pharaoh's tomb. Solve the ancient puzzles to escape!";
        this.successMessage = "Amazing! You've deciphered the pharaoh's secrets and escaped the tomb! The ancient Egyptians would be impressed by your wisdom.";
    }

    init() {
        document.getElementById('room-title').textContent = '🏺 Ancient Egypt - The Pharaoh\'s Lost Cipher';
        this.renderRoom();
    }

    renderRoom() {
        const roomView = document.getElementById('room-view');
        roomView.innerHTML = `
            <div class="room-intro" style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #ffd700; margin-bottom: 15px;">The Pharaoh's Tomb</h2>
                <p style="font-size: 1.1rem; line-height: 1.6;">
                    You find yourself trapped in an ancient Egyptian tomb. The walls are covered in mysterious hieroglyphs, 
                    and golden artifacts glitter in the torchlight. To escape, you must solve the puzzles left by the pharaoh's priests.
                </p>
            </div>

            <div class="room-grid">
                <div class="room-object" onclick="egyptRoom.examineHieroglyphs()">
                    <h3>📜 Wall Hieroglyphs</h3>
                    <p>Ancient Egyptian writing covers the wall. Some symbols seem to glow faintly...</p>
                </div>

                <div class="room-object" onclick="egyptRoom.examineSarcophagus()">
                    <h3>⚰️ Golden Sarcophagus</h3>
                    <p>A magnificent sarcophagus stands in the center, sealed with numbered locks.</p>
                </div>

                <div class="room-object" onclick="egyptRoom.examineScales()">
                    <h3>⚖️ Scales of Ma'at</h3>
                    <p>The goddess's sacred scales must be balanced to prove your worthiness.</p>
                </div>

                <div class="room-object" id="portal-object" style="opacity: 0.3; cursor: not-allowed;">
                    <h3>🚪 Portal Home</h3>
                    <p>A shimmering portal, but it's locked. You need to complete all puzzles first.</p>
                </div>
            </div>

            <div id="puzzle-status" style="margin-top: 30px; padding: 20px; background: rgba(255, 215, 0, 0.1); border-radius: 10px;">
                <h3 style="text-align: center; margin-bottom: 15px;">📋 Puzzle Progress</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
                    <div id="status-hieroglyphs" class="puzzle-status-item">📜 Hieroglyphs: ❌</div>
                    <div id="status-sarcophagus" class="puzzle-status-item">⚰️ Sarcophagus: ❌</div>
                    <div id="status-scales" class="puzzle-status-item">⚖️ Scales: ❌</div>
                </div>
            </div>
        `;
    }

    examineHieroglyphs() {
        if (this.puzzlesSolved.hieroglyphs) {
            game.showChronosMessage("You've already deciphered these hieroglyphs!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    These hieroglyphs tell a story. Match each symbol to its meaning to unlock the first secret.
                    <br><br>The ancient Egyptians used these symbols to write. Can you decode the message?
                </p>
                
                <div style="margin: 20px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                    <h4 style="margin-bottom: 10px;">Symbol Guide:</h4>
                    <p>🌊 = Water/River</p>
                    <p>🦅 = Eagle/Sky</p>
                    <p>☀️ = Sun/Day</p>
                    <p>🏛️ = House/Temple</p>
                </div>

                <p style="margin: 20px 0; font-size: 1.2rem;">
                    <strong>Decode this phrase:</strong><br>
                    "The ☀️ rises over the 🌊"
                </p>

                <div class="puzzle-input-group">
                    <input type="text" id="hieroglyph-answer" class="puzzle-input" 
                           placeholder="Type your answer..." />
                </div>

                <button class="puzzle-submit" onclick="egyptRoom.checkHieroglyphs()">Submit Answer</button>
                <div id="hieroglyph-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('Hieroglyphic Puzzle', puzzleContent);
    }

    checkHieroglyphs() {
        const answer = document.getElementById('hieroglyph-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('hieroglyph-feedback');
        
        const correct = ['the sun rises over the water', 'the sun rises over the river', 
                        'sun rises over water', 'sun rises over river'];
        
        if (correct.some(ans => answer.includes('sun') && answer.includes('rises') && 
                              (answer.includes('water') || answer.includes('river')))) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! The hieroglyphs glow with approval!';
            this.puzzlesSolved.hieroglyphs = true;
            game.addClue('Hieroglyphs decoded: "The sun rises over the Nile"');
            game.addInventoryItem('Hieroglyph Key', '📜');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. Think about what each symbol represents...';
        }
    }

    examineSarcophagus() {
        if (this.puzzlesSolved.sarcophagus) {
            game.showChronosMessage("The sarcophagus is already open!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    The sarcophagus has a mathematical lock. The ancient Egyptians were master mathematicians!
                    <br><br>
                    A papyrus scroll nearby shows: "The age of King Tutankhamun when he died was 19 years.
                    He ruled for 10 years. How old was he when he became pharaoh?"
                </p>

                <div style="margin: 20px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                    <p><strong>📐 Egyptian Mathematics Fact:</strong></p>
                    <p>Ancient Egyptians used math for building pyramids, tracking the Nile's floods, 
                    and astronomy. They even had fractions!</p>
                </div>

                <div class="puzzle-input-group">
                    <input type="number" id="sarcophagus-answer" class="puzzle-input" 
                           placeholder="Enter the age..." />
                </div>

                <button class="puzzle-submit" onclick="egyptRoom.checkSarcophagus()">Unlock</button>
                <div id="sarcophagus-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('Sarcophagus Lock', puzzleContent);
    }

    checkSarcophagus() {
        const answer = parseInt(document.getElementById('sarcophagus-answer').value);
        const feedback = document.getElementById('sarcophagus-feedback');
        
        if (answer === 9) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! The sarcophagus opens, revealing a golden ankh!';
            this.puzzlesSolved.sarcophagus = true;
            game.addClue('Tutankhamun became pharaoh at age 9 (19 - 10 = 9)');
            game.addInventoryItem('Golden Ankh', '☥');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ That\'s not right. Think: Age at death - Years ruled = Age when crowned';
        }
    }

    examineScales() {
        if (this.puzzlesSolved.scales) {
            game.showChronosMessage("The scales are already balanced!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    The Scales of Ma'at must be balanced! In Egyptian mythology, hearts were weighed 
                    against the feather of Ma'at (truth and justice) to judge if souls were worthy.
                    <br><br>
                    <strong>Balance the scales by selecting the correct weights:</strong>
                </p>

                <div style="margin: 20px 0; text-align: center; font-size: 3rem;">
                    ⚖️
                </div>

                <p style="margin-bottom: 10px;"><strong>Left side has 15 units</strong></p>
                <p style="margin-bottom: 20px;">Select items that total exactly 15 units:</p>

                <div class="puzzle-grid" style="grid-template-columns: repeat(3, 1fr);">
                    <div class="puzzle-option" data-value="5" onclick="egyptRoom.toggleWeight(this)">
                        🪶 Feather<br>(5)
                    </div>
                    <div class="puzzle-option" data-value="3" onclick="egyptRoom.toggleWeight(this)">
                        💎 Gem<br>(3)
                    </div>
                    <div class="puzzle-option" data-value="7" onclick="egyptRoom.toggleWeight(this)">
                        👑 Crown<br>(7)
                    </div>
                    <div class="puzzle-option" data-value="10" onclick="egyptRoom.toggleWeight(this)">
                        📿 Necklace<br>(10)
                    </div>
                    <div class="puzzle-option" data-value="8" onclick="egyptRoom.toggleWeight(this)">
                        🔱 Scepter<br>(8)
                    </div>
                    <div class="puzzle-option" data-value="2" onclick="egyptRoom.toggleWeight(this)">
                        💍 Ring<br>(2)
                    </div>
                </div>

                <p id="current-total" style="margin: 20px 0; font-size: 1.2rem; font-weight: bold;">
                    Current total: 0
                </p>

                <button class="puzzle-submit" onclick="egyptRoom.checkScales()">Balance Scales</button>
                <div id="scales-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('Scales of Ma\'at', puzzleContent);
        this.selectedWeights = [];
    }

    toggleWeight(element) {
        const value = parseInt(element.dataset.value);
        
        if (element.classList.contains('selected')) {
            element.classList.remove('selected');
            this.selectedWeights = this.selectedWeights.filter(v => v !== value);
        } else {
            element.classList.add('selected');
            this.selectedWeights.push(value);
        }
        
        const total = this.selectedWeights.reduce((a, b) => a + b, 0);
        document.getElementById('current-total').textContent = `Current total: ${total}`;
    }

    checkScales() {
        const total = this.selectedWeights.reduce((a, b) => a + b, 0);
        const feedback = document.getElementById('scales-feedback');
        
        if (total === 15) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect balance! Ma\'at smiles upon you!';
            this.puzzlesSolved.scales = true;
            game.addClue('The scales are balanced - your heart is pure');
            game.addInventoryItem('Feather of Ma\'at', '🪶');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else if (total < 15) {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = `❌ Too light! You have ${total} units. You need exactly 15.`;
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = `❌ Too heavy! You have ${total} units. You need exactly 15.`;
        }
    }

    updatePuzzleStatus() {
        if (this.puzzlesSolved.hieroglyphs) {
            document.getElementById('status-hieroglyphs').innerHTML = '📜 Hieroglyphs: ✅';
        }
        if (this.puzzlesSolved.sarcophagus) {
            document.getElementById('status-sarcophagus').innerHTML = '⚰️ Sarcophagus: ✅';
        }
        if (this.puzzlesSolved.scales) {
            document.getElementById('status-scales').innerHTML = '⚖️ Scales: ✅';
        }
    }

    checkCompletion() {
        if (this.puzzlesSolved.hieroglyphs && this.puzzlesSolved.sarcophagus && this.puzzlesSolved.scales) {
            const portalObj = document.getElementById('portal-object');
            portalObj.style.opacity = '1';
            portalObj.style.cursor = 'pointer';
            portalObj.onclick = () => this.openPortal();
            game.showChronosMessage("🎉 All puzzles solved! The portal is now active! Click it to escape!");
        }
    }

    openPortal() {
        if (this.puzzlesSolved.hieroglyphs && this.puzzlesSolved.sarcophagus && this.puzzlesSolved.scales) {
            game.completeRoom();
        }
    }

    getHint(hintNumber) {
        const hints = [
            "Start with the hieroglyphs on the wall. Think about what each symbol represents in the natural world.",
            "For the sarcophagus, it's simple subtraction: age at death minus years ruled equals age when he became king!",
            "The scales need exactly 15 units. Try different combinations: 10+5=15, or 7+8=15, or 5+3+7=15!"
        ];
        return hints[hintNumber - 1] || "You're doing great! Keep exploring the tomb!";
    }
}

// Create global instance
const egyptRoom = new EgyptRoom();
