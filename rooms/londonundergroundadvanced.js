// London Underground Advanced - Mind the Gap!
class LondonUndergroundAdvancedRoom {
    constructor() {
        this.puzzlesSolved = {
            riddle1: false,
            riddle2: false,
            riddle3: false,
            riddle4: false,
            math1: false,
            math2: false,
            math3: false,
            math4: false,
            code1: false,
            code2: false,
            code3: false,
            code4: false,
            history1: false,
            history2: false,
            history3: false,
            geography1: false,
            geography2: false,
            logic1: false,
            logic2: false,
            pattern1: false
        };
        this.welcomeMessage = "Welcome to the London Underground Advanced Challenge! You're trapped in a mysterious Tube station after hours. Only by solving 20 challenging puzzles about the world's oldest underground railway can you escape. Are you ready?";
        this.successMessage = "Outstanding! You've mastered the London Underground! The station manager is impressed - you're now an honorary Tube expert! Platform clear for departure!";
    }

    init() {
        document.getElementById('room-title').textContent = '🚇 London Underground Advanced Challenge';
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
                .tube-advanced-object {
                    background: rgba(220, 36, 31, 0.25) !important;
                    border: 3px solid #dc241f !important;
                    box-shadow: 0 0 15px rgba(220, 36, 31, 0.4);
                    transition: all 0.3s ease;
                }
                
                .tube-advanced-object:hover {
                    box-shadow: 0 0 25px rgba(220, 36, 31, 0.7);
                    border-color: #ff0000 !important;
                    transform: translateY(-3px);
                }

                .roundel-advanced {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 60px;
                    height: 60px;
                    background: #dc241f;
                    border-radius: 50%;
                    position: relative;
                    margin: 10px auto;
                }

                .roundel-advanced::before {
                    content: '';
                    position: absolute;
                    width: 70px;
                    height: 25px;
                    background: #003688;
                    border-radius: 12px;
                }

                .roundel-text-advanced {
                    position: relative;
                    z-index: 1;
                    color: white;
                    font-weight: bold;
                    font-size: 0.9rem;
                }
            </style>

            <div class="room-intro" style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #dc241f; margin-bottom: 15px; text-shadow: 0 0 10px #dc241f;">
                    <div class="roundel-advanced"><span class="roundel-text-advanced">UNDERGROUND</span></div>
                    Advanced Challenge - Mind the Gap!
                </h2>
                <p style="font-size: 1.05rem; line-height: 1.6;">
                    The last train has departed, the station is locked, and you're alone in the depths of London's Underground. 
                    The only way out is to prove your mastery of the Tube system by solving 20 advanced puzzles. 
                    Test your knowledge of history, geography, maths, and codes!
                    <br><br>
                    <em style="color: #ffd700;">\"This is a Piccadilly Line service to... freedom!\"</em>
                </p>
            </div>

            <div class="room-grid" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">
                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineRiddle1()">
                    <h3>🎫 Riddle 1: Oyster</h3>
                    <p>Classic Tube riddle...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineRiddle2()">
                    <h3>🚇 Riddle 2: Platform</h3>
                    <p>Think like a commuter...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineRiddle3()">
                    <h3>🔴 Riddle 3: Lines</h3>
                    <p>Riddle about the lines...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineRiddle4()">
                    <h3>🎭 Riddle 4: Journey</h3>
                    <p>Travel mystery...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineMath1()">
                    <h3>🕐 Math 1: Time</h3>
                    <p>Calculate journey times...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineMath2()">
                    <h3>💷 Math 2: Fares</h3>
                    <p>Complex fare calculation...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineMath3()">
                    <h3>📏 Math 3: Distance</h3>
                    <p>Calculate route distances...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineMath4()">
                    <h3>⚡ Math 4: Speed</h3>
                    <p>Average speed problem...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineCode1()">
                    <h3>🔐 Code 1: Binary</h3>
                    <p>Binary station code...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineCode2()">
                    <h3>🔑 Code 2: Caesar</h3>
                    <p>Shift cipher puzzle...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineCode3()">
                    <h3>🗝️ Code 3: Morse</h3>
                    <p>Morse code signals...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineCode4()">
                    <h3>🔓 Code 4: Alphabet</h3>
                    <p>A=1, B=2 cipher...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineHistory1()">
                    <h3>📜 History 1</h3>
                    <p>When did it open?...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineHistory2()">
                    <h3>🏛️ History 2</h3>
                    <p>First deep-level line...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineHistory3()">
                    <h3>⚔️ History 3</h3>
                    <p>Wartime shelters...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineGeography1()">
                    <h3>🗺️ Geography 1</h3>
                    <p>Count the lines...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineGeography2()">
                    <h3>🌍 Geography 2</h3>
                    <p>Deepest station...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineLogic1()">
                    <h3>🧠 Logic 1</h3>
                    <p>Three commuters puzzle...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examineLogic2()">
                    <h3>🤔 Logic 2</h3>
                    <p>Route optimization...</p>
                </div>

                <div class="room-object tube-advanced-object" onclick="londonUndergroundAdvancedRoom.examinePattern1()">
                    <h3>🔢 Pattern</h3>
                    <p>Station number sequence...</p>
                </div>

                <div class="room-object" id="portal-object" style="opacity: 0.3; cursor: not-allowed; background: rgba(220, 36, 31, 0.2); border: 2px solid #666;">
                    <h3>🚪 Exit Gates</h3>
                    <p>Solve all 20 puzzles to unlock!</p>
                </div>
            </div>

            <div id="puzzle-status" style="margin-top: 30px; padding: 20px; background: rgba(220, 36, 31, 0.2); border-radius: 10px; border: 2px solid #dc241f;">
                <h3 style="text-align: center; margin-bottom: 15px; color: #ffd700;">🚇 Challenge Progress (20 Puzzles) 🚇</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 8px; font-size: 0.85rem;">
                    <div id="status-riddle1">🎫 Riddle 1: ❌</div>
                    <div id="status-riddle2">🚇 Riddle 2: ❌</div>
                    <div id="status-riddle3">🔴 Riddle 3: ❌</div>
                    <div id="status-riddle4">🎭 Riddle 4: ❌</div>
                    <div id="status-math1">🕐 Math 1: ❌</div>
                    <div id="status-math2">💷 Math 2: ❌</div>
                    <div id="status-math3">📏 Math 3: ❌</div>
                    <div id="status-math4">⚡ Math 4: ❌</div>
                    <div id="status-code1">🔐 Code 1: ❌</div>
                    <div id="status-code2">🔑 Code 2: ❌</div>
                    <div id="status-code3">🗝️ Code 3: ❌</div>
                    <div id="status-code4">🔓 Code 4: ❌</div>
                    <div id="status-history1">📜 History 1: ❌</div>
                    <div id="status-history2">🏛️ History 2: ❌</div>
                    <div id="status-history3">⚔️ History 3: ❌</div>
                    <div id="status-geography1">🗺️ Geography 1: ❌</div>
                    <div id="status-geography2">🌍 Geography 2: ❌</div>
                    <div id="status-logic1">🧠 Logic 1: ❌</div>
                    <div id="status-logic2">🤔 Logic 2: ❌</div>
                    <div id="status-pattern1">🔢 Pattern: ❌</div>
                </div>
            </div>
        `;
    }

    // RIDDLE 1
    examineRiddle1() {
        if (this.puzzlesSolved.riddle1) {
            game.showChronosMessage("Already solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong style="font-size: 1.1rem; color: #dc241f;">
                    "I'm used by millions every day,<br>
                    I have no battery but I pay the way,<br>
                    Tap me here, tap me there,<br>
                    Your Tube fare I'll always declare.<br>
                    What am I?"</strong>
                </p>
                <div class="puzzle-input-group">
                    <input type="text" id="riddle1-answer" class="puzzle-input" placeholder="Your answer..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkRiddle1()">Submit</button>
                <div id="riddle1-feedback"></div>
            </div>
        `;
        game.showPuzzle('🎫 Oyster Card Riddle', puzzleContent);
    }

