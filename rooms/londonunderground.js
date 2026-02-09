// London Underground - Mind the Gap!
class LondonUndergroundRoom {
    constructor() {
        this.puzzlesSolved = {
            riddle1: false,
            riddle2: false,
            problem1: false,
            problem2: false,
            tubemap: false,
            history: false,
            cipher: false,
            sequence: false
        };
        this.welcomeMessage = "Welcome to the London Underground! You're stuck at a mysterious station. Use your knowledge of the Tube, solve puzzles about its history, and crack codes to find your way out. Mind the gap!";
        this.successMessage = "Brilliant! You've navigated the Underground like a true Londoner! The doors are opening - platform clear!";
    }

    init() {
        document.getElementById('room-title').textContent = '🚇 London Underground - Mind the Gap!';
        this.renderRoom();
        this.applyTubeTheme();
    }

    applyTubeTheme() {
        const roomView = document.getElementById('room-view');
        roomView.style.background = 'linear-gradient(180deg, #003688 0%, #000033 100%)';
        roomView.style.color = '#ffffff';
    }

    renderRoom() {
        const roomView = document.getElementById('room-view');
        roomView.innerHTML = `
            <style>
                .tube-object {
                    background: rgba(220, 36, 31, 0.2) !important;
                    border: 3px solid #dc241f !important;
                    box-shadow: 0 0 15px rgba(220, 36, 31, 0.3);
                    transition: all 0.3s ease;
                }
                
                .tube-object:hover {
                    box-shadow: 0 0 25px rgba(220, 36, 31, 0.6);
                    border-color: #ff0000 !important;
                    transform: translateY(-3px);
                }

                .roundel {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    background: #dc241f;
                    border-radius: 50%;
                    position: relative;
                    margin: 10px auto;
                }

                .roundel::before {
                    content: '';
                    position: absolute;
                    width: 60px;
                    height: 20px;
                    background: #003688;
                    border-radius: 10px;
                }

                .roundel-text {
                    position: relative;
                    z-index: 1;
                    color: white;
                    font-weight: bold;
                    font-size: 0.8rem;
                }
            </style>

            <div class="room-intro" style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #dc241f; margin-bottom: 15px; text-shadow: 0 0 10px #dc241f;">
                    <div class="roundel"><span class="roundel-text">TUBE</span></div>
                    Mind the Gap!
                </h2>
                <p style="font-size: 1.1rem; line-height: 1.6;">
                    You've found yourself at a mysterious Underground station. The platform is empty, trains aren't running, 
                    and the only way out is to solve puzzles about the London Underground!
                    <br><br>
                    <em style="color: #ffd700;">\"Please stand clear of the closing doors!\"</em>
                </p>
            </div>

            <div class="room-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
                <div class="room-object tube-object" onclick="londonUndergroundRoom.examineRiddle1()">
                    <h3>🎫 Oyster Card Riddle</h3>
                    <p>A riddle is printed on this old Oyster card...</p>
                </div>

                <div class="room-object tube-object" onclick="londonUndergroundRoom.examineRiddle2()">
                    <h3>🚇 Platform Puzzle</h3>
                    <p>A mysterious riddle on the platform sign...</p>
                </div>

                <div class="room-object tube-object" onclick="londonUndergroundRoom.examineProblem1()">
                    <h3>🕐 Journey Calculator</h3>
                    <p>Calculate journey times between stations...</p>
                </div>

                <div class="room-object tube-object" onclick="londonUndergroundRoom.examineProblem2()">
                    <h3>💷 Fare Problem</h3>
                    <p>Work out the total cost of Tube fares...</p>
                </div>

                <div class="room-object tube-object" onclick="londonUndergroundRoom.examineTubeMap()">
                    <h3>🗺️ Tube Map Challenge</h3>
                    <p>Test your knowledge of the Tube lines!</p>
                </div>

                <div class="room-object tube-object" onclick="londonUndergroundRoom.examineHistory()">
                    <h3>📜 Underground History</h3>
                    <p>Answer questions about Tube history...</p>
                </div>

                <div class="room-object tube-object" onclick="londonUndergroundRoom.examineCipher()">
                    <h3>🔤 Station Code</h3>
                    <p>Decode the station name cipher...</p>
                </div>

                <div class="room-object tube-object" onclick="londonUndergroundRoom.examineSequence()">
                    <h3>🔢 Line Number Sequence</h3>
                    <p>Find the pattern in station numbers...</p>
                </div>

                <div class="room-object" id="portal-object" style="opacity: 0.3; cursor: not-allowed; background: rgba(220, 36, 31, 0.2); border: 2px solid #666;">
                    <h3>🚪 Exit Gate</h3>
                    <p>Complete all 8 puzzles to unlock the exit!</p>
                </div>
            </div>

            <div id="puzzle-status" style="margin-top: 30px; padding: 20px; background: rgba(220, 36, 31, 0.2); border-radius: 10px; border: 2px solid #dc241f;">
                <h3 style="text-align: center; margin-bottom: 15px; color: #ffd700;">🚇 Underground Challenges 🚇</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; font-size: 0.9rem;">
                    <div id="status-riddle1" class="puzzle-status-item">🎫 Oyster Riddle: ❌</div>
                    <div id="status-riddle2" class="puzzle-status-item">🚇 Platform Riddle: ❌</div>
                    <div id="status-problem1" class="puzzle-status-item">🕐 Journey Time: ❌</div>
                    <div id="status-problem2" class="puzzle-status-item">💷 Fare Problem: ❌</div>
                    <div id="status-tubemap" class="puzzle-status-item">🗺️ Tube Map: ❌</div>
                    <div id="status-history" class="puzzle-status-item">📜 History: ❌</div>
                    <div id="status-cipher" class="puzzle-status-item">🔤 Station Code: ❌</div>
                    <div id="status-sequence" class="puzzle-status-item">🔢 Sequence: ❌</div>
                </div>
            </div>
        `;
    }

