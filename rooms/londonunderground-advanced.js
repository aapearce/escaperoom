// London Underground Advanced - The Lost Tunnels
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
            logic1: false,
            logic2: false,
            pattern1: false,
            pattern2: false,
            geography: false
        };
        this.welcomeMessage = "Welcome to the abandoned Deep Level Shelter beneath London! You've discovered secret tunnels from World War II. Solve 20 advanced puzzles about the Underground's history, engineering, and mysteries to find your way back to the surface!";
        this.successMessage = "Outstanding! You've navigated the lost tunnels like a true Tube expert! The emergency exit is unlocked - welcome back to London!";
    }

    init() {
        document.getElementById('room-title').textContent = '🚇 London Underground - The Lost Tunnels';
        this.renderRoom();
        this.applyAdvancedTubeTheme();
    }

    applyAdvancedTubeTheme() {
        const roomView = document.getElementById('room-view');
        roomView.style.background = 'linear-gradient(180deg, #003688 0%, #000033 50%, #000000 100%)';
        roomView.style.color = '#ffffff';
    }

    renderRoom() {
        const roomView = document.getElementById('room-view');
        roomView.innerHTML = `
            <style>
                .advanced-tube-object {
                    background: rgba(220, 36, 31, 0.25) !important;
                    border: 3px solid #dc241f !important;
                    box-shadow: 0 0 15px rgba(220, 36, 31, 0.4);
                    transition: all 0.3s ease;
                }
                
                .advanced-tube-object:hover {
                    box-shadow: 0 0 25px rgba(220, 36, 31, 0.7);
                    border-color: #ff0000 !important;
                    transform: translateY(-3px);
                }

                .tunnel-glow {
                    animation: tunnel-pulse 3s ease-in-out infinite;
                }

                @keyframes tunnel-pulse {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 1; }
                }
            </style>

            <div class="room-intro" style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #dc241f; margin-bottom: 15px; text-shadow: 0 0 10px #dc241f;" class="tunnel-glow">
                    🚇 The Lost Tunnels - Advanced Challenge
                </h2>
                <p style="font-size: 1.1rem; line-height: 1.6;">
                    You've stumbled into abandoned tunnels beneath the London Underground - part of the secret Deep Level Shelters 
                    built during World War II. These passages hold 20 challenging puzzles testing your knowledge of Tube history, 
                    mathematics, codes, and logic. Only the brightest can navigate back to the surface!
                    <br><br>
                    <em style="color: #ffd700;">\"Mind the gap... and your mind!\"</em>
                </p>
            </div>

            <div class="room-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineRiddle1()">
                    <h3>🎫 Riddle: Oyster Logic</h3>
                    <p>A complex riddle about payment...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineRiddle2()">
                    <h3>🚇 Riddle: Platform Mystery</h3>
                    <p>Decode this cryptic message...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineRiddle3()">
                    <h3>🗺️ Riddle: Line Logic</h3>
                    <p>A puzzle about Tube connections...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineRiddle4()">
                    <h3>🎭 Riddle: Theatre Stations</h3>
                    <p>Famous West End riddle...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineMath1()">
                    <h3>➕ Math: Speed Calculation</h3>
                    <p>Calculate average train speed...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineMath2()">
                    <h3>✖️ Math: Zone Fares</h3>
                    <p>Complex fare calculation...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineMath3()">
                    <h3>📐 Math: Tunnel Angles</h3>
                    <p>Engineering mathematics...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineMath4()">
                    <h3>🔢 Math: Passenger Flow</h3>
                    <p>Statistics and averages...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineCode1()">
                    <h3>🔐 Code: Binary Signal</h3>
                    <p>Binary code from signal box...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineCode2()">
                    <h3>🔑 Code: Caesar Shift</h3>
                    <p>Encrypted station name...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineCode3()">
                    <h3>🗝️ Code: Hexadecimal</h3>
                    <p>Computer system code...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineCode4()">
                    <h3>🔓 Code: Morse</h3>
                    <p>Old telegraph message...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineHistory1()">
                    <h3>📜 History: First Line</h3>
                    <p>Test your Underground history...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineHistory2()">
                    <h3>📖 History: WWII Shelters</h3>
                    <p>Deep level shelter facts...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineHistory3()">
                    <h3>🏛️ History: Architecture</h3>
                    <p>Famous station designs...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineLogic1()">
                    <h3>🧠 Logic: Three Lines</h3>
                    <p>Logical deduction puzzle...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineLogic2()">
                    <h3>🤔 Logic: Route Planning</h3>
                    <p>Optimal journey problem...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examinePattern1()">
                    <h3>🔄 Pattern: Station Numbers</h3>
                    <p>Number sequence puzzle...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examinePattern2()">
                    <h3>🔁 Pattern: Opening Years</h3>
                    <p>Historical pattern puzzle...</p>
                </div>

                <div class="room-object advanced-tube-object" onclick="londonUndergroundAdvancedRoom.examineGeography()">
                    <h3>🌍 Geography: Zones & Depths</h3>
                    <p>Underground geography quiz...</p>
                </div>

                <div class="room-object" id="portal-object" style="opacity: 0.3; cursor: not-allowed; background: rgba(220, 36, 31, 0.2); border: 2px solid #666;">
                    <h3>🚪 Emergency Exit</h3>
                    <p>Solve all 20 puzzles to escape!</p>
                </div>
            </div>

            <div id="puzzle-status" style="margin-top: 30px; padding: 20px; background: rgba(220, 36, 31, 0.2); border-radius: 10px; border: 2px solid #dc241f;">
                <h3 style="text-align: center; margin-bottom: 15px; color: #ffd700;">🚇 Advanced Tunnel Challenges 🚇</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 8px; font-size: 0.8rem;">
                    <div id="status-riddle1">🎫 Riddle 1: ❌</div>
                    <div id="status-riddle2">🚇 Riddle 2: ❌</div>
                    <div id="status-riddle3">🗺️ Riddle 3: ❌</div>
                    <div id="status-riddle4">🎭 Riddle 4: ❌</div>
                    <div id="status-math1">➕ Math 1: ❌</div>
                    <div id="status-math2">✖️ Math 2: ❌</div>
                    <div id="status-math3">📐 Math 3: ❌</div>
                    <div id="status-math4">🔢 Math 4: ❌</div>
                    <div id="status-code1">🔐 Code 1: ❌</div>
                    <div id="status-code2">🔑 Code 2: ❌</div>
                    <div id="status-code3">🗝️ Code 3: ❌</div>
                    <div id="status-code4">🔓 Code 4: ❌</div>
                    <div id="status-history1">📜 History 1: ❌</div>
                    <div id="status-history2">📖 History 2: ❌</div>
                    <div id="status-history3">🏛️ History 3: ❌</div>
                    <div id="status-logic1">🧠 Logic 1: ❌</div>
                    <div id="status-logic2">🤔 Logic 2: ❌</div>
                    <div id="status-pattern1">🔄 Pattern 1: ❌</div>
                    <div id="status-pattern2">🔁 Pattern 2: ❌</div>
                    <div id="status-geography">🌍 Geography: ❌</div>
                </div>
            </div>
        `;
    }

    // RIDDLE 1 - Oyster Logic
    examineRiddle1() {
        if (this.puzzlesSolved.riddle1) {
            game.showChronosMessage("Riddle already solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong style="font-size: 1.1rem; color: #dc241f;">
                    "I'm tapped to enter, tapped to leave,<br>
                    Blue like the ocean, worn on your sleeve.<br>
                    Without me, your fare doubles in price,<br>
                    I'm rechargeable and oh so nice.<br>
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
        
        if (answer.includes('oyster') || answer === 'oyster card' || answer === 'contactless card') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! The Oyster card - essential for London travel!';
            this.puzzlesSolved.riddle1 = true;
            game.addClue('An Oyster card is blue and tapped at barriers');
            game.addInventoryItem('Oyster Card', '🎫');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not right. Think about what you use to pay for the Tube...';
        }
    }

    // RIDDLE 2 - Platform Mystery
    examineRiddle2() {
        if (this.puzzlesSolved.riddle2) {
            game.showChronosMessage("Platform mystery solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong style="font-size: 1.1rem; color: #dc241f;">
                    "I divide the train from those who wait,<br>
                    With a yellow line that seals your fate.<br>
                    'Mind' me when the doors swing wide,<br>
                    I'm the space between platform and ride.<br>
                    What am I?"</strong>
                </p>
                <div class="puzzle-input-group">
                    <input type="text" id="riddle2-answer" class="puzzle-input" placeholder="Your answer..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkRiddle2()">Submit</button>
                <div id="riddle2-feedback"></div>
            </div>
        `;
        game.showPuzzle('🚇 Platform Mystery', puzzleContent);
    }

    checkRiddle2() {
        const answer = document.getElementById('riddle2-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle2-feedback');
        
        if (answer === 'gap' || answer === 'the gap' || answer.includes('platform gap')) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! "Mind the gap" - the most famous Tube phrase!';
            this.puzzlesSolved.riddle2 = true;
            game.addClue('"Mind the gap" warns of the space between train and platform');
            game.addInventoryItem('Warning Sign', '⚠️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ No. Think of the famous Tube warning announcement...';
        }
    }

    // RIDDLE 3 - Line Logic
    examineRiddle3() {
        if (this.puzzlesSolved.riddle3) {
            game.showChronosMessage("Line logic solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong style="font-size: 1.1rem; color: #dc241f;">
                    "I'm red like fire, cutting through town,<br>
                    From Ealing west to the east I'm bound.<br>
                    Oxford, Holborn, Chancery Lane,<br>
                    Which famous line am I by name?"</strong>
                </p>
                <div class="puzzle-input-group">
                    <input type="text" id="riddle3-answer" class="puzzle-input" placeholder="Your answer..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkRiddle3()">Submit</button>
                <div id="riddle3-feedback"></div>
            </div>
        `;
        game.showPuzzle('🗺️ Line Logic', puzzleContent);
    }

    checkRiddle3() {
        const answer = document.getElementById('riddle3-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle3-feedback');
        
        if (answer.includes('central')) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Excellent! The Central Line - red and running east-west!';
            this.puzzlesSolved.riddle3 = true;
            game.addClue('Central Line is red and goes from west to east London');
            game.addInventoryItem('Line Map', '🗺️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong line. Which red line runs east-west through the centre?';
        }
    }

    // RIDDLE 4 - Theatre Stations
    examineRiddle4() {
        if (this.puzzlesSolved.riddle4) {
            game.showChronosMessage("Theatre riddle complete!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong style="font-size: 1.1rem; color: #dc241f;">
                    "Leicester, Covent Garden, Piccadilly too,<br>
                    These stations serve the theatres' queue.<br>
                    What's the famous district called,<br>
                    Where stages and shows have long enthralled?"</strong>
                </p>
                <div class="puzzle-input-group">
                    <input type="text" id="riddle4-answer" class="puzzle-input" placeholder="Your answer..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkRiddle4()">Submit</button>
                <div id="riddle4-feedback"></div>
            </div>
        `;
        game.showPuzzle('🎭 Theatre Stations', puzzleContent);
    }

    checkRiddle4() {
        const answer = document.getElementById('riddle4-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle4-feedback');
        
        if (answer.includes('west end')) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Brilliant! The West End - London\'s theatre district!';
            this.puzzlesSolved.riddle4 = true;
            game.addClue('West End is London\'s famous theatre district');
            game.addInventoryItem('Theatre Ticket', '🎭');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. What do we call London\'s theatre area?';
        }
    }

    // MATH 1 - Speed Calculation
    examineMath1() {
        if (this.puzzlesSolved.math1) {
            game.showChronosMessage("Speed calculation complete!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    A Tube train travels 15 kilometres in 20 minutes.
                    <br><br>
                    <strong>What is its average speed in kilometres per hour (km/h)?</strong>
                    <br><br>
                    <em>Hint: Speed = Distance ÷ Time. Convert minutes to hours!</em>
                </p>
                <div style="margin: 15px 0; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 10px;">
                    <p>20 minutes = 20÷60 hours = 1/3 hour</p>
                    <p>Speed = 15 km ÷ (1/3) hour</p>
                </div>
                <div class="puzzle-input-group">
                    <input type="number" id="math1-answer" class="puzzle-input" placeholder="Enter km/h..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkMath1()">Calculate</button>
                <div id="math1-feedback"></div>
            </div>
        `;
        game.showPuzzle('➕ Speed Calculation', puzzleContent);
    }

    checkMath1() {
        const answer = parseInt(document.getElementById('math1-answer').value);
        const feedback = document.getElementById('math1-feedback');
        
        if (answer === 45) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! 15 ÷ (1/3) = 45 km/h!';
            this.puzzlesSolved.math1 = true;
            game.addClue('Average Tube speed calculated: 45 km/h');
            game.addInventoryItem('Speed Gauge', '📊');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not right. Convert 20 minutes to hours (20÷60), then divide distance by time.';
        }
    }

    // MATH 2 - Zone Fares
    examineMath2() {
        if (this.puzzlesSolved.math2) {
            game.showChronosMessage("Fare calculation done!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Zone Fare Calculation:</strong>
                    <br><br>
                    Peak fare Zone 1-2: £3.40<br>
                    Peak fare Zone 1-3: £4.00<br>
                    Off-peak discount: 25% off<br>
                    <br>
                    A commuter makes 2 journeys Zone 1-2 (peak) and 1 journey Zone 1-3 (off-peak) in one day.
                    <br><br>
                    <strong>What is the TOTAL cost?</strong>
                </p>
                <div class="puzzle-input-group">
                    <input type="number" id="math2-answer" class="puzzle-input" step="0.01" placeholder="Enter total in £..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkMath2()">Calculate</button>
                <div id="math2-feedback"></div>
            </div>
        `;
        game.showPuzzle('✖️ Zone Fare Calculation', puzzleContent);
    }

    checkMath2() {
        const answer = parseFloat(document.getElementById('math2-answer').value);
        const feedback = document.getElementById('math2-feedback');
        
        if (answer === 9.80 || answer === 9.8) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! (2×£3.40) + (£4.00×0.75) = £6.80 + £3.00 = £9.80!';
            this.puzzlesSolved.math2 = true;
            game.addClue('Total fare: £9.80 for 3 journeys with off-peak discount');
            game.addInventoryItem('Fare Receipt', '🧾');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Calculate: 2 peak + 1 off-peak (75% of £4.00)';
        }
    }

    // MATH 3 - Tunnel Angles
    examineMath3() {
        if (this.puzzlesSolved.math3) {
            game.showChronosMessage("Angle calculation complete!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Tunnel Engineering:</strong>
                    <br><br>
                    A tunnel descends at a 5° angle for 400 metres horizontally.
                    <br><br>
                    Using: sin(5°) ≈ 0.087
                    <br><br>
                    <strong>How deep is the tunnel? (Round to nearest metre)</strong>
                    <br><br>
                    <em>Depth = Horizontal distance × sin(angle)</em>
                </p>
                <div style="margin: 15px 0; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 10px;">
                    <p>Depth = 400 × 0.087 = ?</p>
                </div>
                <div class="puzzle-input-group">
                    <input type="number" id="math3-answer" class="puzzle-input" placeholder="Enter depth in metres..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkMath3()">Calculate</button>
                <div id="math3-feedback"></div>
            </div>
        `;
        game.showPuzzle('📐 Tunnel Angle Calculation', puzzleContent);
    }

    checkMath3() {
        const answer = parseInt(document.getElementById('math3-answer').value);
        const feedback = document.getElementById('math3-feedback');
        
        if (answer === 35 || answer === 34 || answer === 36) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Excellent! 400 × 0.087 ≈ 35 metres deep!';
            this.puzzlesSolved.math3 = true;
            game.addClue('Tunnel depth: approximately 35 metres using trigonometry');
            game.addInventoryItem('Engineering Plans', '📐');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. Multiply 400 by 0.087...';
        }
    }

    // MATH 4 - Passenger Flow
    examineMath4() {
        if (this.puzzlesSolved.math4) {
            game.showChronosMessage("Statistics complete!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Passenger Flow Statistics:</strong>
                    <br><br>
                    Oxford Circus station daily passengers:<br>
                    Monday: 98,000<br>
                    Tuesday: 102,000<br>
                    Wednesday: 105,000<br>
                    Thursday: 103,000<br>
                    Friday: 112,000<br>
                    <br>
                    <strong>What is the average (mean) daily passenger count?</strong>
                </p>
                <div class="puzzle-input-group">
                    <input type="number" id="math4-answer" class="puzzle-input" placeholder="Enter average..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkMath4()">Calculate</button>
                <div id="math4-feedback"></div>
            </div>
        `;
        game.showPuzzle('🔢 Passenger Statistics', puzzleContent);
    }

    checkMath4() {
        const answer = parseInt(document.getElementById('math4-answer').value);
        const feedback = document.getElementById('math4-feedback');
        
        if (answer === 104000) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! (98+102+105+103+112) ÷ 5 = 520 ÷ 5 = 104,000!';
            this.puzzlesSolved.math4 = true;
            game.addClue('Average daily passengers: 104,000');
            game.addInventoryItem('Statistics Report', '📈');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Add all 5 days and divide by 5.';
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
                    <strong>Binary Signal System:</strong>
                    <br><br>
                    The signal box displays this binary code:
                    <br><br>
                    <strong style="font-size: 1.2rem; color: #dc241f;">01010011 01010100 01001111 01010000</strong>
                    <br><br>
                    Decode it to a word! (Each 8 digits = 1 letter)
                </p>
                <div style="margin: 15px 0; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 10px;">
                    <small>Hint: Convert binary to decimal, then to ASCII letters</small>
                </div>
                <div class="puzzle-input-group">
                    <input type="text" id="code1-answer" class="puzzle-input" placeholder="Enter the word..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkCode1()">Decode</button>
                <div id="code1-feedback"></div>
            </div>
        `;
        game.showPuzzle('🔐 Binary Signal Code', puzzleContent);
    }

    checkCode1() {
        const answer = document.getElementById('code1-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('code1-feedback');
        
        if (answer === 'stop') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Decoded! Binary spells STOP!';
            this.puzzlesSolved.code1 = true;
            game.addClue('Binary decoded: STOP (train signal)');
            game.addInventoryItem('Binary Code', '🔐');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. 01010011=S, 01010100=T, 01001111=O, 01010000=P';
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
                    <strong>Caesar Cipher (Shift +3):</strong>
                    <br><br>
                    Encrypted station name:
                    <br><br>
                    <strong style="font-size: 1.3rem; color: #dc241f;">EDQN</strong>
                    <br><br>
                    Shift each letter BACK 3 positions!
                </p>
                <div style="margin: 15px 0; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 10px;">
                    <small>Example: D → A, E → B, F → C</small>
                </div>
                <div class="puzzle-input-group">
                    <input type="text" id="code2-answer" class="puzzle-input" placeholder="Station name..." />
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
        
        if (answer === 'bank') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Cracked! E→B, D→A, Q→N, N→K = BANK station!';
            this.puzzlesSolved.code2 = true;
            game.addClue('Caesar cipher decoded: BANK station');
            game.addInventoryItem('Cipher Wheel', '🔑');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Shift each letter back 3: E→B, D→A...';
        }
    }

    // CODE 3 - Hexadecimal
    examineCode3() {
        if (this.puzzlesSolved.code3) {
            game.showChronosMessage("Hex code solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Hexadecimal Computer Code:</strong>
                    <br><br>
                    The system displays:
                    <br><br>
                    <strong style="font-size: 1.2rem; color: #dc241f;">0x47 0x4F</strong>
                    <br><br>
                    Convert hex to ASCII to decode! (0x means hexadecimal)
                </p>
                <div style="margin: 15px 0; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 10px;">
                    <small>Hint: 0x47 = 71 in decimal = G, 0x4F = 79 = O</small>
                </div>
                <div class="puzzle-input-group">
                    <input type="text" id="code3-answer" class="puzzle-input" placeholder="Decoded message..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkCode3()">Decode</button>
                <div id="code3-feedback"></div>
            </div>
        `;
        game.showPuzzle('🗝️ Hexadecimal Code', puzzleContent);
    }

    checkCode3() {
        const answer = document.getElementById('code3-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('code3-feedback');
        
        if (answer === 'go') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Decoded! 0x47=G, 0x4F=O → GO!';
            this.puzzlesSolved.code3 = true;
            game.addClue('Hexadecimal decoded: GO (train signal)');
            game.addInventoryItem('Hex Code', '🗝️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Convert hex to ASCII: 47→G, 4F→O';
        }
    }

    // CODE 4 - Morse Code
    examineCode4() {
        if (this.puzzlesSolved.code4) {
            game.showChronosMessage("Morse code decoded!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Old Telegraph Message:</strong>
                    <br><br>
                    <strong style="font-size: 1.2rem; color: #dc241f;">
                    .... . .-.. .--. 
                    </strong>
                    <br><br>
                    Decode this Morse code message!
                </p>
                <div style="margin: 15px 0; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 10px;">
                    <small>H=.... E=. L=.-.. P=.--.</small>
                </div>
                <div class="puzzle-input-group">
                    <input type="text" id="code4-answer" class="puzzle-input" placeholder="Decoded message..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkCode4()">Decode</button>
                <div id="code4-feedback"></div>
            </div>
        `;
        game.showPuzzle('🔓 Morse Code', puzzleContent);
    }

    checkCode4() {
        const answer = document.getElementById('code4-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('code4-feedback');
        
        if (answer === 'help') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Decoded! Morse says HELP!';
            this.puzzlesSolved.code4 = true;
            game.addClue('Morse code decoded: HELP');
            game.addInventoryItem('Telegraph', '📟');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Decode each letter: H-E-L-P';
        }
    }

    // HISTORY 1 - First Line
    examineHistory1() {
        if (this.puzzlesSolved.history1) {
            game.showChronosMessage("History question answered!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Underground History:</strong>
                    <br><br>
                    The world's first underground railway opened in London on January 10, 1863.
                    <br><br>
                    <strong>What two stations did it run between?</strong>
                </p>
                <div class="puzzle-grid" style="grid-template-columns: 1fr; margin: 20px 0;">
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectHistory1('paddington-farringdon')">
                        Paddington and Farringdon
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectHistory1('kings-liverpool')">
                        King's Cross and Liverpool Street
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectHistory1('victoria-waterloo')">
                        Victoria and Waterloo
                    </div>
                </div>
                <div id="history1-feedback"></div>
            </div>
        `;
        game.showPuzzle('📜 First Underground Line', puzzleContent);
    }

    selectHistory1(choice) {
        const feedback = document.getElementById('history1-feedback');
        
        if (choice === 'paddington-farringdon') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! Paddington to Farringdon - the Metropolitan Railway!';
            this.puzzlesSolved.history1 = true;
            game.addClue('First line: Paddington to Farringdon (1863)');
            game.addInventoryItem('History Book', '📜');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. The Metropolitan Railway was the first line...';
        }
    }

    // HISTORY 2 - WWII Shelters
    examineHistory2() {
        if (this.puzzlesSolved.history2) {
            game.showChronosMessage("WWII knowledge correct!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>World War II History:</strong>
                    <br><br>
                    During the Blitz, many Londoners sheltered in Underground stations at night.
                    <br><br>
                    <strong>Approximately how many people could shelter in the Tube at once during WWII?</strong>
                </p>
                <div class="puzzle-grid" style="grid-template-columns: 1fr; margin: 20px 0;">
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectHistory2('50000')">
                        50,000 people
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectHistory2('177000')">
                        177,000 people
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectHistory2('500000')">
                        500,000 people
                    </div>
                </div>
                <div id="history2-feedback"></div>
            </div>
        `;
        game.showPuzzle('📖 WWII Shelters', puzzleContent);
    }

    selectHistory2(choice) {
        const feedback = document.getElementById('history2-feedback');
        
        if (choice === '177000') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! Up to 177,000 people sheltered in Tube stations!';
            this.puzzlesSolved.history2 = true;
            game.addClue('WWII: 177,000 people sheltered in the Underground');
            game.addInventoryItem('War Document', '📖');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Think of a large but realistic number...';
        }
    }

    // HISTORY 3 - Architecture
    examineHistory3() {
        if (this.puzzlesSolved.history3) {
            game.showChronosMessage("Architecture question solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Famous Station Architecture:</strong>
                    <br><br>
                    Which architect designed many iconic Underground stations with distinctive circular motifs and modernist style in the 1930s?
                </p>
                <div class="puzzle-grid" style="grid-template-columns: 1fr; margin: 20px 0;">
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectHistory3('holden')">
                        Charles Holden
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectHistory3('wren')">
                        Christopher Wren
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectHistory3('foster')">
                        Norman Foster
                    </div>
                </div>
                <div id="history3-feedback"></div>
            </div>
        `;
        game.showPuzzle('🏛️ Underground Architecture', puzzleContent);
    }

    selectHistory3(choice) {
        const feedback = document.getElementById('history3-feedback');
        
        if (choice === 'holden') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Excellent! Charles Holden designed Art Deco Tube stations!';
            this.puzzlesSolved.history3 = true;
            game.addClue('Charles Holden designed iconic 1930s Tube stations');
            game.addInventoryItem('Blueprint', '🏛️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. This architect was famous for 1930s Underground design...';
        }
    }

    // LOGIC 1 - Three Lines
    examineLogic1() {
        if (this.puzzlesSolved.logic1) {
            game.showChronosMessage("Logic puzzle solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Three Lines Logic:</strong>
                    <br><br>
                    • The red line is not the oldest<br>
                    • The blue line is older than the black line<br>
                    • The yellow line is the oldest<br>
                    <br>
                    <strong>Which line opened second?</strong>
                </p>
                <div class="puzzle-grid" style="grid-template-columns: 1fr; margin: 20px 0;">
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectLogic1('red')">
                        Red Line
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectLogic1('blue')">
                        Blue Line
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectLogic1('black')">
                        Black Line
                    </div>
                </div>
                <div id="logic1-feedback"></div>
            </div>
        `;
        game.showPuzzle('🧠 Three Lines Logic', puzzleContent);
    }

    selectLogic1(choice) {
        const feedback = document.getElementById('logic1-feedback');
        
        if (choice === 'red') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! Order: Yellow (1st), Red (2nd), Blue (3rd), Black (4th)!';
            this.puzzlesSolved.logic1 = true;
            game.addClue('Logic: Red line opened second');
            game.addInventoryItem('Logic Key', '🧠');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Yellow is 1st, blue is older than black...';
        }
    }

    // LOGIC 2 - Route Planning
    examineLogic2() {
        if (this.puzzlesSolved.logic2) {
            game.showChronosMessage("Route planning done!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Optimal Route Planning:</strong>
                    <br><br>
                    To get from Leicester Square to Tower Hill:
                    <br><br>
                    Route A: Northern Line (2 stops) + Circle Line (6 stops) = 8 stops<br>
                    Route B: Piccadilly Line (5 stops) + District Line (3 stops) = 8 stops<br>
                    Route C: Walk (15 min) + Central Line (4 stops) = 4 stops + walk<br>
                    <br>
                    <strong>Which route has the FEWEST Tube stops?</strong>
                </p>
                <div class="puzzle-grid" style="grid-template-columns: 1fr; margin: 20px 0;">
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectLogic2('a')">
                        Route A
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectLogic2('b')">
                        Route B
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectLogic2('c')">
                        Route C
                    </div>
                </div>
                <div id="logic2-feedback"></div>
            </div>
        `;
        game.showPuzzle('🤔 Route Planning Logic', puzzleContent);
    }

    selectLogic2(choice) {
        const feedback = document.getElementById('logic2-feedback');
        
        if (choice === 'c') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! Route C has only 4 Tube stops (plus a walk)!';
            this.puzzlesSolved.logic2 = true;
            game.addClue('Route C is most efficient: 4 stops + walk');
            game.addInventoryItem('Route Map', '🗺️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Count Tube stops only, not walking time...';
        }
    }

    // PATTERN 1 - Station Numbers
    examinePattern1() {
        if (this.puzzlesSolved.pattern1) {
            game.showChronosMessage("Pattern complete!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Station Platform Numbers:</strong>
                    <br><br>
                    A station has platforms numbered in this pattern:
                    <br><br>
                    <strong style="font-size: 1.2rem;">3, 7, 11, 15, 19, ?</strong>
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
        game.showPuzzle('🔄 Number Sequence', puzzleContent);
    }

    checkPattern1() {
        const answer = parseInt(document.getElementById('pattern1-answer').value);
        const feedback = document.getElementById('pattern1-feedback');
        
        if (answer === 23) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! Pattern: +4 each time. 19+4=23!';
            this.puzzlesSolved.pattern1 = true;
            game.addClue('Pattern: Add 4 each time (arithmetic sequence)');
            game.addInventoryItem('Pattern Key', '🔄');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Look at the difference between numbers...';
        }
    }

    // PATTERN 2 - Opening Years
    examinePattern2() {
        if (this.puzzlesSolved.pattern2) {
            game.showChronosMessage("Historical pattern solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Tube Line Opening Years:</strong>
                    <br><br>
                    Victoria Line opened: 1969<br>
                    Jubilee Line opened: 1979<br>
                    <br>
                    <strong>How many years apart were these openings?</strong>
                </p>
                <div class="puzzle-input-group">
                    <input type="number" id="pattern2-answer" class="puzzle-input" placeholder="Years apart..." />
                </div>
                <button class="puzzle-submit" onclick="londonUndergroundAdvancedRoom.checkPattern2()">Calculate</button>
                <div id="pattern2-feedback"></div>
            </div>
        `;
        game.showPuzzle('🔁 Historical Pattern', puzzleContent);
    }

    checkPattern2() {
        const answer = parseInt(document.getElementById('pattern2-answer').value);
        const feedback = document.getElementById('pattern2-feedback');
        
        if (answer === 10) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! 1979 - 1969 = 10 years apart!';
            this.puzzlesSolved.pattern2 = true;
            game.addClue('Victoria (1969) and Jubilee (1979) opened 10 years apart');
            game.addInventoryItem('Timeline', '🔁');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Subtract: 1979 - 1969 = ?';
        }
    }

    // GEOGRAPHY - Zones and Depths
    examineGeography() {
        if (this.puzzlesSolved.geography) {
            game.showChronosMessage("Geography quiz complete!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    <strong>Underground Geography:</strong>
                    <br><br>
                    Which is the deepest Tube station (measured from street level to platform)?
                </p>
                <div class="puzzle-grid" style="grid-template-columns: 1fr; margin: 20px 0;">
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectGeography('hampstead')">
                        Hampstead (58.5m deep)
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectGeography('waterloo')">
                        Waterloo (30m deep)
                    </div>
                    <div class="puzzle-option" onclick="londonUndergroundAdvancedRoom.selectGeography('embankment')">
                        Embankment (20m deep)
                    </div>
                </div>
                <div id="geography-feedback"></div>
            </div>
        `;
        game.showPuzzle('🌍 Tube Geography', puzzleContent);
    }

    selectGeography(choice) {
        const feedback = document.getElementById('geography-feedback');
        
        if (choice === 'hampstead') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! Hampstead is the deepest at 58.5 metres!';
            this.puzzlesSolved.geography = true;
            game.addClue('Hampstead is the deepest Tube station (58.5m)');
            game.addInventoryItem('Depth Chart', '🌍');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. The Northern Line has the deepest station...';
        }
    }

    updatePuzzleStatus() {
        const statuses = {
            riddle1: '🎫', riddle2: '🚇', riddle3: '🗺️', riddle4: '🎭',
            math1: '➕', math2: '✖️', math3: '📐', math4: '🔢',
            code1: '🔐', code2: '🔑', code3: '🗝️', code4: '🔓',
            history1: '📜', history2: '📖', history3: '🏛️',
            logic1: '🧠', logic2: '🤔',
            pattern1: '🔄', pattern2: '🔁',
            geography: '🌍'
        };

        Object.keys(this.puzzlesSolved).forEach(key => {
            if (this.puzzlesSolved[key]) {
                const parts = key.match(/([a-z]+)(\d+)?/);
                const type = parts[1];
                const num = parts[2] || '';
                const label = type.charAt(0).toUpperCase() + type.slice(1) + (num ? ' ' + num : '');
                document.getElementById(`status-${key}`).innerHTML = `${statuses[key]} ${label}: ✅`;
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
            portalObj.style.boxShadow = '0 0 40px rgba(255, 215, 0, 0.8)';
            portalObj.onclick = () => this.openPortal();
            
            game.showChronosMessage("🎉 OUTSTANDING! All 20 challenges completed! The emergency exit is unlocked! Surface access granted!");
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
            "Start with riddles! Oyster card is blue and tapped. The gap is warned about. Central Line is red. West End has theatres.",
            "Math: Speed=15÷(1/3)=45. Fares=(2×3.40)+(4×0.75)=9.80. Depth=400×0.087≈35. Average=(98+102+105+103+112)÷5=104.",
            "Codes: Binary 01010011=S. Caesar shift: EDQN→BANK. Hex 0x47=G. Morse ....=H.",
            "History: First line was Paddington-Farringdon (1863). 177,000 sheltered in WWII. Holden designed 1930s stations.",
            "Logic: Yellow→Red→Blue→Black. Route C has fewest stops. Pattern adds 4. Years: 1979-1969=10. Hampstead is deepest."
        ];
        return hints[hintNumber - 1] || "You're doing brilliantly! Keep solving those advanced Tube puzzles!";
    }
}

// Create global instance
const londonUndergroundAdvancedRoom = new LondonUndergroundAdvancedRoom();