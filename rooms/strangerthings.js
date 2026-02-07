// Stranger Things - Escape the Upside Down
class StrangerThingsRoom {
    constructor() {
        this.puzzlesSolved = {
            riddle1: false,
            riddle2: false,
            riddle3: false,
            riddle4: false,
            code1: false,
            code2: false,
            emoji1: false,
            emoji2: false
        };
        this.welcomeMessage = "Welcome to Hawkins! You've been trapped in the Upside Down. The Mind Flayer's presence grows stronger... Solve all 8 puzzles to escape through the portal before it's too late!";
        this.successMessage = "Friends don't lie... and you didn't! You've escaped the Upside Down! Eleven would be proud!";
    }

    init() {
        document.getElementById('room-title').textContent = '🔴 Stranger Things - The Upside Down';
        this.renderRoom();
        this.applyUpsideDownTheme();
    }

    applyUpsideDownTheme() {
        const roomView = document.getElementById('room-view');
        roomView.style.background = 'radial-gradient(ellipse at center, #1a0000 0%, #000000 100%)';
        roomView.style.color = '#ff6b6b';
        roomView.style.position = 'relative';
        
        // Add animated webbing overlay
        const webbing = document.createElement('div');
        webbing.className = 'upside-down-webbing';
        webbing.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                repeating-linear-gradient(90deg, transparent, transparent 98px, rgba(0,0,0,0.4) 98px, rgba(0,0,0,0.4) 100px),
                repeating-linear-gradient(0deg, transparent, transparent 98px, rgba(0,0,0,0.4) 98px, rgba(0,0,0,0.4) 100px);
            pointer-events: none;
            z-index: 1;
        `;
        
        // Add glowing portal effects
        const portalGlow = document.createElement('div');
        portalGlow.className = 'portal-glow';
        portalGlow.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(255,0,0,0.3) 0%, transparent 70%);
            border-radius: 50%;
            animation: portal-pulse 3s ease-in-out infinite;
            pointer-events: none;
            z-index: 0;
        `;
        
        if (!document.querySelector('.upside-down-webbing')) {
            roomView.appendChild(webbing);
            roomView.appendChild(portalGlow);
        }
    }

