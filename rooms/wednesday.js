// Wednesday's Dark Academy - Nevermore's Mystery
class WednesdayRoom {
    constructor() {
        this.puzzlesSolved = {
            riddle1: false,
            riddle2: false,
            code1: false,
            code2: false,
            pattern: false,
            logic: false,
            wordplay: false,
            sequence: false
        };
        this.welcomeMessage = "Welcome to Nevermore Academy on a Wednesday! The halls are draped in shadows, cobwebs, and bats... Solve all 8 dark puzzles to escape, and you might just brighten things up!";
        this.successMessage = "Woe! You've conquered Wednesday's challenges! Even the darkest mysteries yield to brilliance!";
        this.isRainbow = false;
    }

    init() {
        document.getElementById('room-title').textContent = '🕷️ Wednesday\'s Dark Academy';
        this.renderRoom();
        this.applyDarkTheme();
    }

    applyDarkTheme() {
        const roomView = document.getElementById('room-view');
        roomView.style.background = 'linear-gradient(135deg, #1a0033 0%, #0d0015 100%)';
        roomView.style.color = '#e0e0e0';
    }

    applyRainbowTheme() {
        const roomView = document.getElementById('room-view');
        roomView.style.background = 'linear-gradient(135deg, #ff6b9d 0%, #c06c84 25%, #6c5b7b 50%, #355c7d 75%, #2a9d8f 100%)';
        roomView.style.transition = 'background 3s ease-in-out';
        
        // Add rainbow sparkles
        const intro = document.querySelector('.room-intro');
        if (intro) {
            intro.style.color = '#fff';
            intro.style.textShadow = '0 0 20px rgba(255,255,255,0.8)';
        }
        
        // Rainbow portal effect
        setTimeout(() => {
            const portalObj = document.getElementById('portal-object');
            if (portalObj) {
                portalObj.style.animation = 'rainbow-pulse 2s infinite';
            }
        }, 500);
    }