    checkRiddle1() {
        const answer = document.getElementById('riddle1-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle1-feedback');
        
        if (answer.includes('oyster') || answer.includes('contactless')) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! Oyster cards (or contactless cards) are used for Tube payments!';
            this.puzzlesSolved.riddle1 = true;
            game.addClue('Riddle 1: Oyster/contactless payment cards');
            game.addInventoryItem('Oyster Card', '🎫');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. Think about payment methods on the Tube...';
        }
    }

    // RIDDLE 2
    examineRiddle2() {
        if (this.puzzlesSolved.riddle2) {
            game.showChronosMessage("Platform riddle solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong style="font-size: 1.1rem; color: #dc241f;">
                    "I run through London day and night,<br>
                    I'm never tired, I'm never still,<br>
                    I carry people left and right,<br>
                    Yet I stay on my metal track until.<br>
                    What am I?"</strong>
                </p>
                <div class="puzzle-input-group">
                    <input type="text" id="riddle2-answer" class="puzzle-input" placeholder="Your answer..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkRiddle2()">Submit</button>
                <div id="riddle2-feedback"></div>
            </div>
        `;
        game.showPuzzle('🚇 Platform Riddle', puzzleContent);
    }

    checkRiddle2() {
        const answer = document.getElementById('riddle2-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle2-feedback');
        
        if (answer.includes('train') || answer.includes('tube')) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! The Tube trains run constantly on their tracks!';
            this.puzzlesSolved.riddle2 = true;
            game.addClue('Riddle 2: Tube trains operate 24/7 (except during closures)');
            game.addInventoryItem('Train Token', '🚇');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. What moves on tracks underground?';
        }
    }

    // RIDDLE 3
    examineRiddle3() {
        if (this.puzzlesSolved.riddle3) {
            game.showChronosMessage("Lines riddle complete!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong style="font-size: 1.1rem; color: #dc241f;">
                    "I connect the north to south,<br>
                    I'm colored black upon the map,<br>
                    Through tunnels deep beneath the ground,<br>
                    I help commuters bridge the gap.<br>
                    Which line am I?"</strong>
                </p>
                <div class="puzzle-input-group">
                    <input type="text" id="riddle3-answer" class="puzzle-input" placeholder="Which Tube line?..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkRiddle3()">Submit</button>
                <div id="riddle3-feedback"></div>
            </div>
        `;
        game.showPuzzle('🔴 Lines Riddle', puzzleContent);
    }

    checkRiddle3() {
        const answer = document.getElementById('riddle3-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle3-feedback');
        
        if (answer.includes('northern')) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Brilliant! The Northern Line is black and runs north-south!';
            this.puzzlesSolved.riddle3 = true;
            game.addClue('Riddle 3: Northern Line is shown in black on the Tube map');
            game.addInventoryItem('Northern Line', '🔴');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ No. Think about a line that goes north-south and is colored black...';
        }
    }

    // RIDDLE 4
    examineRiddle4() {
        if (this.puzzlesSolved.riddle4) {
            game.showChronosMessage("Journey riddle done!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong style="font-size: 1.1rem; color: #dc241f;">
                    "I have many mouths but cannot eat,<br>
                    I have many tongues but cannot speak,<br>
                    Thousands enter me each day,<br>
                    And leave through me to go their way.<br>
                    What am I?"</strong>
                </p>
                <div class="puzzle-input-group">
                    <input type="text" id="riddle4-answer" class="puzzle-input" placeholder="Your answer..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkRiddle4()">Submit</button>
                <div id="riddle4-feedback"></div>
            </div>
        `;
        game.showPuzzle('🎭 Journey Mystery', puzzleContent);
    }

    checkRiddle4() {
        const answer = document.getElementById('riddle4-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle4-feedback');
        
        if (answer.includes('station') || answer.includes('entrance')) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Excellent! A station has many entrances and exits (mouths)!';
            this.puzzlesSolved.riddle4 = true;
            game.addClue('Riddle 4: Stations have multiple entrances/exits');
            game.addInventoryItem('Station Map', '🎭');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not right. What has many entrances (mouths)?';
        }
    }

    // MATH 1
    examineMath1() {
        if (this.puzzlesSolved.math1) {
            game.showChronosMessage("Time calculation complete!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Complex Journey Time Problem:</strong><br><br>
                    Sarah's journey:<br>
                    • Home to King's Cross: 12 minutes<br>
                    • Wait at King's Cross: 4 minutes<br>
                    • King's Cross to Oxford Circus: 8 minutes<br>
                    • Change trains: 5 minutes<br>
                    • Oxford Circus to Victoria: 7 minutes<br>
                    • Walk from Victoria station to office: 6 minutes<br>
                    <br>
                    What is her TOTAL journey time in minutes?
                </p>
                <div class="puzzle-input-group">
                    <input type="number" id="math1-answer" class="puzzle-input" placeholder="Total minutes..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkMath1()">Calculate</button>
                <div id="math1-feedback"></div>
            </div>
        `;
        game.showPuzzle('🕐 Journey Time Calculator', puzzleContent);
    }

    checkMath1() {
        const answer = parseInt(document.getElementById('math1-answer').value);
        const feedback = document.getElementById('math1-feedback');
        
        if (answer === 42) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! 12+4+8+5+7+6 = 42 minutes!';
            this.puzzlesSolved.math1 = true;
            game.addClue('Math 1: Total journey time is 42 minutes');
            game.addInventoryItem('Timetable', '🕐');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Incorrect. Add all segments: 12+4+8+5+7+6';
        }
    }

    // MATH 2
    examineMath2() {
        if (this.puzzlesSolved.math2) {
            game.showChronosMessage("Fare calculation done!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Advanced Fare Problem:</strong><br><br>
                    Peak fare: £3.40<br>
                    Off-peak fare: £2.80<br>
                    <br>
                    A commuter travels:<br>
                    • Monday to Friday: 2 journeys per day (peak)<br>
                    • Saturday: 2 journeys (off-peak)<br>
                    • Sunday: 0 journeys<br>
                    <br>
                    What is the TOTAL cost for one week?
                </p>
                <div class="puzzle-input-group">
                    <input type="number" id="math2-answer" class="puzzle-input" placeholder="Total in pounds (e.g., 39.60)..." step="0.01" />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkMath2()">Calculate Fare</button>
                <div id="math2-feedback"></div>
            </div>
        `;
        game.showPuzzle('💷 Weekly Fare Calculator', puzzleContent);
    }

    checkMath2() {
        const answer = parseFloat(document.getElementById('math2-answer').value);
        const feedback = document.getElementById('math2-feedback');
        
        if (answer === 39.6 || answer === 39.60) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! (5×2×3.40)+(1×2×2.80) = 34+5.60 = £39.60!';
            this.puzzlesSolved.math2 = true;
            game.addClue('Math 2: Weekly fare total is £39.60');
            game.addInventoryItem('Receipt', '💷');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Calculate: (5 days × 2 × 3.40) + (1 day × 2 × 2.80)';
        }
    }

    // MATH 3
    examineMath3() {
        if (this.puzzlesSolved.math3) {
            game.showChronosMessage("Distance puzzle solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Distance Problem:</strong><br><br>
                    The Circle Line is approximately 27 km long.<br>
                    A train completes 3/4 of the circle.<br>
                    <br>
                    How many kilometers has it traveled? (Round to 1 decimal place)
                </p>
                <div class="puzzle-input-group">
                    <input type="number" id="math3-answer" class="puzzle-input" placeholder="Distance in km..." step="0.1" />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkMath3()">Calculate</button>
                <div id="math3-feedback"></div>
            </div>
        `;
        game.showPuzzle('📏 Distance Calculator', puzzleContent);
    }

    checkMath3() {
        const answer = parseFloat(document.getElementById('math3-answer').value);
        const feedback = document.getElementById('math3-feedback');
        
        if (answer === 20.3 || answer === 20.25) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Brilliant! 27 × 3/4 = 27 × 0.75 = 20.25 km ≈ 20.3 km!';
            this.puzzlesSolved.math3 = true;
            game.addClue('Math 3: 3/4 of 27km = 20.25km');
            game.addInventoryItem('Ruler', '📏');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Incorrect. Calculate 27 × 0.75';
        }
    }

    // MATH 4
    examineMath4() {
        if (this.puzzlesSolved.math4) {
            game.showChronosMessage("Speed problem complete!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Average Speed Problem:</strong><br><br>
                    A Tube train travels 18 km in 30 minutes.<br>
                    <br>
                    What is its average speed in km/h?
                </p>
                <div class="puzzle-input-group">
                    <input type="number" id="math4-answer" class="puzzle-input" placeholder="Speed in km/h..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkMath4()">Calculate Speed</button>
                <div id="math4-feedback"></div>
            </div>
        `;
        game.showPuzzle('⚡ Speed Calculator', puzzleContent);
    }

    checkMath4() {
        const answer = parseFloat(document.getElementById('math4-answer').value);
        const feedback = document.getElementById('math4-feedback');
        
        if (answer === 36) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! 18km in 30 min = 36 km in 60 min = 36 km/h!';
            this.puzzlesSolved.math4 = true;
            game.addClue('Math 4: Average speed is 36 km/h');
            game.addInventoryItem('Speedometer', '⚡');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. If 18km takes 30 min, how far in 60 min?';
        }
    }

    // CODE 1 - Binary
    examineCode1() {
        if (this.puzzlesSolved.code1) {
            game.showChronosMessage("Binary code cracked!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Binary Station Code:</strong><br><br>
                    Decode this binary message:<br><br>
                    <span style="font-family: monospace; font-size: 1.2rem; color: #dc241f;">01010100 01010101 01000010 01000101</span>
                    <br><br>
                    <small>Hint: Each 8-digit group is one letter (A=65, B=66, etc. in decimal)</small>
                </p>
                <div class="puzzle-input-group">
                    <input type="text" id="code1-answer" class="puzzle-input" placeholder="Decoded word..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkCode1()">Decode</button>
                <div id="code1-feedback"></div>
            </div>
        `;
        game.showPuzzle('🔐 Binary Code', puzzleContent);
    }

    checkCode1() {
        const answer = document.getElementById('code1-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('code1-feedback');
        
        if (answer === 'tube') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Decoded! 01010100=T, 01010101=U, 01000010=B, 01000101=E = TUBE!';
            this.puzzlesSolved.code1 = true;
            game.addClue('Code 1: Binary decoded to TUBE');
            game.addInventoryItem('Binary Key', '🔐');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Convert binary to decimal, then to letters (84,85,66,69)';
        }
    }

    // CODE 2 - Caesar Cipher
    examineCode2() {
        if (this.puzzlesSolved.code2) {
            game.showChronosMessage("Caesar cipher solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Caesar Shift Cipher (Shift +3):</strong><br><br>
                    <span style="font-size: 1.2rem; color: #dc241f;">FLUFOH</span>
                    <br><br>
                    Each letter is shifted 3 places forward.<br>
                    What's the original word?<br>
                    <small>(Example: D → A, E → B)</small>
                </p>
                <div class="puzzle-input-group">
                    <input type="text" id="code2-answer" class="puzzle-input" placeholder="Decoded word..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkCode2()">Decode</button>
                <div id="code2-feedback"></div>
            </div>
        `;
        game.showPuzzle('🔑 Caesar Cipher', puzzleContent);
    }

    checkCode2() {
        const answer = document.getElementById('code2-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('code2-feedback');
        
        if (answer === 'circle') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Cracked! Shift back 3: F→C, L→I, U→R, F→C, O→L, H→E = CIRCLE!';
            this.puzzlesSolved.code2 = true;
            game.addClue('Code 2: Caesar cipher reveals CIRCLE (Circle Line)');
            game.addInventoryItem('Caesar Key', '🔑');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ No. Shift each letter back 3 positions in the alphabet';
        }
    }

    // CODE 3 - Morse
    examineCode3() {
        if (this.puzzlesSolved.code3) {
            game.showChronosMessage("Morse code decoded!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Morse Code Message:</strong><br><br>
                    <span style="font-family: monospace; font-size: 1.2rem; color: #dc241f;">
                    -- .- .--.
                    </span>
                    <br><br>
                    What word is this?<br>
                    <small>(M = --, A = .-, P = .--., etc.)</small>
                </p>
                <div class="puzzle-input-group">
                    <input type="text" id="code3-answer" class="puzzle-input" placeholder="Decoded word..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkCode3()">Decode</button>
                <div id="code3-feedback"></div>
            </div>
        `;
        game.showPuzzle('🗝️ Morse Code', puzzleContent);
    }

    checkCode3() {
        const answer = document.getElementById('code3-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('code3-feedback');
        
        if (answer === 'map') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Decoded! -- = M, .- = A, .--. = P = MAP!';
            this.puzzlesSolved.code3 = true;
            game.addClue('Code 3: Morse code spells MAP');
            game.addInventoryItem('Morse Key', '🗝️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Use a Morse code chart to decode';
        }
    }

    // CODE 4 - Alphabet Numbers
    examineCode4() {
        if (this.puzzlesSolved.code4) {
            game.showChronosMessage("Alphabet code solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Alphabet Number Code:</strong><br><br>
                    A=1, B=2, C=3... Z=26<br><br>
                    <span style="font-size: 1.2rem; color: #dc241f;">
                    26-15-14-5
                    </span>
                    <br><br>
                    What word is encoded here?
                </p>
                <div class="puzzle-input-group">
                    <input type="text" id="code4-answer" class="puzzle-input" placeholder="Decoded word..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkCode4()">Decode</button>
                <div id="code4-feedback"></div>
            </div>
        `;
        game.showPuzzle('🔓 Alphabet Code', puzzleContent);
    }

    checkCode4() {
        const answer = document.getElementById('code4-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('code4-feedback');
        
        if (answer === 'zone') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! 26=Z, 15=O, 14=N, 5=E = ZONE!';
            this.puzzlesSolved.code4 = true;
            game.addClue('Code 4: Alphabet numbers spell ZONE (fare zones)');
            game.addInventoryItem('Alphabet Key', '🔓');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not right. Convert each number to its letter position';
        }
    }

    // HISTORY 1
    examineHistory1() {
        if (this.puzzlesSolved.history1) {
            game.showChronosMessage("History question complete!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Underground History:</strong><br><br>
                    The Metropolitan Railway (now part of the Met Line) opened as the world's first underground railway on January 10th, 1863.
                    <br><br>
                    How old is the London Underground now?<br>
                    (Current year: 2026)
                </p>
                <div class="puzzle-input-group">
                    <input type="number" id="history1-answer" class="puzzle-input" placeholder="Age in years..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkHistory1()">Submit</button>
                <div id="history1-feedback"></div>
            </div>
        `;
        game.showPuzzle('📜 History Question 1', puzzleContent);
    }

    checkHistory1() {
        const answer = parseInt(document.getElementById('history1-answer').value);
        const feedback = document.getElementById('history1-feedback');
        
        if (answer === 163) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! 2026 - 1863 = 163 years old!';
            this.puzzlesSolved.history1 = true;
            game.addClue('History 1: The Underground is 163 years old (opened 1863)');
            game.addInventoryItem('History Book', '📜');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Calculate: 2026 - 1863';
        }
    }

    // HISTORY 2
    examineHistory2() {
        if (this.puzzlesSolved.history2) {
            game.showChronosMessage("Deep-level history solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Deep-Level Lines:</strong><br><br>
                    Which line was London's first deep-level electric railway?<br>
                    It opened in 1890 and ran between the City and Stockwell.<br>
                    <br>
                    <em>Hint: It connects north and south London...</em>
                </p>
                <div class="puzzle-input-group">
                    <input type="text" id="history2-answer" class="puzzle-input" placeholder="Which line?..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkHistory2()">Submit</button>
                <div id="history2-feedback"></div>
            </div>
        `;
        game.showPuzzle('🏛️ History Question 2', puzzleContent);
    }

    checkHistory2() {
        const answer = document.getElementById('history2-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('history2-feedback');
        
        if (answer.includes('northern')) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Brilliant! The Northern Line (originally City & South London Railway)!';
            this.puzzlesSolved.history2 = true;
            game.addClue('History 2: Northern Line was first deep-level line (1890)');
            game.addInventoryItem('Historical Ticket', '🏛️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ No. Think about the line colored black on the map...';
        }
    }

    // HISTORY 3
    examineHistory3() {
        if (this.puzzlesSolved.history3) {
            game.showChronosMessage("Wartime history complete!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>WWII History:</strong><br><br>
                    During World War II, many Tube stations were used as what?
                </p>
                <div class="puzzle-grid" style="grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectHistory3('hospitals')">
                        Field Hospitals
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectHistory3('shelters')">
                        Air Raid Shelters
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectHistory3('storage')">
                        Food Storage
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectHistory3('factories')">
                        Weapon Factories
                    </div>
                </div>
                <div id="history3-feedback"></div>
            </div>
        `;
        game.showPuzzle('⚔️ History Question 3', puzzleContent);
    }

    selectHistory3(choice) {
        const feedback = document.getElementById('history3-feedback');
        
        if (choice === 'shelters') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! Stations protected thousands from bombing raids!';
            this.puzzlesSolved.history3 = true;
            game.addClue('History 3: Stations used as air raid shelters in WWII');
            game.addInventoryItem('War Medal', '⚔️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ No. Think about protection from bombs...';
        }
    }

    // GEOGRAPHY 1
    examineGeography1() {
        if (this.puzzlesSolved.geography1) {
            game.showChronosMessage("Line count complete!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Tube Lines Count:</strong><br><br>
                    How many Tube lines does London Underground have?<br>
                    (Not including DLR, Overground, Elizabeth line, or Trams)
                </p>
                <div class="puzzle-input-group">
                    <input type="number" id="geography1-answer" class="puzzle-input" placeholder="Number of lines..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkGeography1()">Submit</button>
                <div id="geography1-feedback"></div>
            </div>
        `;
        game.showPuzzle('🗺️ Geography Question 1', puzzleContent);
    }

    checkGeography1() {
        const answer = parseInt(document.getElementById('geography1-answer').value);
        const feedback = document.getElementById('geography1-feedback');
        
        if (answer === 11) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! There are 11 Tube lines!';
            this.puzzlesSolved.geography1 = true;
            game.addClue('Geography 1: London Underground has 11 lines');
            game.addInventoryItem('Line Map', '🗺️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Count the colored lines on a Tube map...';
        }
    }

    // GEOGRAPHY 2
    examineGeography2() {
        if (this.puzzlesSolved.geography2) {
            game.showChronosMessage("Deepest station found!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Deepest Station:</strong><br><br>
                    Which is the deepest Tube station below street level?<br>
                    (At 58.5 metres / 192 feet deep)
                </p>
                <div class="puzzle-grid" style="grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectGeography2('hampstead')">
                        Hampstead
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectGeography2('waterloo')">
                        Waterloo
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectGeography2('kingscross')">
                        King's Cross
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectGeography2('holborn')">
                        Holborn
                    </div>
                </div>
                <div id="geography2-feedback"></div>
            </div>
        `;
        game.showPuzzle('🌍 Geography Question 2', puzzleContent);
    }

    selectGeography2(choice) {
        const feedback = document.getElementById('geography2-feedback');
        
        if (choice === 'hampstead') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! Hampstead is the deepest at 58.5 metres!';
            this.puzzlesSolved.geography2 = true;
            game.addClue('Geography 2: Hampstead is deepest station (58.5m)');
            game.addInventoryItem('Depth Gauge', '🌍');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ No. It\'s on the Northern Line in North London...';
        }
    }

    // LOGIC 1
    examineLogic1() {
        if (this.puzzlesSolved.logic1) {
            game.showChronosMessage("Commuter logic solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Three Commuters Logic Puzzle:</strong><br><br>
                    Three commuters (Alice, Bob, Carol) each take different Tube lines to work:<br>
                    • One takes the Victoria Line (light blue)<br>
                    • One takes the Central Line (red)<br>
                    • One takes the Northern Line (black)<br>
                    <br>
                    Clues:<br>
                    1. Alice doesn't take the red line<br>
                    2. Bob takes the Northern Line<br>
                    3. Carol doesn't take the blue line<br>
                    <br>
                    Which line does Alice take?
                </p>
                <div class="puzzle-grid" style="grid-template-columns: 1fr; gap: 10px;">
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectLogic1('victoria')">
                        Victoria Line (blue)
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectLogic1('central')">
                        Central Line (red)
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectLogic1('northern')">
                        Northern Line (black)
                    </div>
                </div>
                <div id="logic1-feedback"></div>
            </div>
        `;
        game.showPuzzle('🧠 Logic Puzzle 1', puzzleContent);
    }

    selectLogic1(choice) {
        const feedback = document.getElementById('logic1-feedback');
        
        if (choice === 'victoria') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Brilliant! Bob=Northern, Carol=Central, so Alice=Victoria!';
            this.puzzlesSolved.logic1 = true;
            game.addClue('Logic 1: Alice takes Victoria Line');
            game.addInventoryItem('Logic Token', '🧠');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Use the clues to eliminate options systematically';
        }
    }

    // LOGIC 2
    examineLogic2() {
        if (this.puzzlesSolved.logic2) {
            game.showChronosMessage("Route optimization done!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Shortest Route Problem:</strong><br><br>
                    From Leicester Square, you need to get to Victoria.<br>
                    <br>
                    Route A: Leicester Sq → Piccadilly Circus → Green Park → Victoria (3 stops)<br>
                    Route B: Leicester Sq → Charing Cross → Embankment → Westminster → Victoria (4 stops)<br>
                    Route C: Leicester Sq → Green Park → Victoria (2 stops)<br>
                    <br>
                    Which route has the FEWEST stops?
                </p>
                <div class="puzzle-grid" style="grid-template-columns: 1fr; gap: 10px;">
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectLogic2('a')">
                        Route A (3 stops)
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectLogic2('b')">
                        Route B (4 stops)
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectLogic2('c')">
                        Route C (2 stops)
                    </div>
                </div>
                <div id="logic2-feedback"></div>
            </div>
        `;
        game.showPuzzle('🤔 Logic Puzzle 2', puzzleContent);
    }

    selectLogic2(choice) {
        const feedback = document.getElementById('logic2-feedback');
        
        if (choice === 'c') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! Route C with only 2 stops is fastest!';
            this.puzzlesSolved.logic2 = true;
            game.addClue('Logic 2: Shortest route has 2 stops (via Green Park)');
            game.addInventoryItem('Route Planner', '🤔');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ No. Compare the number of stops in each route';
        }
    }

    // PATTERN 1
    examinePattern1() {
        if (this.puzzlesSolved.pattern1) {
            game.showChronosMessage("Number pattern solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Station Number Sequence:</strong><br><br>
                    Platform numbers follow this pattern:<br>
                    <br>
                    <span style="font-size: 1.3rem; color: #dc241f;">3, 6, 12, 24, 48, ?</span>
                    <br><br>
                    What number comes next?
                </p>
                <div class="puzzle-input-group">
                    <input type="number" id="pattern1-answer" class="puzzle-input" placeholder="Next number..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkPattern1()">Submit</button>
                <div id="pattern1-feedback"></div>
            </div>
        `;
        game.showPuzzle('🔢 Number Pattern', puzzleContent);
    }

    checkPattern1() {
        const answer = parseInt(document.getElementById('pattern1-answer').value);
        const feedback = document.getElementById('pattern1-feedback');
        
        if (answer === 96) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Excellent! Each number doubles: 48 × 2 = 96!';
            this.puzzlesSolved.pattern1 = true;
            game.addClue('Pattern: Doubling sequence, next is 96');
            game.addInventoryItem('Pattern Key', '🔢');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Look at how each number relates to the previous one...';
        }
    }

    updatePuzzleStatus() {
        Object.keys(this.puzzlesSolved).forEach(key => {
            if (this.puzzlesSolved[key]) {
                const statusEl = document.getElementById(`status-${key}`);
                if (statusEl) {
                    statusEl.innerHTML = statusEl.innerHTML.replace('❌', '✅');
                }
            }
        });
    }

    checkCompletion() {
        const allSolved = Object.values(this.puzzlesSolved).every(v => v === true);
        
        if (allSolved) {
            const portalObj = document.getElementById('portal-object');
            portalObj.style.opacity = '1';
            portalObj.style.cursor = 'pointer';
            portalObj.style.background = 'linear-gradient(135deg, rgba(220, 36, 31, 0.8) 0%, rgba(0, 54, 136, 0.8) 100%)';
            portalObj.style.border = '3px solid #ffd700';
            portalObj.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.8)';
            portalObj.onclick = () => this.openPortal();
            
            game.showChronosMessage("🎉 Outstanding! All 20 puzzles solved! The exit gates are now open! Mind the gap and head to freedom!");
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
            "Start with the riddles - think about Tube cards, trains, and the Northern Line!",
            "For maths: Add all journey segments. For fares: multiply days by trips by fare amount.",
            "Codes: Binary converts to decimal then letters. Caesar shifts back 3. Morse uses dots/dashes.",
            "History: Underground opened 1863. Northern Line was first deep-level. Stations were WWII shelters.",
            "Geography: Count 11 lines on the map. Hampstead is deepest at 58.5m.",
            "Logic: Use process of elimination. For patterns, look at how numbers double!"
        ];
        return hints[hintNumber - 1] || "You're doing brilliantly! Keep solving those Tube challenges!";
    }
}

// Create global instance
const londonUndergroundAdvancedRoom = new LondonUndergroundAdvancedRoom();