    // RIDDLE 1 - Oyster Card
    examineRiddle1() {
        if (this.puzzlesSolved.riddle1) {
            game.showChronosMessage("You've already solved this riddle!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    An old Oyster card has this riddle printed on it:
                    <br><br>
                    <strong style="font-size: 1.1rem; color: #dc241f;">
                    "I go down but never up,<br>
                    I have steps but no feet,<br>
                    I help you reach the Underground,<br>
                    Where trains and passengers meet.<br>
                    What am I?"</strong>
                </p>

                <div class="puzzle-input-group">
                    <input type="text" id="riddle1-answer" class="puzzle-input" 
                           placeholder="Type your answer..." />
                </div>

                <button class="puzzle-submit" onclick="londonUndergroundRoom.checkRiddle1()">Submit Answer</button>
                <div id="riddle1-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🎫 Oyster Card Riddle', puzzleContent);
    }

    checkRiddle1() {
        const answer = document.getElementById('riddle1-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle1-feedback');
        
        if (answer === 'escalator' || answer === 'an escalator' || answer === 'escalators') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! An escalator takes you down to the Underground!';
            this.puzzlesSolved.riddle1 = true;
            game.addClue('Riddle 1: Escalators have steps and go down to platforms');
            game.addInventoryItem('Oyster Card', '🎫');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. Think about how you get down to the platforms...';
        }
    }

    // RIDDLE 2 - Platform Puzzle
    examineRiddle2() {
        if (this.puzzlesSolved.riddle2) {
            game.showChronosMessage("This platform puzzle is solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    A sign on the platform displays this riddle:
                    <br><br>
                    <strong style="font-size: 1.1rem; color: #dc241f;">
                    "I'm full of tracks but never race,<br>
                    I'm underground but let in light,<br>
                    Millions pass through me each day,<br>
                    From morning until night.<br>
                    What am I?"</strong>
                </p>

                <div class="puzzle-input-group">
                    <input type="text" id="riddle2-answer" class="puzzle-input" 
                           placeholder="Type your answer..." />
                </div>

                <button class="puzzle-submit" onclick="londonUndergroundRoom.checkRiddle2()">Submit Answer</button>
                <div id="riddle2-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🚇 Platform Riddle', puzzleContent);
    }

    checkRiddle2() {
        const answer = document.getElementById('riddle2-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle2-feedback');
        
        if (answer.includes('station') || answer.includes('tube station') || answer.includes('underground station')) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Brilliant! A Tube station has tracks and millions of passengers!';
            this.puzzlesSolved.riddle2 = true;
            game.addClue('Riddle 2: A Tube station connects tracks and people');
            game.addInventoryItem('Platform Sign', '🚇');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not right. Think about where trains stop underground...';
        }
    }

    // PROBLEM 1 - Journey Calculator
    examineProblem1() {
        if (this.puzzlesSolved.problem1) {
            game.showChronosMessage("You've calculated this journey!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    Calculate the total journey time!
                    <br><br>
                    <strong>Journey details:</strong><br>
                    • King's Cross to Oxford Circus: 8 minutes<br>
                    • Oxford Circus to Victoria: 7 minutes<br>
                    • Change trains at Victoria: 3 minutes wait<br>
                    • Victoria to London Bridge: 6 minutes<br>
                    <br>
                    What is the TOTAL time for this journey?
                </p>

                <div style="margin: 20px 0; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 10px;">
                    <p style="text-align: center;">8 + 7 + 3 + 6 = ?</p>
                </div>

                <div class="puzzle-input-group">
                    <input type="number" id="problem1-answer" class="puzzle-input" 
                           placeholder="Enter total minutes..." />
                </div>

                <button class="puzzle-submit" onclick="londonUndergroundRoom.checkProblem1()">Calculate Journey</button>
                <div id="problem1-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🕐 Journey Time Calculator', puzzleContent);
    }

    checkProblem1() {
        const answer = parseInt(document.getElementById('problem1-answer').value);
        const feedback = document.getElementById('problem1-feedback');
        
        if (answer === 24) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! 8+7+3+6 = 24 minutes total!';
            this.puzzlesSolved.problem1 = true;
            game.addClue('Journey Time: Total is 24 minutes across London');
            game.addInventoryItem('Timetable', '🕐');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. Add all the times including the wait: 8+7+3+6';
        }
    }

    // PROBLEM 2 - Fare Calculation
    examineProblem2() {
        if (this.puzzlesSolved.problem2) {
            game.showChronosMessage("Fare already calculated!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    Calculate the total Tube fare for a family!
                    <br><br>
                    <strong>Fare prices (simplified):</strong><br>
                    • Adult single fare: £3<br>
                    • Child single fare: £1.50<br>
                    <br>
                    A family has 2 adults and 3 children.<br>
                    They each take ONE journey.<br>
                    <br>
                    What is the TOTAL cost for everyone?
                </p>

                <div style="margin: 20px 0; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 10px;">
                    <p>(2 × £3) + (3 × £1.50) = ?</p>
                </div>

                <div class="puzzle-input-group">
                    <input type="number" id="problem2-answer" class="puzzle-input" 
                           placeholder="Enter total in pounds (e.g., 10.50)..." step="0.01" />
                </div>

                <button class="puzzle-submit" onclick="londonUndergroundRoom.checkProblem2()">Calculate Fare</button>
                <div id="problem2-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('💷 Fare Calculator', puzzleContent);
    }

    checkProblem2() {
        const answer = parseFloat(document.getElementById('problem2-answer').value);
        const feedback = document.getElementById('problem2-feedback');
        
        if (answer === 10.5 || answer === 10.50) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! (2×£3)+(3×£1.50) = £6+£4.50 = £10.50!';
            this.puzzlesSolved.problem2 = true;
            game.addClue('Fare Total: £10.50 for 2 adults and 3 children');
            game.addInventoryItem('Ticket', '🎟️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not right. Calculate: (2×3) + (3×1.50)';
        }
    }

    // TUBE MAP CHALLENGE
    examineTubeMap() {
        if (this.puzzlesSolved.tubemap) {
            game.showChronosMessage("Tube map challenge completed!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    Test your knowledge of London Underground lines!
                    <br><br>
                    <strong>Question: Which Tube line is represented by the color YELLOW?</strong>
                </p>

                <div class="puzzle-grid" style="grid-template-columns: repeat(2, 1fr); margin: 20px 0;">
                    <div class="puzzle-option" onclick="londonUndergroundRoom.selectTubeMap('victoria')">
                        Victoria Line<br>(Light Blue)
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundRoom.selectTubeMap('circle')">
                        Circle Line<br>(Yellow)
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundRoom.selectTubeMap('northern')">
                        Northern Line<br>(Black)
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundRoom.selectTubeMap('central')">
                        Central Line<br>(Red)
                    </div>
                </div>

                <div id="tubemap-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🗺️ Tube Map Knowledge', puzzleContent);
    }

    selectTubeMap(choice) {
        const feedback = document.getElementById('tubemap-feedback');
        
        if (choice === 'circle') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! The Circle Line is yellow!';
            this.puzzlesSolved.tubemap = true;
            game.addClue('The Circle Line is represented by yellow on the Tube map');
            game.addInventoryItem('Tube Map', '🗺️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong line! Think about which line goes in a circle around central London...';
        }
    }

    // HISTORY CHALLENGE
    examineHistory() {
        if (this.puzzlesSolved.history) {
            game.showChronosMessage("History challenge complete!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    Test your knowledge of Underground history!
                    <br><br>
                    <strong>The London Underground opened in 1863. It was the world's FIRST underground railway!</strong>
                    <br><br>
                    Question: How many years ago did it open?<br>
                    (It's currently 2026)
                </p>

                <div style="margin: 20px 0; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 10px;">
                    <p>Calculation: 2026 - 1863 = ?</p>
                </div>

                <div class="puzzle-input-group">
                    <input type="number" id="history-answer" class="puzzle-input" 
                           placeholder="Enter number of years..." />
                </div>

                <button class="puzzle-submit" onclick="londonUndergroundRoom.checkHistory()">Submit Answer</button>
                <div id="history-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('📜 Underground History', puzzleContent);
    }

    checkHistory() {
        const answer = parseInt(document.getElementById('history-answer').value);
        const feedback = document.getElementById('history-feedback');
        
        if (answer === 163) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Brilliant! 2026-1863 = 163 years! The Tube is over 160 years old!';
            this.puzzlesSolved.history = true;
            game.addClue('The London Underground opened 163 years ago in 1863');
            game.addInventoryItem('History Book', '📜');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not right. Subtract 1863 from 2026...';
        }
    }

    // CIPHER PUZZLE
    examineCipher() {
        if (this.puzzlesSolved.cipher) {
            game.showChronosMessage("Station code cracked!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    Decode the station name using the cipher!
                    <br><br>
                    Each number represents a letter's position in the alphabet:<br>
                    A=1, B=2, C=3... Z=26
                    <br><br>
                    <strong style="color: #dc241f; font-size: 1.2rem;">2-1-11-5-18</strong>
                    <br><br>
                    What famous Tube station is this?
                </p>

                <div style="margin: 15px 0; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 10px;">
                    <small>Example: 3-1-20 = C-A-T</small>
                </div>

                <div class="puzzle-input-group">
                    <input type="text" id="cipher-answer" class="puzzle-input" 
                           placeholder="Type the station name..." />
                </div>

                <button class="puzzle-submit" onclick="londonUndergroundRoom.checkCipher()">Decode Station</button>
                <div id="cipher-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🔤 Station Name Cipher', puzzleContent);
    }

    checkCipher() {
        const answer = document.getElementById('cipher-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('cipher-feedback');
        
        if (answer === 'baker' || answer === 'baker street') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! 2-1-11-5-18 = BAKER (Baker Street)!';
            this.puzzlesSolved.cipher = true;
            game.addClue('Cipher decoded: Baker Street (home of Sherlock Holmes!)');
            game.addInventoryItem('Cipher Key', '🔤');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong! Convert each number: 2=B, 1=A, 11=K, 5=E, 18=R';
        }
    }

    // SEQUENCE PUZZLE
    examineSequence() {
        if (this.puzzlesSolved.sequence) {
            game.showChronosMessage("Sequence solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    Find the pattern in these station platform numbers!
                    <br><br>
                    <strong style="font-size: 1.2rem;">2, 4, 8, 16, 32, ?</strong>
                    <br><br>
                    What number comes next?
                    <br>
                    <em>(Hint: Each number is multiplied by something...)</em>
                </p>

                <div style="text-align: center; margin: 20px 0; font-size: 3rem;">🔢</div>

                <div class="puzzle-input-group">
                    <input type="number" id="sequence-answer" class="puzzle-input" 
                           placeholder="Enter the next number..." />
                </div>

                <button class="puzzle-submit" onclick="londonUndergroundRoom.checkSequence()">Submit Answer</button>
                <div id="sequence-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🔢 Platform Number Sequence', puzzleContent);
    }

    checkSequence() {
        const answer = parseInt(document.getElementById('sequence-answer').value);
        const feedback = document.getElementById('sequence-feedback');
        
        if (answer === 64) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Brilliant! Each number doubles: 32 × 2 = 64!';
            this.puzzlesSolved.sequence = true;
            game.addClue('Sequence: Each number is double the previous (powers of 2)');
            game.addInventoryItem('Platform Number', '🔢');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not right. Look at how each number relates to the one before it...';
        }
    }

    updatePuzzleStatus() {
        if (this.puzzlesSolved.riddle1) {
            document.getElementById('status-riddle1').innerHTML = '🎫 Oyster Riddle: ✅';
        }
        if (this.puzzlesSolved.riddle2) {
            document.getElementById('status-riddle2').innerHTML = '🚇 Platform Riddle: ✅';
        }
        if (this.puzzlesSolved.problem1) {
            document.getElementById('status-problem1').innerHTML = '🕐 Journey Time: ✅';
        }
        if (this.puzzlesSolved.problem2) {
            document.getElementById('status-problem2').innerHTML = '💷 Fare Problem: ✅';
        }
        if (this.puzzlesSolved.tubemap) {
            document.getElementById('status-tubemap').innerHTML = '🗺️ Tube Map: ✅';
        }
        if (this.puzzlesSolved.history) {
            document.getElementById('status-history').innerHTML = '📜 History: ✅';
        }
        if (this.puzzlesSolved.cipher) {
            document.getElementById('status-cipher').innerHTML = '🔤 Station Code: ✅';
        }
        if (this.puzzlesSolved.sequence) {
            document.getElementById('status-sequence').innerHTML = '🔢 Sequence: ✅';
        }
    }

    checkCompletion() {
        const allSolved = Object.values(this.puzzlesSolved).every(v => v === true);
        
        if (allSolved) {
            const portalObj = document.getElementById('portal-object');
            portalObj.style.opacity = '1';
            portalObj.style.cursor = 'pointer';
            portalObj.style.background = 'linear-gradient(135deg, rgba(220, 36, 31, 0.8) 0%, rgba(0, 54, 136, 0.8) 100%)';
            portalObj.style.border = '3px solid #ffd700';
            portalObj.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.6)';
            portalObj.onclick = () => this.openPortal();
            
            game.showChronosMessage("🎉 Brilliant work! All puzzles solved! The exit gate is now open! Mind the gap and head through!");
        }
    }

    openPortal() {
        const allSolved = Object.values(this.puzzlesSolved).every(v => v === true);
        if (allSolved) {
            game.completeRoom();
        }
    }

    getHint(hintNumber) {
        const hints = [
            "Start with the riddles - the Oyster card asks about escalators, and the platform asks about a station!",
            "For the journey time: add all numbers including the 3-minute wait. For fares: (2×3) + (3×1.50)",
            "The Circle Line is yellow on the Tube map. The Underground opened in 1863, so subtract from 2026!",
            "For the cipher: 2=B, 1=A, 11=K, 5=E, 18=R. For the sequence: each number doubles!"
        ];
        return hints[hintNumber - 1] || "You're doing great! Keep solving those Tube puzzles!";
    }
}

// Create global instance
const londonUndergroundRoom = new LondonUndergroundRoom();