    renderRoom() {
        const roomView = document.getElementById('room-view');
        roomView.innerHTML = `
            <style>
                @keyframes portal-pulse {
                    0%, 100% { 
                        opacity: 0.4;
                        transform: translate(-50%, -50%) scale(1);
                    }
                    50% { 
                        opacity: 0.7;
                        transform: translate(-50%, -50%) scale(1.1);
                    }
                }
                
                @keyframes flicker {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.8; }
                    75% { opacity: 0.9; }
                }
                
                .stranger-things-object {
                    background: rgba(139, 0, 0, 0.3) !important;
                    border: 2px solid #8b0000 !important;
                    box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
                    animation: flicker 4s infinite;
                    position: relative;
                    z-index: 2;
                }
                
                .stranger-things-object:hover {
                    box-shadow: 0 0 30px rgba(255, 0, 0, 0.6);
                    border-color: #ff0000 !important;
                }
            </style>

            <div class="room-intro" style="text-align: center; margin-bottom: 30px; position: relative; z-index: 2;">
                <h2 style="color: #ff0000; margin-bottom: 15px; text-shadow: 0 0 10px #ff0000; animation: flicker 3s infinite;">🔴 The Upside Down 🔴</h2>
                <p style="font-size: 1.1rem; line-height: 1.6; color: #ffaaaa;">
                    You've crossed into the Upside Down - a dark mirror of Hawkins. Strange particles float through the air,
                    and the Mind Flayer's presence looms. Black tendrils web across glowing red portals.
                    <br><br>
                    <em style="color: #ff6666;">"Friends don't lie... but these puzzles might try to trick you."</em>
                </p>
            </div>

            <div class="room-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; position: relative; z-index: 2;">
                <div class="room-object stranger-things-object" onclick="strangerThingsRoom.examineRiddle1()">
                    <h3>🎄 Christmas Lights</h3>
                    <p>Blinking lights spell out a mysterious riddle...</p>
                </div>

                <div class="room-object stranger-things-object" onclick="strangerThingsRoom.examineRiddle2()">
                    <h3>📻 Dustin's Radio</h3>
                    <p>Static crackles with a cryptic message...</p>
                </div>

                <div class="room-object stranger-things-object" onclick="strangerThingsRoom.examineRiddle3()">
                    <h3>🎮 Arcade Machine</h3>
                    <p>A puzzle glows on the Dig Dug screen...</p>
                </div>

                <div class="room-object stranger-things-object" onclick="strangerThingsRoom.examineRiddle4()">
                    <h3>🧇 Eleven's Waffles</h3>
                    <p>Waffles arranged in a puzzling pattern...</p>
                </div>

                <div class="room-object stranger-things-object" onclick="strangerThingsRoom.examineCode1()">
                    <h3>🔢 Lab Keypad</h3>
                    <p>The Hawkins Lab door needs a code...</p>
                </div>

                <div class="room-object stranger-things-object" onclick="strangerThingsRoom.examineCode2()">
                    <h3>🔐 Cipher Wheel</h3>
                    <p>Nancy's investigation notes reveal a code...</p>
                </div>

                <div class="room-object stranger-things-object" onclick="strangerThingsRoom.examineEmoji1()">
                    <h3>💡 Message Board</h3>
                    <p>Emoji symbols hide a secret message...</p>
                </div>

                <div class="room-object stranger-things-object" onclick="strangerThingsRoom.examineEmoji2()">
                    <h3>🎯 The Party's Code</h3>
                    <p>The kids use emojis to communicate...</p>
                </div>

                <div class="room-object" id="portal-object" style="opacity: 0.3; cursor: not-allowed; background: rgba(139, 0, 0, 0.2); border: 2px solid #444; position: relative; z-index: 2;">
                    <h3>🌀 Portal Home</h3>
                    <p>A swirling red portal... Complete all 8 puzzles to activate it.</p>
                </div>
            </div>

            <div id="puzzle-status" style="margin-top: 30px; padding: 20px; background: rgba(139, 0, 0, 0.2); border-radius: 10px; border: 2px solid #8b0000; position: relative; z-index: 2;">
                <h3 style="text-align: center; margin-bottom: 15px; color: #ff6666;">🔴 Escape Progress 🔴</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; font-size: 0.9rem;">
                    <div id="status-riddle1" class="puzzle-status-item">🎄 Lights Riddle: ❌</div>
                    <div id="status-riddle2" class="puzzle-status-item">📻 Radio Riddle: ❌</div>
                    <div id="status-riddle3" class="puzzle-status-item">🎮 Arcade Riddle: ❌</div>
                    <div id="status-riddle4" class="puzzle-status-item">🧇 Waffle Riddle: ❌</div>
                    <div id="status-code1" class="puzzle-status-item">🔢 Lab Code: ❌</div>
                    <div id="status-code2" class="puzzle-status-item">🔐 Cipher Code: ❌</div>
                    <div id="status-emoji1" class="puzzle-status-item">💡 Emoji Board: ❌</div>
                    <div id="status-emoji2" class="puzzle-status-item">🎯 Party Code: ❌</div>
                </div>
            </div>
        `;
    }