    renderRoom() {
        const roomView = document.getElementById('room-view');
        roomView.innerHTML = `
            <div class="room-intro" style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #9370db; margin-bottom: 15px; text-shadow: 0 0 10px #9370db;">🕸️ Nevermore Academy 🦇</h2>
                <p style="font-size: 1.1rem; line-height: 1.6;">
                    It's Wednesday, and darkness fills every corner of Nevermore Academy. Spiderwebs drape from the rafters, 
                    and bats flutter in the shadows. The gothic halls hold eight sinister puzzles that only the cleverest minds can solve.
                    <br><br>
                    <em>"Woe to those who enter... but fortune to those who escape."</em>
                </p>
            </div>

            <div class="room-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
                <div class="room-object" onclick="wednesdayRoom.examineRiddle1()" style="background: rgba(75, 0, 130, 0.2); border: 2px solid #9370db;">
                    <h3>🕯️ Cryptic Candle</h3>
                    <p>A flickering candle with a riddle carved into its base...</p>
                </div>

                <div class="room-object" onclick="wednesdayRoom.examineRiddle2()" style="background: rgba(75, 0, 130, 0.2); border: 2px solid #9370db;">
                    <h3>🦇 Bat's Message</h3>
                    <p>A bat clutches a scroll with a mysterious riddle...</p>
                </div>

                <div class="room-object" onclick="wednesdayRoom.examineCode1()" style="background: rgba(75, 0, 130, 0.2); border: 2px solid #9370db;">
                    <h3>🕷️ Spider's Code</h3>
                    <p>A web pattern holds a numerical secret...</p>
                </div>

                <div class="room-object" onclick="wednesdayRoom.examineCode2()" style="background: rgba(75, 0, 130, 0.2); border: 2px solid #9370db;">
                    <h3>📖 Dark Grimoire</h3>
                    <p>An ancient book with coded symbols...</p>
                </div>

                <div class="room-object" onclick="wednesdayRoom.examinePattern()" style="background: rgba(75, 0, 130, 0.2); border: 2px solid #9370db;">
                    <h3>🌙 Moonlight Pattern</h3>
                    <p>Moon phases create a mysterious sequence...</p>
                </div>

                <div class="room-object" onclick="wednesdayRoom.examineLogic()" style="background: rgba(75, 0, 130, 0.2); border: 2px solid #9370db;">
                    <h3>🎭 Masquerade Logic</h3>
                    <p>Three masked figures pose a logical challenge...</p>
                </div>

                <div class="room-object" onclick="wednesdayRoom.examineWordplay()" style="background: rgba(75, 0, 130, 0.2); border: 2px solid #9370db;">
                    <h3>🗝️ Key of Words</h3>
                    <p>A wordplay puzzle locks an ancient door...</p>
                </div>

                <div class="room-object" onclick="wednesdayRoom.examineSequence()" style="background: rgba(75, 0, 130, 0.2); border: 2px solid #9370db;">
                    <h3>⏰ Clockwork Sequence</h3>
                    <p>A broken clock reveals a numerical pattern...</p>
                </div>

                <div class="room-object" id="portal-object" style="opacity: 0.3; cursor: not-allowed; background: rgba(75, 0, 130, 0.2); border: 2px solid #666;">
                    <h3>🚪 Portal Home</h3>
                    <p>A dark portal awaits... Complete all 8 puzzles to activate it.</p>
                </div>
            </div>

            <div id="puzzle-status" style="margin-top: 30px; padding: 20px; background: rgba(147, 112, 219, 0.15); border-radius: 10px; border: 2px solid #9370db;">
                <h3 style="text-align: center; margin-bottom: 15px; color: #9370db;">🕸️ Wednesday's Challenges 🦇</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; font-size: 0.9rem;">
                    <div id="status-riddle1" class="puzzle-status-item">🕯️ Candle Riddle: ❌</div>
                    <div id="status-riddle2" class="puzzle-status-item">🦇 Bat's Riddle: ❌</div>
                    <div id="status-code1" class="puzzle-status-item">🕷️ Spider Code: ❌</div>
                    <div id="status-code2" class="puzzle-status-item">📖 Grimoire Code: ❌</div>
                    <div id="status-pattern" class="puzzle-status-item">🌙 Moon Pattern: ❌</div>
                    <div id="status-logic" class="puzzle-status-item">🎭 Masquerade: ❌</div>
                    <div id="status-wordplay" class="puzzle-status-item">🗝️ Wordplay: ❌</div>
                    <div id="status-sequence" class="puzzle-status-item">⏰ Sequence: ❌</div>
                </div>
            </div>

            <style>
                @keyframes rainbow-pulse {
                    0%, 100% { box-shadow: 0 0 30px #ff0000; }
                    14% { box-shadow: 0 0 30px #ff7f00; }
                    28% { box-shadow: 0 0 30px #ffff00; }
                    42% { box-shadow: 0 0 30px #00ff00; }
                    56% { box-shadow: 0 0 30px #0000ff; }
                    70% { box-shadow: 0 0 30px #4b0082; }
                    84% { box-shadow: 0 0 30px #9400d3; }
                }
            </style>
        `;
    }

