// Renaissance Italy Room - Da Vinci's Secret Workshop
class RenaissanceRoom {
    constructor() {
        this.puzzlesSolved = {
            painting: false,
            machine: false,
            mirror: false,
            portal: false
        };
        this.welcomeMessage = "Welcome to Renaissance Florence, 1505! You're in Leonardo da Vinci's secret workshop. Use art, science, and invention to escape!";
        this.successMessage = "Magnifico! You've proven yourself worthy of da Vinci's genius! Your Renaissance mind has unlocked the secrets!";
    }

    init() {
        document.getElementById('room-title').textContent = '🎨 Renaissance Italy - Da Vinci\'s Secret Workshop';
        this.renderRoom();
    }

    renderRoom() {
        const roomView = document.getElementById('room-view');
        roomView.innerHTML = `
            <div class="room-intro" style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #ffd700; margin-bottom: 15px;">Leonardo's Workshop</h2>
                <p style="font-size: 1.1rem; line-height: 1.6;">
                    Canvases, mechanical sketches, and inventions fill this Renaissance workshop. 
                    Leonardo has left puzzles that combine art, mathematics, and invention. Only a true Renaissance mind can escape!
                </p>
            </div>

            <div class="room-grid">
                <div class="room-object" onclick="renaissanceRoom.examinePainting()">
                    <h3>🖼️ Unfinished Painting</h3>
                    <p>A mysterious painting with mathematical patterns hidden in the composition.</p>
                </div>

                <div class="room-object" onclick="renaissanceRoom.examineMachine()">
                    <h3>⚙️ Flying Machine</h3>
                    <p>One of Leonardo's famous inventions - but the gears are misaligned!</p>
                </div>

                <div class="room-object" onclick="renaissanceRoom.examineMirror()">
                    <h3>🪞 Mirror Writing</h3>
                    <p>Leonardo's famous backwards writing. What secrets does it reveal?</p>
                </div>

                <div class="room-object" id="portal-object" style="opacity: 0.3; cursor: not-allowed;">
                    <h3>🚪 Time Portal</h3>
                    <p>A shimmering portal, locked until you complete Leonardo's challenges.</p>
                </div>
            </div>

            <div id="puzzle-status" style="margin-top: 30px; padding: 20px; background: rgba(255, 215, 0, 0.1); border-radius: 10px;">
                <h3 style="text-align: center; margin-bottom: 15px;">📋 Progress</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
                    <div id="status-painting" class="puzzle-status-item">🖼️ Painting: ❌</div>
                    <div id="status-machine" class="puzzle-status-item">⚙️ Machine: ❌</div>
                    <div id="status-mirror" class="puzzle-status-item">🪞 Mirror: ❌</div>
                </div>
            </div>
        `;
    }

