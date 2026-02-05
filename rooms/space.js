// Advanced Space Race Room - Mission Control Lockdown
// 8 challenging puzzles with cool graphics for ages 12-18+
class SpaceRoom {
    constructor() {
        this.difficulty = 'teen'; // Can be 'teen' or 'adult'
        this.puzzlesSolved = {
            navigation: false,
            orbital: false,
            cryptography: false,
            systems: false,
            trajectory: false,
            communication: false,
            power: false,
            launch: false
        };
        this.totalPuzzles = 8;
        this.welcomeMessage = "Welcome to Advanced Mission Control, 1969! Prepare for complex space calculations and real NASA-level challenges.";
        this.successMessage = "Outstanding! You've demonstrated exceptional problem-solving skills worthy of a NASA engineer!";
    }

    init() {
        document.getElementById('room-title').textContent = '🚀 Advanced Space Race - Mission Control';
        this.renderRoom();
    }

    renderRoom() {
        const roomView = document.getElementById('room-view');
        const solvedCount = Object.values(this.puzzlesSolved).filter(v => v).length;
        
        roomView.innerHTML = `
            <div class="room-intro" style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #ffd700; margin-bottom: 15px;">NASA Mission Control - Critical Systems Failure</h2>
                <p style="font-size: 1.1rem; line-height: 1.6;">
                    Multiple systems have failed during a critical Apollo mission. You must restore all 8 systems
                    using advanced mathematics, physics, and problem-solving. Each system becomes progressively more complex.
                </p>
                <div style="margin-top: 20px; padding: 15px; background: rgba(255,0,0,0.2); border: 2px solid #ff0000; border-radius: 10px;">
                    <strong>⚠️ ADVANCED DIFFICULTY</strong><br>
                    <span style="font-size: 0.9rem;">Systems Restored: ${solvedCount}/${this.totalPuzzles}</span>
                </div>
            </div>

            <div class="room-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
                <div class="room-object ${this.puzzlesSolved.navigation ? 'solved' : ''}" 
                     onclick="spaceRoom.examineNavigation()" style="${this.puzzlesSolved.navigation ? 'background: linear-gradient(135deg, rgba(0,255,0,0.2), rgba(0,255,0,0.05));' : ''}">
                    <h3>🧭 Navigation System</h3>
                    <p>Level 1: Vector calculations</p>
                    <div class="puzzle-difficulty">⭐⭐</div>
                </div>

                <div class="room-object ${this.puzzlesSolved.orbital ? 'solved' : ''}" 
                     onclick="spaceRoom.examineOrbital()" style="${this.puzzlesSolved.orbital ? 'background: linear-gradient(135deg, rgba(0,255,0,0.2), rgba(0,255,0,0.05));' : ''}">
                    <h3>🛰️ Orbital Mechanics</h3>
                    <p>Level 2: Orbital velocity</p>
                    <div class="puzzle-difficulty">⭐⭐⭐</div>
                </div>

                <div class="room-object ${this.puzzlesSolved.cryptography ? 'solved' : ''}" 
                     onclick="spaceRoom.examineCryptography()" style="${this.puzzlesSolved.cryptography ? 'background: linear-gradient(135deg, rgba(0,255,0,0.2), rgba(0,255,0,0.05));' : ''}">
                    <h3>🔐 Cryptography</h3>
                    <p>Level 3: Caesar cipher</p>
                    <div class="puzzle-difficulty">⭐⭐⭐</div>
                </div>

                <div class="room-object ${this.puzzlesSolved.systems ? 'solved' : ''}" 
                     onclick="spaceRoom.examineSystems()" style="${this.puzzlesSolved.systems ? 'background: linear-gradient(135deg, rgba(0,255,0,0.2), rgba(0,255,0,0.05));' : ''}">
                    <h3>⚡ Life Support</h3>
                    <p>Level 4: Resource optimization</p>
                    <div class="puzzle-difficulty">⭐⭐⭐⭐</div>
                </div>

                <div class="room-object ${this.puzzlesSolved.trajectory ? 'solved' : ''}" 
                     onclick="spaceRoom.examineTrajectory()" style="${this.puzzlesSolved.trajectory ? 'background: linear-gradient(135deg, rgba(0,255,0,0.2), rgba(0,255,0,0.05));' : ''}">
                    <h3>📐 Trajectory</h3>
                    <p>Level 5: Projectile physics</p>
                    <div class="puzzle-difficulty">⭐⭐⭐⭐</div>
                </div>

                <div class="room-object ${this.puzzlesSolved.communication ? 'solved' : ''}" 
                     onclick="spaceRoom.examineCommunication()" style="${this.puzzlesSolved.communication ? 'background: linear-gradient(135deg, rgba(0,255,0,0.2), rgba(0,255,0,0.05));' : ''}">
                    <h3>📡 Communication</h3>
                    <p>Level 6: Signal delay</p>
                    <div class="puzzle-difficulty">⭐⭐⭐⭐</div>
                </div>

                <div class="room-object ${this.puzzlesSolved.power ? 'solved' : ''}" 
                     onclick="spaceRoom.examinePower()" style="${this.puzzlesSolved.power ? 'background: linear-gradient(135deg, rgba(0,255,0,0.2), rgba(0,255,0,0.05));' : ''}">
                    <h3>🔋 Power Grid</h3>
                    <p>Level 7: Circuit analysis</p>
                    <div class="puzzle-difficulty">⭐⭐⭐⭐⭐</div>
                </div>

                <div class="room-object ${this.puzzlesSolved.launch ? 'solved' : ''}" 
                     onclick="spaceRoom.examineLaunch()" style="${this.puzzlesSolved.launch ? 'background: linear-gradient(135deg, rgba(0,255,0,0.2), rgba(0,255,0,0.05));' : ''}">
                    <h3>🚀 Launch</h3>
                    <p>Level 8: Final integration</p>
                    <div class="puzzle-difficulty">⭐⭐⭐⭐⭐</div>
                </div>
            </div>

            <div id="puzzle-status" style="margin-top: 30px;">
                <canvas id="progress-canvas" width="800" height="100" style="max-width: 100%; border-radius: 10px;"></canvas>
            </div>
        `;

        this.drawProgressBar();
    }