    // RIDDLE 1 - Cryptic Candle
    examineRiddle1() {
        if (this.puzzlesSolved.riddle1) {
            game.showChronosMessage("This candle's mystery has been solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    The candle flickers with an eerie glow. Carved into its base is this riddle:
                    <br><br>
                    <strong style="font-size: 1.1rem; color: #9370db;">
                    "I have cities, but no houses.<br>
                    I have mountains, but no trees.<br>
                    I have water, but no fish.<br>
                    What am I?"</strong>
                </p>

                <div class="puzzle-input-group">
                    <input type="text" id="riddle1-answer" class="puzzle-input" 
                           placeholder="Type your answer..." />
                </div>

                <button class="puzzle-submit" onclick="wednesdayRoom.checkRiddle1()">Submit Answer</button>
                <div id="riddle1-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🕯️ The Cryptic Candle', puzzleContent);
    }

    checkRiddle1() {
        const answer = document.getElementById('riddle1-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle1-feedback');
        
        if (answer === 'map' || answer === 'a map') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! A map indeed! The candle glows brighter!';
            this.puzzlesSolved.riddle1 = true;
            game.addClue('Riddle 1: A map has cities but no houses');
            game.addInventoryItem('Candle Light', '🕯️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. Think of something that shows places but isn\'t a real place...';
        }
    }

    // RIDDLE 2 - Bat's Message
    examineRiddle2() {
        if (this.puzzlesSolved.riddle2) {
            game.showChronosMessage("The bat has delivered its message!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    The bat unfurls its scroll, revealing this witty riddle:
                    <br><br>
                    <strong style="font-size: 1.1rem; color: #9370db;">
                    "Wednesday walks backwards but never forwards.<br>
                    She's always coming but never arrives.<br>
                    What day is she waiting for?"</strong>
                    <br><br>
                    <em style="font-size: 0.9rem;">(Hint: Think about time itself...)</em>
                </p>

                <div class="puzzle-input-group">
                    <input type="text" id="riddle2-answer" class="puzzle-input" 
                           placeholder="Type your answer..." />
                </div>

                <button class="puzzle-submit" onclick="wednesdayRoom.checkRiddle2()">Submit Answer</button>
                <div id="riddle2-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🦇 The Bat\'s Riddle', puzzleContent);
    }

    checkRiddle2() {
        const answer = document.getElementById('riddle2-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle2-feedback');
        
        if (answer === 'tomorrow' || answer === 'tommorow') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Brilliant! Tomorrow is always coming but never here! The bat squeaks approvingly!';
            this.puzzlesSolved.riddle2 = true;
            game.addClue('Riddle 2: Tomorrow is perpetually one day away');
            game.addInventoryItem('Bat Wing', '🦇');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ No... Think about a day that\'s always "one day away"...';
        }
    }

    // CODE 1 - Spider's Code
    examineCode1() {
        if (this.puzzlesSolved.code1) {
            game.showChronosMessage("The spider's web has been decoded!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    The spider has woven numbers into its web. Each strand represents a number in the sequence:
                    <br><br>
                    <strong style="font-size: 1.2rem;">2, 4, 8, 16, 32, ?</strong>
                    <br><br>
                    What number comes next? (The spider is doubling its work!)
                </p>

                <div style="text-align: center; margin: 20px 0; font-size: 3rem;">🕷️🕸️</div>

                <div class="puzzle-input-group">
                    <input type="number" id="code1-answer" class="puzzle-input" 
                           placeholder="Enter the number..." />
                </div>

                <button class="puzzle-submit" onclick="wednesdayRoom.checkCode1()">Submit Answer</button>
                <div id="code1-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🕷️ Spider\'s Web Code', puzzleContent);
    }

    checkCode1() {
        const answer = parseInt(document.getElementById('code1-answer').value);
        const feedback = document.getElementById('code1-feedback');
        
        if (answer === 64) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! 32 × 2 = 64! The spider approves!';
            this.puzzlesSolved.code1 = true;
            game.addClue('Code 1: Powers of 2 - each number doubles');
            game.addInventoryItem('Spider Silk', '🕷️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. Look at how each number relates to the previous one...';
        }
    }

    // CODE 2 - Dark Grimoire
    examineCode2() {
        if (this.puzzlesSolved.code2) {
            game.showChronosMessage("The grimoire's code has been cracked!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    The ancient grimoire shows a cipher where letters are replaced by numbers based on their position in the alphabet:
                    <br><br>
                    A=1, B=2, C=3... Z=26
                    <br><br>
                    Decode this word: <strong style="color: #9370db;">23-15-5</strong>
                    <br><br>
                    <em style="font-size: 0.9rem;">Hint: It describes Wednesday's entire vibe!</em>
                </p>

                <div style="margin: 15px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                    <small>Example: 3-1-20 = C-A-T</small>
                </div>

                <div class="puzzle-input-group">
                    <input type="text" id="code2-answer" class="puzzle-input" 
                           placeholder="Type the decoded word..." />
                </div>

                <button class="puzzle-submit" onclick="wednesdayRoom.checkCode2()">Submit Answer</button>
                <div id="code2-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('📖 Grimoire Cipher', puzzleContent);
    }

    checkCode2() {
        const answer = document.getElementById('code2-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('code2-feedback');
        
        if (answer === 'woe') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ WOE! Perfect! (W=23, O=15, E=5) The grimoire opens!';
            this.puzzlesSolved.code2 = true;
            game.addClue('Code 2: 23-15-5 = WOE (Wednesday\'s favorite word!)');
            game.addInventoryItem('Dark Grimoire', '📖');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Incorrect. Convert each number to its letter: 23→W, 15→O, 5→E';
        }
    }

    // PATTERN PUZZLE - Moon Phases
    examinePattern() {
        if (this.puzzlesSolved.pattern) {
            game.showChronosMessage("The moon's pattern has been revealed!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    The moon phases follow a pattern. Select the correct next phase:
                    <br><br>
                    <strong style="font-size: 1.3rem;">🌑 → 🌒 → 🌓 → 🌔 → ?</strong>
                </p>

                <div class="puzzle-grid" style="grid-template-columns: repeat(3, 1fr); margin: 20px 0;">
                    <div class="puzzle-option" onclick="wednesdayRoom.selectPattern('🌕')">
                        🌕<br>Full Moon
                    </div>
                    <div class="puzzle-option" onclick="wednesdayRoom.selectPattern('🌖')">
                        🌖<br>Waning Gibbous
                    </div>
                    <div class="puzzle-option" onclick="wednesdayRoom.selectPattern('🌑')">
                        🌑<br>New Moon
                    </div>
                </div>

                <div id="pattern-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🌙 Moonlight Mystery', puzzleContent);
    }

    selectPattern(choice) {
        const feedback = document.getElementById('pattern-feedback');
        
        if (choice === '🌕') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! The sequence goes from New to Full Moon!';
            this.puzzlesSolved.pattern = true;
            game.addClue('Pattern: Moon phases - New → Waxing → Full');
            game.addInventoryItem('Moon Phase', '🌕');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. Think about the moon growing fuller...';
        }
    }

    // LOGIC PUZZLE - Masquerade
    examineLogic() {
        if (this.puzzlesSolved.logic) {
            game.showChronosMessage("The masquerade mystery is solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    Three masked figures stand before you. One always tells the truth, one always lies, and one alternates.
                    <br><br>
                    <strong>Red mask says:</strong> "Blue is the liar."<br>
                    <strong>Blue mask says:</strong> "Green alternates."<br>
                    <strong>Green mask says:</strong> "I am the truth-teller."<br>
                    <br>
                    Who is the truth-teller?
                </p>

                <div class="puzzle-grid" style="grid-template-columns: repeat(3, 1fr); margin: 20px 0;">
                    <div class="puzzle-option" onclick="wednesdayRoom.selectLogic('red')">
                        🎭<br><span style="color: #ff0000;">Red</span>
                    </div>
                    <div class="puzzle-option" onclick="wednesdayRoom.selectLogic('blue')">
                        🎭<br><span style="color: #0000ff;">Blue</span>
                    </div>
                    <div class="puzzle-option" onclick="wednesdayRoom.selectLogic('green')">
                        🎭<br><span style="color: #00ff00;">Green</span>
                    </div>
                </div>

                <div id="logic-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🎭 Masquerade Logic', puzzleContent);
    }

    selectLogic(choice) {
        const feedback = document.getElementById('logic-feedback');
        
        if (choice === 'blue') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Brilliant! Blue is the truth-teller! Red is the liar (lying about Blue), and Green alternates (lying this time)!';
            this.puzzlesSolved.logic = true;
            game.addClue('Logic: Blue tells truth, Red lies, Green alternates');
            game.addInventoryItem('Truth Mask', '🎭');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong. Work backwards: if Green were truthful, who would be the liar?';
        }
    }

    // WORDPLAY PUZZLE
    examineWordplay() {
        if (this.puzzlesSolved.wordplay) {
            game.showChronosMessage("The wordplay has been solved!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    A clever inscription reads:
                    <br><br>
                    <strong style="font-size: 1.1rem; color: #9370db;">
                    "Take away my first letter, I sound the same.<br>
                    Take away my last letter, I sound the same.<br>
                    Take away all my letters, and I STILL sound the same!<br>
                    What word am I?"</strong>
                </p>

                <div class="puzzle-input-group">
                    <input type="text" id="wordplay-answer" class="puzzle-input" 
                           placeholder="Type your answer..." />
                </div>

                <button class="puzzle-submit" onclick="wednesdayRoom.checkWordplay()">Submit Answer</button>
                <div id="wordplay-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🗝️ The Key of Words', puzzleContent);
    }

    checkWordplay() {
        const answer = document.getElementById('wordplay-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('wordplay-feedback');
        
        if (answer === 'empty' || answer === 'mt') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Clever! EMPTY → MPTY → EMPT → MT → they all sound like "empty"!';
            this.puzzlesSolved.wordplay = true;
            game.addClue('Wordplay: EMPTY sounds the same however you spell it!');
            game.addInventoryItem('Word Key', '🗝️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not right. Think of a word that sounds like letters when shortened...';
        }
    }

    // SEQUENCE PUZZLE - Clockwork
    examineSequence() {
        if (this.puzzlesSolved.sequence) {
            game.showChronosMessage("The clockwork sequence is complete!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    The broken clock shows these numbers in sequence:
                    <br><br>
                    <strong style="font-size: 1.2rem;">1, 1, 2, 3, 5, 8, 13, ?</strong>
                    <br><br>
                    What number comes next?
                    <br>
                    <em style="font-size: 0.9rem;">(Hint: Each number has a special relationship to the two before it...)</em>
                </p>

                <div style="text-align: center; margin: 20px 0; font-size: 3rem;">⏰</div>

                <div class="puzzle-input-group">
                    <input type="number" id="sequence-answer" class="puzzle-input" 
                           placeholder="Enter the next number..." />
                </div>

                <button class="puzzle-submit" onclick="wednesdayRoom.checkSequence()">Submit Answer</button>
                <div id="sequence-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('⏰ Clockwork Sequence', puzzleContent);
    }

    checkSequence() {
        const answer = parseInt(document.getElementById('sequence-answer').value);
        const feedback = document.getElementById('sequence-feedback');
        
        if (answer === 21) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! The Fibonacci sequence: 8 + 13 = 21!';
            this.puzzlesSolved.sequence = true;
            game.addClue('Sequence: Fibonacci - each number is the sum of the previous two');
            game.addInventoryItem('Clockwork Gear', '⏰');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. Try adding the last two numbers together...';
        }
    }

    updatePuzzleStatus() {
        if (this.puzzlesSolved.riddle1) {
            document.getElementById('status-riddle1').innerHTML = '🕯️ Candle Riddle: ✅';
        }
        if (this.puzzlesSolved.riddle2) {
            document.getElementById('status-riddle2').innerHTML = '🦇 Bat\'s Riddle: ✅';
        }
        if (this.puzzlesSolved.code1) {
            document.getElementById('status-code1').innerHTML = '🕷️ Spider Code: ✅';
        }
        if (this.puzzlesSolved.code2) {
            document.getElementById('status-code2').innerHTML = '📖 Grimoire Code: ✅';
        }
        if (this.puzzlesSolved.pattern) {
            document.getElementById('status-pattern').innerHTML = '🌙 Moon Pattern: ✅';
        }
        if (this.puzzlesSolved.logic) {
            document.getElementById('status-logic').innerHTML = '🎭 Masquerade: ✅';
        }
        if (this.puzzlesSolved.wordplay) {
            document.getElementById('status-wordplay').innerHTML = '🗝️ Wordplay: ✅';
        }
        if (this.puzzlesSolved.sequence) {
            document.getElementById('status-sequence').innerHTML = '⏰ Sequence: ✅';
        }
    }

    checkCompletion() {
        const allSolved = Object.values(this.puzzlesSolved).every(v => v === true);
        
        if (allSolved && !this.isRainbow) {
            this.isRainbow = true;
            this.applyRainbowTheme();
            
            const portalObj = document.getElementById('portal-object');
            portalObj.style.opacity = '1';
            portalObj.style.cursor = 'pointer';
            portalObj.style.background = 'linear-gradient(135deg, #ff6b9d, #c06c84, #6c5b7b, #355c7d, #2a9d8f)';
            portalObj.style.border = '3px solid gold';
            portalObj.onclick = () => this.openPortal();
            
            game.showChronosMessage("🎉 WOE! You've solved all 8 puzzles! The darkness transforms into RAINBOW BRILLIANCE! Click the portal to escape!");
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
            "Start with the riddles - the candle asks about something that shows places, and the bat asks about time!",
            "For the spider's code: each number is double the previous. For the grimoire: convert numbers to alphabet letters!",
            "The moon phases go from new (dark) to full (bright). The masquerade: work backwards from the statements!",
            "The wordplay is about a word that sounds like letters. The sequence adds the two previous numbers!"
        ];
        return hints[hintNumber - 1] || "Woe! You're doing wonderfully! Keep solving those dark mysteries!";
    }
}

// Create global instance
const wednesdayRoom = new WednesdayRoom();