    examinePainting() {
        if (this.puzzlesSolved.painting) {
            game.showChronosMessage("You've already solved the painting puzzle!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    Leonardo used the Golden Ratio (approximately 1.618) in his artwork. 
                    This mathematical proportion appears throughout nature and creates perfect harmony!
                    <br><br>
                    This painting is divided into sections. Which arrangement follows the Golden Ratio?
                </p>
                
                <div style="margin: 20px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                    <h4>🎨 Renaissance Art Fact:</h4>
                    <p>The Golden Ratio (φ ≈ 1.618) appears in the Mona Lisa, Vitruvian Man, and many masterpieces!</p>
                </div>

                <p style="margin: 20px 0;"><strong>A rectangle's width is 10 units. 
                For the Golden Ratio, what should its height be?</strong></p>

                <div class="puzzle-grid" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="puzzle-option" data-answer="false" onclick="renaissanceRoom.selectPainting(this)">
                        📐 12 units
                    </div>
                    <div class="puzzle-option" data-answer="true" onclick="renaissanceRoom.selectPainting(this)">
                        📐 16 units
                    </div>
                    <div class="puzzle-option" data-answer="false" onclick="renaissanceRoom.selectPainting(this)">
                        📐 14 units
                    </div>
                    <div class="puzzle-option" data-answer="false" onclick="renaissanceRoom.selectPainting(this)">
                        📐 20 units
                    </div>
                </div>

                <div id="painting-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('The Golden Ratio', puzzleContent);
    }

    selectPainting(element) {
        const isCorrect = element.dataset.answer === 'true';
        const feedback = document.getElementById('painting-feedback');
        
        if (isCorrect) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! 10 × 1.618 ≈ 16. The Golden Ratio is revealed!';
            this.puzzlesSolved.painting = true;
            game.addClue('Golden Ratio mastered: 10 × 1.618 = 16.18 ≈ 16');
            game.addInventoryItem('Golden Compass', '📐');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. Remember: width × 1.618 = height. (10 × 1.618 ≈ ?)';
        }
    }

    examineMachine() {
        if (this.puzzlesSolved.machine) {
            game.showChronosMessage("The flying machine is already repaired!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    Leonardo's flying machine uses gears! Each gear turns the next one.
                    Arrange them in the correct sequence to make the wings flap!
                    <br><br>
                    <strong>If Gear A (20 teeth) turns Gear B (10 teeth), and Gear B turns Gear C (30 teeth)...</strong>
                </p>

                <div style="margin: 20px 0; text-align: center; font-size: 2rem;">
                    ⚙️ → ⚙️ → ⚙️
                </div>

                <p style="margin-bottom: 20px;">
                    <strong>When Gear A makes 1 full rotation, how many times does Gear C rotate?</strong><br>
                    <small>(Hint: A 20-tooth gear turning a 10-tooth gear makes it spin faster!)</small>
                </p>

                <div class="puzzle-input-group">
                    <input type="text" id="machine-answer" class="puzzle-input" 
                           placeholder="Enter as a fraction or decimal..." />
                </div>

                <button class="puzzle-submit" onclick="renaissanceRoom.checkMachine()">Test Machine</button>
                <div id="machine-feedback"></div>
                
                <div style="margin-top: 20px; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 10px; font-size: 0.9rem;">
                    <p><strong>💡 Gear Ratio Tip:</strong> When a big gear turns a small gear, the small one spins faster!</p>
                    <p>• 20→10: small gear spins 2× faster (20÷10 = 2)</p>
                    <p>• 10→30: big gear spins slower (10÷30 = 0.333...)</p>
                </div>
            </div>
        `;
        
        game.showPuzzle('Flying Machine Gears', puzzleContent);
    }

    checkMachine() {
        const answer = document.getElementById('machine-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('machine-feedback');
        
        // Accepts 2/3, 0.666, 0.67, 0.667, etc.
        const isCorrect = answer.includes('2/3') || answer.includes('0.66') || answer.includes('0.67');
        
        if (isCorrect) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Brilliant! (20÷10)×(10÷30) = 2×(1/3) = 2/3 rotation! The wings flap!';
            this.puzzlesSolved.machine = true;
            game.addClue('Gear ratio solved: A makes 1 turn, C makes 2/3 turn');
            game.addInventoryItem('Gear Set', '⚙️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
            }, 2500);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. Calculate: (20÷10) × (10÷30) = ?';
        }
    }

    examineMirror() {
        if (this.puzzlesSolved.mirror) {
            game.showChronosMessage("You've already decoded the mirror writing!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    Leonardo wrote backwards! He would write right-to-left so you'd need a mirror to read it.
                    Some say he did this to keep his ideas secret, or perhaps because he was left-handed!
                </p>
                
                <div style="margin: 20px 0; padding: 20px; background: rgba(0,0,0,0.4); border-radius: 10px;">
                    <p style="font-size: 1.4rem; text-align: center; letter-spacing: 2px;">
                        <strong>".ecneicS dna trA si egdelwonK"</strong>
                    </p>
                </div>

                <p style="margin: 20px 0;">
                    <strong>Hold this message up to a mirror (or read it backwards) and type what it says:</strong>
                </p>

                <div class="puzzle-input-group">
                    <input type="text" id="mirror-answer" class="puzzle-input" 
                           placeholder="What does it say forwards?" />
                </div>

                <button class="puzzle-submit" onclick="renaissanceRoom.checkMirror()">Submit</button>
                <div id="mirror-feedback"></div>

                <div style="margin-top: 20px; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                    <p><strong>📝 Mirror Writing Fact:</strong> Leonardo filled over 13,000 pages with mirror writing!</p>
                </div>
            </div>
        `;
        
        game.showPuzzle('Mirror Writing Cipher', puzzleContent);
    }

    checkMirror() {
        const answer = document.getElementById('mirror-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('mirror-feedback');
        
        const correct = answer.includes('knowledge') && answer.includes('art') && answer.includes('science');
        
        if (correct) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfetto! "Knowledge is Art and Science" - Leonardo\'s wisdom!';
            this.puzzlesSolved.mirror = true;
            game.addClue('Mirror writing decoded: "Knowledge is Art and Science"');
            game.addInventoryItem('Leonardo\'s Notebook', '📓');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Try reading each word from right to left: ".ecneicS" becomes "Science."';
        }
    }

    updatePuzzleStatus() {
        if (this.puzzlesSolved.painting) {
            document.getElementById('status-painting').innerHTML = '🖼️ Painting: ✅';
        }
        if (this.puzzlesSolved.machine) {
            document.getElementById('status-machine').innerHTML = '⚙️ Machine: ✅';
        }
        if (this.puzzlesSolved.mirror) {
            document.getElementById('status-mirror').innerHTML = '🪞 Mirror: ✅';
        }
    }

    checkCompletion() {
        if (this.puzzlesSolved.painting && this.puzzlesSolved.machine && this.puzzlesSolved.mirror) {
            const portalObj = document.getElementById('portal-object');
            portalObj.style.opacity = '1';
            portalObj.style.cursor = 'pointer';
            portalObj.onclick = () => this.openPortal();
            game.showChronosMessage("🎉 All of Leonardo's challenges complete! The portal awaits!");
        }
    }

    openPortal() {
        if (this.puzzlesSolved.painting && this.puzzlesSolved.machine && this.puzzlesSolved.mirror) {
            game.completeRoom();
        }
    }

    getHint(hintNumber) {
        const hints = [
            "For the Golden Ratio, multiply 10 by approximately 1.618. The answer is close to 16!",
            "For the gears: First gear makes the second spin 2x faster (20÷10), then that makes the third spin slower (10÷30). Multiply these together!",
            "For mirror writing, read each word backwards. Start from the right side and work left. '.ecneicS' = 'Science.'"
        ];
        return hints[hintNumber - 1] || "Leonardo's genius awaits! Keep thinking creatively!";
    }
}

// Create global instance
const renaissanceRoom = new RenaissanceRoom();