    drawProgressBar() {
        const canvas = document.getElementById('progress-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        ctx.clearRect(0, 0, width, height);
        
        // Background
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, width, height);
        
        // Progress bar
        const barWidth = width - 40;
        const barHeight = 40;
        const barX = 20;
        const barY = 30;
        
        ctx.strokeStyle = '#00ff00';
        ctx.lineWidth = 2;
        ctx.strokeRect(barX, barY, barWidth, barHeight);
        
        const solvedCount = Object.values(this.puzzlesSolved).filter(v => v).length;
        const progress = solvedCount / this.totalPuzzles;
        
        const gradient = ctx.createLinearGradient(barX, barY, barX + barWidth, barY);
        gradient.addColorStop(0, '#00ff00');
        gradient.addColorStop(0.5, '#00ffff');
        gradient.addColorStop(1, '#0088ff');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(barX, barY, barWidth * progress, barHeight);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`SYSTEMS RESTORED: ${solvedCount}/${this.totalPuzzles}`, width / 2, 20);
        ctx.fillText(`${Math.round(progress * 100)}%`, width / 2, barY + barHeight / 2 + 6);
    }

    // PUZZLE 1: Navigation
    examineNavigation() {
        if (this.puzzlesSolved.navigation) {
            game.showChronosMessage("Navigation system online!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <h3 style="color: #00ff00; text-align: center;">🧭 NAVIGATION SYSTEM</h3>
                <p class="puzzle-description">
                    Calculate the spacecraft's final position using 3D vector math.
                </p>

                <div style="background: rgba(0,255,0,0.1); padding: 15px; border-radius: 10px; margin: 20px 0;">
                    <p><strong>📊 GIVEN:</strong></p>
                    <p>• Starting position: (0, 0, 0) km</p>
                    <p>• Velocity vector: (300, 400, 0) km/s</p>
                    <p>• Time: 10 seconds</p>
                    <p><strong>CALCULATE:</strong> Final position coordinates (x, y, z)</p>
                    <p style="font-size: 0.9rem; color: #888; margin-top: 10px;">
                        Formula: position = velocity × time
                    </p>
                </div>

                <div class="puzzle-input-group">
                    <input type="number" id="nav-x" class="puzzle-input" placeholder="X (km)" style="margin: 5px;" />
                    <input type="number" id="nav-y" class="puzzle-input" placeholder="Y (km)" style="margin: 5px;" />
                    <input type="number" id="nav-z" class="puzzle-input" placeholder="Z (km)" style="margin: 5px;" />
                </div>

                <button class="puzzle-submit" onclick="spaceRoom.checkNavigation()">Submit</button>
                <div id="nav-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('Navigation System', puzzleContent);
    }

    checkNavigation() {
        const x = parseFloat(document.getElementById('nav-x').value);
        const y = parseFloat(document.getElementById('nav-y').value);
        const z = parseFloat(document.getElementById('nav-z').value);
        const feedback = document.getElementById('nav-feedback');
        
        if (x === 3000 && y === 4000 && z === 0) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ CORRECT! Position: (3000, 4000, 0) km';
            this.puzzlesSolved.navigation = true;
            game.addClue('Navigation: (300×10, 400×10, 0×10)');
            game.addInventoryItem('Nav Computer', '🧭');
            setTimeout(() => { game.closePuzzle(); this.renderRoom(); }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Incorrect. Multiply each velocity component by time';
        }
    }

    // PUZZLE 2: Orbital Mechanics
    examineOrbital() {
        if (this.puzzlesSolved.orbital) {
            game.showChronosMessage("Orbital mechanics calculated!");
            return;
        }
        if (!this.puzzlesSolved.navigation) {
            game.showChronosMessage("⚠️ Complete Navigation first!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <h3 style="color: #00ffff; text-align: center;">🛰️ ORBITAL VELOCITY</h3>
                <p class="puzzle-description">
                    Calculate orbital velocity for a stable circular orbit.
                </p>

                <div style="background: rgba(0,255,255,0.1); padding: 15px; border-radius: 10px; margin: 20px 0;">
                    <p><strong>📊 FORMULA:</strong> v = √(GM/r)</p>
                    <p><strong>GIVEN:</strong></p>
                    <p>• G = 6.67 × 10⁻¹¹ m³/kg·s²</p>
                    <p>• M (Earth) = 5.97 × 10²⁴ kg</p>
                    <p>• r (orbit radius) = 6,771,000 m</p>
                    <p style="color: #888; font-size: 0.9rem;">
                        GM/r ≈ 5.88 × 10⁷, so v = √(5.88 × 10⁷)
                    </p>
                </div>

                <div class="puzzle-input-group">
                    <input type="number" id="orbital-velocity" class="puzzle-input" 
                           placeholder="Velocity in m/s (round to nearest 100)" />
                </div>

                <button class="puzzle-submit" onclick="spaceRoom.checkOrbital()">Calculate</button>
                <div id="orbital-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('Orbital Mechanics', puzzleContent);
    }

    checkOrbital() {
        const answer = parseFloat(document.getElementById('orbital-velocity').value);
        const feedback = document.getElementById('orbital-feedback');
        
        if (answer >= 7600 && answer <= 7700) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ CORRECT! v ≈ 7,668 m/s';
            this.puzzlesSolved.orbital = true;
            game.addClue('Orbital velocity: √(5.88×10⁷) ≈ 7,668 m/s');
            game.addInventoryItem('Orbit Data', '🛰️');
            setTimeout(() => { game.closePuzzle(); this.renderRoom(); }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Calculate √(5.88 × 10⁷)';
        }
    }

    // PUZZLE 3: Cryptography
    examineCryptography() {
        if (this.puzzlesSolved.cryptography) {
            game.showChronosMessage("Message decrypted!");
            return;
        }
        if (!this.puzzlesSolved.orbital) {
            game.showChronosMessage("⚠️ Complete Orbital Mechanics first!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <h3 style="color: #ff00ff; text-align: center;">🔐 CAESAR CIPHER</h3>
                <p class="puzzle-description">Decrypt the message from Apollo 11.</p>

                <div style="background: rgba(255,0,255,0.1); padding: 15px; border-radius: 10px; margin: 20px 0;">
                    <p style="font-size: 1.3rem; text-align: center; font-family: monospace; background: #000; padding: 15px;">
                        HDJOH KDV ODQGHG
                    </p>
                    <p style="margin-top: 15px;"><strong>CIPHER:</strong> Each letter shifted by 3</p>
                    <p style="font-size: 0.9rem; color: #888;">Example: A→D, H→E</p>
                </div>

                <div class="puzzle-input-group">
                    <input type="text" id="crypto-answer" class="puzzle-input" 
                           placeholder="Decrypted message" style="text-transform: uppercase;" />
                </div>

                <button class="puzzle-submit" onclick="spaceRoom.checkCryptography()">Decrypt</button>
                <div id="crypto-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('Encrypted Transmission', puzzleContent);
    }

    checkCryptography() {
        const answer = document.getElementById('crypto-answer').value.toUpperCase().trim();
        const feedback = document.getElementById('crypto-feedback');
        
        if (answer === 'EAGLE HAS LANDED' || answer === 'EAGLEHASLANDED') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ CORRECT! "EAGLE HAS LANDED"';
            this.puzzlesSolved.cryptography = true;
            game.addClue('Caesar cipher: Shift back 3 positions');
            game.addInventoryItem('Decrypt Key', '🔐');
            setTimeout(() => { game.closePuzzle(); this.renderRoom(); }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Shift each letter back 3: H→E, D→A...';
        }
    }

    // PUZZLE 4: Life Support
    examineSystems() {
        if (this.puzzlesSolved.systems) {
            game.showChronosMessage("Life support optimized!");
            return;
        }
        if (!this.puzzlesSolved.cryptography) {
            game.showChronosMessage("⚠️ Complete Cryptography first!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <h3 style="color: #00ff88; text-align: center;">⚡ LIFE SUPPORT</h3>
                <p class="puzzle-description">Can all 3 crew members be supported?</p>

                <div style="background: rgba(0,255,136,0.1); padding: 15px; border-radius: 10px; margin: 20px 0;">
                    <p><strong>RESOURCES AVAILABLE:</strong></p>
                    <p>• Oxygen: 120 L/hr</p>
                    <p>• Power: 300 W</p>
                    <p><strong>CREW NEEDS (per hour):</strong></p>
                    <p>• Commander: 25L O₂, 60W</p>
                    <p>• Pilot: 20L O₂, 50W</p>
                    <p>• Scientist: 30L O₂, 70W</p>
                </div>

                <div class="puzzle-input-group">
                    <select id="systems-answer" class="puzzle-input">
                        <option value="">Select...</option>
                        <option value="yes">YES - Sufficient</option>
                        <option value="no">NO - Insufficient</option>
                    </select>
                </div>

                <button class="puzzle-submit" onclick="spaceRoom.checkSystems()">Verify</button>
                <div id="systems-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('Life Support Systems', puzzleContent);
    }

    checkSystems() {
        const answer = document.getElementById('systems-answer').value;
        const feedback = document.getElementById('systems-feedback');
        
        if (answer === 'yes') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ CORRECT! 75L O₂ ✓, 180W ✓';
            this.puzzlesSolved.systems = true;
            game.addClue('Life support: 75L + 180W within limits');
            game.addInventoryItem('Life Support', '⚡');
            setTimeout(() => { game.closePuzzle(); this.renderRoom(); }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Calculate total: (25+20+30)L and (60+50+70)W';
        }
    }

    // PUZZLE 5: Trajectory
    examineTrajectory() {
        if (this.puzzlesSolved.trajectory) {
            game.showChronosMessage("Trajectory calculated!");
            return;
        }
        if (!this.puzzlesSolved.systems) {
            game.showChronosMessage("⚠️ Complete Life Support first!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <h3 style="color: #8800ff; text-align: center;">📐 PROJECTILE RANGE</h3>
                <p class="puzzle-description">Calculate debris range.</p>

                <div style="background: rgba(136,0,255,0.1); padding: 15px; border-radius: 10px; margin: 20px 0;">
                    <p><strong>📊 FORMULA:</strong> R = v²sin(2θ)/g</p>
                    <p><strong>GIVEN:</strong></p>
                    <p>• v = 100 m/s</p>
                    <p>• θ = 45°</p>
                    <p>• g = 10 m/s²</p>
                    <p style="color: #888; font-size: 0.9rem;">Hint: sin(90°) = 1</p>
                </div>

                <div class="puzzle-input-group">
                    <input type="number" id="trajectory-answer" class="puzzle-input" 
                           placeholder="Range in meters" />
                </div>

                <button class="puzzle-submit" onclick="spaceRoom.checkTrajectory()">Calculate</button>
                <div id="trajectory-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('Trajectory Calculation', puzzleContent);
    }

    checkTrajectory() {
        const answer = parseFloat(document.getElementById('trajectory-answer').value);
        const feedback = document.getElementById('trajectory-feedback');
        
        if (answer === 1000) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ CORRECT! Range = 1000m';
            this.puzzlesSolved.trajectory = true;
            game.addClue('Projectile: 10000×1/10 = 1000m');
            game.addInventoryItem('Trajectory', '📐');
            setTimeout(() => { game.closePuzzle(); this.renderRoom(); }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ R = 100²×1/10 = ?';
        }
    }

    // PUZZLE 6: Communication
    examineCommunication() {
        if (this.puzzlesSolved.communication) {
            game.showChronosMessage("Communication restored!");
            return;
        }
        if (!this.puzzlesSolved.trajectory) {
            game.showChronosMessage("⚠️ Complete Trajectory first!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <h3 style="color: #00aaff; text-align: center;">📡 SIGNAL DELAY</h3>
                <p class="puzzle-description">Calculate radio signal delay to Mars.</p>

                <div style="background: rgba(0,170,255,0.1); padding: 15px; border-radius: 10px; margin: 20px 0;">
                    <p><strong>📊 TIME = DISTANCE / SPEED</strong></p>
                    <p><strong>GIVEN:</strong></p>
                    <p>• Distance: 225 million km</p>
                    <p>• Speed of light: 300,000 km/s</p>
                    <p><strong>CALCULATE:</strong> Delay in minutes</p>
                </div>

                <div class="puzzle-input-group">
                    <input type="number" id="comm-answer" class="puzzle-input" 
                           placeholder="Minutes (decimal ok)" step="0.1" />
                </div>

                <button class="puzzle-submit" onclick="spaceRoom.checkCommunication()">Calculate</button>
                <div id="comm-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('Deep Space Network', puzzleContent);
    }

    checkCommunication() {
        const answer = parseFloat(document.getElementById('comm-answer').value);
        const feedback = document.getElementById('comm-feedback');
        
        if (Math.abs(answer - 12.5) < 0.5) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ CORRECT! 12.5 minutes';
            this.puzzlesSolved.communication = true;
            game.addClue('Signal: 225M÷300k = 750s = 12.5min');
            game.addInventoryItem('Comm Link', '📡');
            setTimeout(() => { game.closePuzzle(); this.renderRoom(); }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Divide 225M by 300k, then ÷60 for minutes';
        }
    }

    // PUZZLE 7: Power Grid
    examinePower() {
        if (this.puzzlesSolved.power) {
            game.showChronosMessage("Power grid online!");
            return;
        }
        if (!this.puzzlesSolved.communication) {
            game.showChronosMessage("⚠️ Complete Communication first!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <h3 style="color: #ffaa00; text-align: center;">🔋 OHM'S LAW</h3>
                <p class="puzzle-description">Calculate current in series circuit.</p>

                <div style="background: rgba(255,170,0,0.1); padding: 15px; border-radius: 10px; margin: 20px 0;">
                    <p><strong>📊 I = V / R</strong></p>
                    <p><strong>SERIES CIRCUIT:</strong></p>
                    <p>• Voltage: 24V</p>
                    <p>• R₁: 6Ω</p>
                    <p>• R₂: 10Ω</p>
                    <p>• R_total = R₁ + R₂</p>
                </div>

                <div class="puzzle-input-group">
                    <input type="number" id="power-answer" class="puzzle-input" 
                           placeholder="Current in amperes" step="0.1" />
                </div>

                <button class="puzzle-submit" onclick="spaceRoom.checkPower()">Calculate</button>
                <div id="power-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('Power Grid', puzzleContent);
    }

    checkPower() {
        const answer = parseFloat(document.getElementById('power-answer').value);
        const feedback = document.getElementById('power-feedback');
        
        if (Math.abs(answer - 1.5) < 0.1) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ CORRECT! I = 1.5A';
            this.puzzlesSolved.power = true;
            game.addClue('Circuit: R=16Ω, I=24V/16Ω=1.5A');
            game.addInventoryItem('Power Cell', '🔋');
            setTimeout(() => { game.closePuzzle(); this.renderRoom(); }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ R_total = 6+10, then I = V/R';
        }
    }

    // PUZZLE 8: Launch (FINAL)
    examineLaunch() {
        if (this.puzzlesSolved.launch) {
            game.showChronosMessage("Launch complete!");
            return;
        }
        if (!this.puzzlesSolved.power) {
            game.showChronosMessage("⚠️ Complete Power Grid first!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <h3 style="color: #ff0000; text-align: center;">🚀 FINAL LAUNCH CODE</h3>
                <p class="puzzle-description">Integrate all previous solutions.</p>

                <div style="background: rgba(255,0,0,0.1); padding: 15px; border-radius: 10px; margin: 20px 0;">
                    <p><strong>🎯 FORMULA:</strong></p>
                    <p>(X coordinate ÷ 100) + (Orbital velocity ÷ 1000)</p>
                    <p><strong>USE:</strong></p>
                    <p>• X from Navigation: 3000</p>
                    <p>• Velocity from Orbital: 7668</p>
                    <p style="color: #888;">Round to nearest integer</p>
                </div>

                <div class="puzzle-input-group">
                    <input type="number" id="launch-answer" class="puzzle-input" 
                           placeholder="Launch code" />
                </div>

                <button class="puzzle-submit" onclick="spaceRoom.checkLaunch()">INITIATE LAUNCH</button>
                <div id="launch-feedback"></div>
            </div>
        `;
        
        game.showPuzzle('Launch Sequence', puzzleContent);
    }

    checkLaunch() {
        const answer = parseFloat(document.getElementById('launch-answer').value);
        const feedback = document.getElementById('launch-feedback');
        
        if (Math.abs(answer - 38) < 1) {
            feedback.className = 'puzzle-feedback correct';
            feedback.innerHTML = '✅ LAUNCH CODE ACCEPTED!<br>🚀 ESCAPE ACTIVATED! 🚀';
            this.puzzlesSolved.launch = true;
            game.addClue('Launch: 30 + 7.668 ≈ 38');
            game.addInventoryItem('Launch Key', '🚀');
            setTimeout(() => { game.closePuzzle(); game.completeRoom(); }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ (3000÷100) + (7668÷1000) = ?';
        }
    }

    getHint(hintNumber) {
        const hints = [
            "Start with Navigation - pure vector math!",
            "For orbital velocity, calculate step by step: GM/r first, then √",
            "Puzzles unlock sequentially. Complete them in order!",
            "Use a calculator for complex calculations!",
            "Pay attention to units: km vs m, seconds vs minutes",
            "The final puzzle uses answers from earlier puzzles!",
            "Read each problem carefully - all info is provided",
            "Real NASA-level math - take your time!"
        ];
        return hints[hintNumber - 1] || "Advanced puzzles need careful calculation!";
    }
}

// Global instance
const spaceRoom = new SpaceRoom();