    // RIDDLE 1 - Christmas Lights
    examineRiddle1() {
        if (this.puzzlesSolved.riddle1) {
            game.showChronosMessage("The lights have already shared their message!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    The Christmas lights blink in a pattern, spelling out this riddle:
                    <br><br>
                    <strong style="font-size: 1.1rem; color: #ff4444;">
                    "I'm always running but never walk,<br>
                    Often murmur but never talk,<br>
                    Have a bed but never sleep,<br>
                    Have a mouth but never eat.<br>
                    What am I?"</strong>
                </p>

                <div class="puzzle-input-group">
                    <input type="text" id="riddle1-answer" class="puzzle-input" 
                           placeholder="Type your answer..." />
                </div>

                <button class="puzzle-submit" onclick="strangerThingsRoom.checkRiddle1()">Submit Answer</button>
                <div id="riddle1-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🎄 Christmas Lights Message', puzzleContent);
    }

    checkRiddle1() {
        const answer = document.getElementById('riddle1-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle1-feedback');
        
        if (answer === 'river' || answer === 'a river') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! A river! The lights glow brighter!';
            this.puzzlesSolved.riddle1 = true;
            game.addClue('Riddle 1: A river runs, murmurs, has a bed and mouth');
            game.addInventoryItem('Light Bulb', '💡');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. Think about something in nature that flows...';
        }
    }

    // RIDDLE 2 - Dustin's Radio
    examineRiddle2() {
        if (this.puzzlesSolved.riddle2) {
            game.showChronosMessage("You've already decoded the radio message!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    Through the static, Dustin's voice crackles with a riddle:
                    <br><br>
                    <strong style="font-size: 1.1rem; color: #ff4444;">
                    "The more you take away from me,<br>
                    The bigger I become.<br>
                    What am I?"</strong>
                    <br><br>
                    <em style="font-size: 0.9rem;">(Hint: Think about digging...)</em>
                </p>

                <div class="puzzle-input-group">
                    <input type="text" id="riddle2-answer" class="puzzle-input" 
                           placeholder="Type your answer..." />
                </div>

                <button class="puzzle-submit" onclick="strangerThingsRoom.checkRiddle2()">Submit Answer</button>
                <div id="riddle2-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('📻 Radio Transmission', puzzleContent);
    }

    checkRiddle2() {
        const answer = document.getElementById('riddle2-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle2-feedback');
        
        if (answer === 'hole' || answer === 'a hole') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! A hole! The radio signal clears!';
            this.puzzlesSolved.riddle2 = true;
            game.addClue('Riddle 2: The more you dig, the bigger the hole');
            game.addInventoryItem('Radio', '📻');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not right. What gets bigger when you remove material?';
        }
    }

    // RIDDLE 3 - Arcade Machine
    examineRiddle3() {
        if (this.puzzlesSolved.riddle3) {
            game.showChronosMessage("Game over! You already beat this puzzle!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    The Dig Dug screen displays a riddle:
                    <br><br>
                    <strong style="font-size: 1.1rem; color: #ff4444;">
                    "I have keys but no locks,<br>
                    I have space but no room,<br>
                    You can enter but can't go inside.<br>
                    What am I?"</strong>
                </p>

                <div style="text-align: center; margin: 20px 0; font-size: 2rem;">🎮</div>

                <div class="puzzle-input-group">
                    <input type="text" id="riddle3-answer" class="puzzle-input" 
                           placeholder="Type your answer..." />
                </div>

                <button class="puzzle-submit" onclick="strangerThingsRoom.checkRiddle3()">Submit Answer</button>
                <div id="riddle3-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🎮 Arcade Puzzle', puzzleContent);
    }

    checkRiddle3() {
        const answer = document.getElementById('riddle3-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle3-feedback');
        
        if (answer === 'keyboard' || answer === 'a keyboard') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ High score! A keyboard! Game complete!';
            this.puzzlesSolved.riddle3 = true;
            game.addClue('Riddle 3: A keyboard has keys, space bar, and enter key');
            game.addInventoryItem('Joystick', '🕹️');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Game over! Think about something you type on...';
        }
    }

    // RIDDLE 4 - Eleven's Waffles
    examineRiddle4() {
        if (this.puzzlesSolved.riddle4) {
            game.showChronosMessage("Eleven already ate these waffles... I mean solved this puzzle!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    Eleven has arranged her Eggo waffles to spell out a riddle:
                    <br><br>
                    <strong style="font-size: 1.1rem; color: #ff4444;">
                    "What has 13 hearts but no other organs?"</strong>
                    <br><br>
                    <em style="font-size: 0.9rem;">(Hint: Think about games, not bodies!)</em>
                </p>

                <div style="text-align: center; margin: 20px 0; font-size: 3rem;">🧇</div>

                <div class="puzzle-input-group">
                    <input type="text" id="riddle4-answer" class="puzzle-input" 
                           placeholder="Type your answer..." />
                </div>

                <button class="puzzle-submit" onclick="strangerThingsRoom.checkRiddle4()">Submit Answer</button>
                <div id="riddle4-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🧇 Waffle Code', puzzleContent);
    }

    checkRiddle4() {
        const answer = document.getElementById('riddle4-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('riddle4-feedback');
        
        if (answer.includes('deck') || answer.includes('cards') || answer === 'deck of cards') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Eggo-cellent! A deck of cards (13 hearts suit)!';
            this.puzzlesSolved.riddle4 = true;
            game.addClue('Riddle 4: A deck of cards has 13 hearts (plus other suits)');
            game.addInventoryItem('Eggo Waffle', '🧇');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Nope! Think about card games...';
        }
    }

    // CODE 1 - Lab Keypad
    examineCode1() {
        if (this.puzzlesSolved.code1) {
            game.showChronosMessage("The lab door is already unlocked!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    The Hawkins Laboratory door has a numeric keypad. A note reads:
                    <br><br>
                    <strong>"Eleven's favorite number × Will's D&D character level"</strong>
                    <br><br>
                    <em style="font-size: 0.9rem;">Hint: Eleven's favorite number is obvious! Will the Wise is a level 10 cleric.</em>
                </p>

                <div style="margin: 20px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                    <p style="text-align: center; font-size: 1.2rem;">11 × 10 = ?</p>
                </div>

                <div class="puzzle-input-group">
                    <input type="number" id="code1-answer" class="puzzle-input" 
                           placeholder="Enter the code..." />
                </div>

                <button class="puzzle-submit" onclick="strangerThingsRoom.checkCode1()">Unlock Door</button>
                <div id="code1-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🔢 Hawkins Lab Keypad', puzzleContent);
    }

    checkCode1() {
        const answer = parseInt(document.getElementById('code1-answer').value);
        const feedback = document.getElementById('code1-feedback');
        
        if (answer === 110) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Access granted! 11 × 10 = 110! The door opens!';
            this.puzzlesSolved.code1 = true;
            game.addClue('Code 1: Eleven\'s number (11) × Will\'s level (10) = 110');
            game.addInventoryItem('Key Card', '🔑');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Access denied! Check your math...';
        }
    }

    // CODE 2 - Cipher Wheel
    examineCode2() {
        if (this.puzzlesSolved.code2) {
            game.showChronosMessage("The cipher has been cracked!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    Nancy's investigation notes show a Caesar cipher. Each letter is shifted forward by 3:
                    <br><br>
                    <strong style="color: #ff4444;">Encrypted message: "UXQ"</strong>
                    <br><br>
                    Decrypt it! (Shift each letter back 3 positions in the alphabet)
                    <br>
                    <em style="font-size: 0.9rem;">Example: D → A, E → B, F → C</em>
                </p>

                <div style="margin: 15px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                    <small>Alphabet: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</small>
                </div>

                <div class="puzzle-input-group">
                    <input type="text" id="code2-answer" class="puzzle-input" 
                           placeholder="Type the decrypted word..." />
                </div>

                <button class="puzzle-submit" onclick="strangerThingsRoom.checkCode2()">Decrypt Message</button>
                <div id="code2-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🔐 Nancy\'s Cipher', puzzleContent);
    }

    checkCode2() {
        const answer = document.getElementById('code2-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('code2-feedback');
        
        if (answer === 'run') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Decrypted! U→R, X→U, Q→N = RUN! Smart thinking!';
            this.puzzlesSolved.code2 = true;
            game.addClue('Code 2: Caesar cipher shifted by 3: UXQ → RUN');
            game.addInventoryItem('Cipher Wheel', '🔐');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong! Shift each letter back 3: U(-3)=R, X(-3)=U, Q(-3)=N';
        }
    }

    // EMOJI PUZZLE 1 - Message Board
    examineEmoji1() {
        if (this.puzzlesSolved.emoji1) {
            game.showChronosMessage("You've already decoded the emoji message!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    A message board shows emoji symbols. Decode the pattern:
                    <br><br>
                    <strong style="font-size: 1.5rem;">👁️ + 🌊 = ?</strong>
                    <br><br>
                    What word do these emojis represent when combined?
                </p>

                <div style="margin: 20px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                    <p>Hint: Sound it out! 👁️ = "eye", 🌊 = "wave"</p>
                </div>

                <div class="puzzle-input-group">
                    <input type="text" id="emoji1-answer" class="puzzle-input" 
                           placeholder="Type the combined word..." />
                </div>

                <button class="puzzle-submit" onclick="strangerThingsRoom.checkEmoji1()">Submit Answer</button>
                <div id="emoji1-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('💡 Emoji Message Board', puzzleContent);
    }

    checkEmoji1() {
        const answer = document.getElementById('emoji1-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('emoji1-feedback');
        
        if (answer === 'i waive' || answer === 'i wave') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Brilliant! Eye + Wave = "I waive" (or I wave)!';
            this.puzzlesSolved.emoji1 = true;
            game.addClue('Emoji 1: 👁️🌊 = I waive/wave');
            game.addInventoryItem('Message', '💬');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not right. Say the emoji names out loud: eye... wave...';
        }
    }

    // EMOJI PUZZLE 2 - The Party's Code
    examineEmoji2() {
        if (this.puzzlesSolved.emoji2) {
            game.showChronosMessage("The Party's code is already cracked!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    Mike, Lucas, Dustin, and Will use emojis to communicate. Decode this:
                    <br><br>
                    <strong style="font-size: 1.5rem;">🐝 + 🍃 = ?</strong>
                    <br><br>
                    What word do these emojis spell out?
                </p>

                <div style="margin: 20px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                    <p>Hint: Say them together! 🐝 = "bee", 🍃 = "leaf"</p>
                </div>

                <div class="puzzle-input-group">
                    <input type="text" id="emoji2-answer" class="puzzle-input" 
                           placeholder="Type the word..." />
                </div>

                <button class="puzzle-submit" onclick="strangerThingsRoom.checkEmoji2()">Submit Answer</button>
                <div id="emoji2-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('🎯 The Party\'s Code', puzzleContent);
    }

    checkEmoji2() {
        const answer = document.getElementById('emoji2-answer').value.toLowerCase().trim();
        const feedback = document.getElementById('emoji2-feedback');
        
        if (answer === 'belief' || answer === 'believe') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! Bee + Leaf = "Belief" (or Believe)! The Party approves!';
            this.puzzlesSolved.emoji2 = true;
            game.addClue('Emoji 2: 🐝🍃 = Belief/Believe');
            game.addInventoryItem('Walkie Talkie', '📱');
            
            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Wrong! Sound it out: bee... leaf... bee-leaf!';
        }
    }

    updatePuzzleStatus() {
        if (this.puzzlesSolved.riddle1) {
            document.getElementById('status-riddle1').innerHTML = '🎄 Lights Riddle: ✅';
        }
        if (this.puzzlesSolved.riddle2) {
            document.getElementById('status-riddle2').innerHTML = '📻 Radio Riddle: ✅';
        }
        if (this.puzzlesSolved.riddle3) {
            document.getElementById('status-riddle3').innerHTML = '🎮 Arcade Riddle: ✅';
        }
        if (this.puzzlesSolved.riddle4) {
            document.getElementById('status-riddle4').innerHTML = '🧇 Waffle Riddle: ✅';
        }
        if (this.puzzlesSolved.code1) {
            document.getElementById('status-code1').innerHTML = '🔢 Lab Code: ✅';
        }
        if (this.puzzlesSolved.code2) {
            document.getElementById('status-code2').innerHTML = '🔐 Cipher Code: ✅';
        }
        if (this.puzzlesSolved.emoji1) {
            document.getElementById('status-emoji1').innerHTML = '💡 Emoji Board: ✅';
        }
        if (this.puzzlesSolved.emoji2) {
            document.getElementById('status-emoji2').innerHTML = '🎯 Party Code: ✅';
        }
    }

    checkCompletion() {
        const allSolved = Object.values(this.puzzlesSolved).every(v => v === true);
        
        if (allSolved) {
            const portalObj = document.getElementById('portal-object');
            portalObj.style.opacity = '1';
            portalObj.style.cursor = 'pointer';
            portalObj.style.background = 'radial-gradient(circle, rgba(255,0,0,0.6) 0%, rgba(139,0,0,0.3) 100%)';
            portalObj.style.border = '3px solid #ff0000';
            portalObj.style.boxShadow = '0 0 40px rgba(255,0,0,0.8)';
            portalObj.style.animation = 'portal-pulse 2s infinite';
            portalObj.onclick = () => this.openPortal();
            
            game.showChronosMessage("🎉 Friends don't lie! All puzzles solved! The portal to the real world is open! Click it to escape!");
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
            "Start with the riddles! The lights ask about something that runs and has a bed. The radio asks what gets bigger when you remove from it!",
            "For the arcade: think about computer keyboards. For waffles: a deck of cards has 13 hearts!",
            "The lab code is simple math: 11 × 10. Nancy's cipher shifts letters back by 3: U→R, X→U, Q→N!",
            "The emoji puzzles are rebus puzzles - say the emoji names out loud: eye+wave, bee+leaf!"
        ];
        return hints[hintNumber - 1] || "You've got this! Friends don't lie, and you're close to escaping!";
    }
}

// Create global instance
const strangerThingsRoom = new StrangerThingsRoom();
