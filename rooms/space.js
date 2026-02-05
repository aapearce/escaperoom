// Space Race Room - Mission Control Lockdown
class SpaceRoom {
    constructor() {
        this.puzzlesSolved = {
            trajectory: false,
            communication: false,
            countdown: false
        };
        this.welcomeMessage = "Welcome to Mission Control, 1969! The Apollo mission needs your help. Solve the technical challenges to ensure a safe journey!";
        this.successMessage = "Mission accomplished! You've helped save the Apollo mission! 🚀";
    }

    init() {
        document.getElementById('room-title').textContent = '🚀 Space Race Era - Mission Control';
        this.renderRoom();
    }

    renderRoom() {
        const roomView = document.getElementById('room-view');
        roomView.innerHTML = `
            <div class="room-intro" style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #ffd700; margin-bottom: 15px;">NASA Mission Control - 1969</h2>
                <p style="font-size: 1.1rem; line-height: 1.6;">
                    Critical systems have malfunctioned during the Apollo mission. 
                    Use your scientific knowledge to restore systems and ensure a safe journey to the Moon!
                </p>
            </div>

            <div class="room-grid">
                <div class="room-object" onclick="spaceRoom.examineTrajectory()">
                    <h3>📐 Trajectory Computer</h3>
                    <p>Calculate the escape velocity needed to leave Earth's gravity.</p>
                </div>

                <div class="room-object" onclick="spaceRoom.examineCommunication()">
                    <h3>📡 Communication System</h3>
                    <p>Decode the Morse code transmission from the spacecraft.</p>
                </div>

                <div class="room-object" onclick="spaceRoom.examineCountdown()">
                    <h3>🚀 Launch Sequence</h3>
                    <p>Arrange the countdown steps in the correct order.</p>
                </div>

                <div class="room-object" id="portal-object" style="opacity: 0.3; cursor: not-allowed;">
                    <h3>🚪 Time Portal</h3>
                    <p>Return to the present. Complete all systems to activate.</p>
                </div>
            </div>

            <div id="puzzle-status" style="margin-top: 30px; padding: 20px; background: rgba(0, 150, 255, 0.1); border-radius: 10px;">
                <h3 style="text-align: center; margin-bottom: 15px;">📋 Systems Status</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
                    <div id="status-trajectory" class="puzzle-status-item">📐 Trajectory: ❌</div>
                    <div id="status-communication" class="puzzle-status-item">📡 Communication: ❌</div>
                    <div id="status-countdown" class="puzzle-status-item">🚀 Countdown: ❌</div>
                </div>
            </div>
        `;
    }

    examineTrajectory() {
        if (this.puzzlesSolved.trajectory) {
            game.showChronosMessage("Trajectory already calculated!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    To escape Earth's gravity, spacecraft need to reach <strong>escape velocity</strong>.
                    This is approximately 11.2 kilometers per second!
                    <br><br>
                    Convert this to <strong>meters per second</strong> for the computer.
                </p>

                <div style="margin: 20px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                    <h4>🚀 Space Fact:</h4>
                    <p>The Saturn V rocket that carried Apollo 11 to the Moon had to reach this incredible speed!</p>
                </div>

                <p style="margin: 20px 0;">
                    <strong>11.2 kilometers per second = ? meters per second</strong><br>
                    <small>(Hint: 1 kilometer = 1,000 meters)</small>
                </p>

                <div class="puzzle-input-group">
                    <input type="number" id="trajectory-answer" class="puzzle-input" 
                           placeholder="Enter meters per second" />
                </div>

                <button class="puzzle-submit" onclick="spaceRoom.checkTrajectory()">Calculate</button>
                <div id="trajectory-feedback"></div>
            </div>
        `;

        game.showPuzzle('Escape Velocity', puzzleContent);
    }

    checkTrajectory() {
        const answer = parseInt(document.getElementById('trajectory-answer').value);
        const feedback = document.getElementById('trajectory-feedback');

        if (answer === 11200) {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Correct! 11.2 km/s = 11,200 m/s. Trajectory computed!';
            this.puzzlesSolved.trajectory = true;
            game.addClue('Escape velocity: 11.2 km/s = 11,200 m/s');
            game.addInventoryItem('Trajectory Data', '📐');

            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. Remember: multiply by 1,000 to convert km to meters.';
        }
    }

    examineCommunication() {
        if (this.puzzlesSolved.communication) {
            game.showChronosMessage("Communication already decoded!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    An urgent message is coming through in Morse code! 
                    Decode it to understand what the astronauts need.
                </p>

                <div style="margin: 20px 0; padding: 20px; background: rgba(0,0,0,0.4); border-radius: 10px;">
                    <p style="font-size: 1.5rem; text-align: center; letter-spacing: 5px; font-family: monospace;">
                        <strong>-- --- --- -.</strong>
                    </p>
                </div>

                <div style="margin: 20px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                    <h4>📡 Morse Code Key:</h4>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; font-family: monospace;">
                        <div>M = --</div>
                        <div>O = ---</div>
                        <div>N = -.</div>
                        <div>A = .-</div>
                        <div>S = ...</div>
                        <div>T = -</div>
                    </div>
                </div>

                <div class="puzzle-input-group">
                    <input type="text" id="communication-answer" class="puzzle-input" 
                           placeholder="What does the message say?" />
                </div>

                <button class="puzzle-submit" onclick="spaceRoom.checkCommunication()">Decode</button>
                <div id="communication-feedback"></div>
            </div>
        `;

        game.showPuzzle('Morse Code Message', puzzleContent);
    }

    checkCommunication() {
        const answer = document.getElementById('communication-answer').value.toUpperCase().trim();
        const feedback = document.getElementById('communication-feedback');

        if (answer === 'MOON') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect! The message says "MOON" - destination confirmed!';
            this.puzzlesSolved.communication = true;
            game.addClue('Message decoded: MOON - the astronauts are heading to the Moon!');
            game.addInventoryItem('Radio Signal', '📡');

            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2000);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Try again. Use the Morse code key to decode each symbol.';
        }
    }

    examineCountdown() {
        if (this.puzzlesSolved.countdown) {
            game.showChronosMessage("Launch sequence already programmed!");
            return;
        }

        const puzzleContent = `
            <div class="puzzle-container">
                <p class="puzzle-description">
                    The launch sequence has been scrambled! 
                    Arrange these steps in the correct order (1-6) for a safe launch.
                </p>

                <div style="margin: 20px 0;">
                    <div class="launch-step" style="margin: 10px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 5px;">
                        <strong>Step A:</strong> Ignition sequence start
                    </div>
                    <div class="launch-step" style="margin: 10px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 5px;">
                        <strong>Step B:</strong> Final countdown (10, 9, 8...)
                    </div>
                    <div class="launch-step" style="margin: 10px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 5px;">
                        <strong>Step C:</strong> Check all systems
                    </div>
                    <div class="launch-step" style="margin: 10px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 5px;">
                        <strong>Step D:</strong> Load fuel
                    </div>
                    <div class="launch-step" style="margin: 10px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 5px;">
                        <strong>Step E:</strong> Board crew
                    </div>
                    <div class="launch-step" style="margin: 10px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 5px;">
                        <strong>Step F:</strong> Liftoff!
                    </div>
                </div>

                <p style="margin: 20px 0;">
                    <strong>Enter the correct order (e.g., ABCDEF):</strong>
                </p>

                <div class="puzzle-input-group">
                    <input type="text" id="countdown-answer" class="puzzle-input" 
                           placeholder="Enter 6 letters (e.g., DCBAFE)" style="text-transform: uppercase;" />
                </div>

                <button class="puzzle-submit" onclick="spaceRoom.checkCountdown()">Set Sequence</button>
                <div id="countdown-feedback"></div>
            </div>
        `;

        game.showPuzzle('Launch Sequence', puzzleContent);
    }

    checkCountdown() {
        const answer = document.getElementById('countdown-answer').value.toUpperCase().trim();
        const feedback = document.getElementById('countdown-feedback');

        // Correct order: D (fuel), C (check), E (crew), B (countdown), A (ignition), F (liftoff)
        if (answer === 'DCEBAF') {
            feedback.className = 'puzzle-feedback correct';
            feedback.textContent = '✅ Perfect sequence! Fuel → Check → Crew → Countdown → Ignition → Liftoff!';
            this.puzzlesSolved.countdown = true;
            game.addClue('Launch sequence: DCEBAF - ready for liftoff!');
            game.addInventoryItem('Launch Key', '🚀');

            setTimeout(() => {
                game.closePuzzle();
                this.updatePuzzleStatus();
                this.checkCompletion();
            }, 2500);
        } else {
            feedback.className = 'puzzle-feedback incorrect';
            feedback.textContent = '❌ Not quite. Think logically: fuel first, then checks, then crew...';
        }
    }

    updatePuzzleStatus() {
        if (this.puzzlesSolved.trajectory) {
            document.getElementById('status-trajectory').innerHTML = '📐 Trajectory: ✅';
        }
        if (this.puzzlesSolved.communication) {
            document.getElementById('status-communication').innerHTML = '📡 Communication: ✅';
        }
        if (this.puzzlesSolved.countdown) {
            document.getElementById('status-countdown').innerHTML = '🚀 Countdown: ✅';
        }
    }

    checkCompletion() {
        if (this.puzzlesSolved.trajectory && this.puzzlesSolved.communication && this.puzzlesSolved.countdown) {
            const portalObj = document.getElementById('portal-object');
            portalObj.style.opacity = '1';
            portalObj.style.cursor = 'pointer';
            portalObj.onclick = () => this.openPortal();
            game.showChronosMessage("🎉 All systems operational! The portal is ready!");
        }
    }

    openPortal() {
        if (this.puzzlesSolved.trajectory && this.puzzlesSolved.communication && this.puzzlesSolved.countdown) {
            game.completeRoom();
        }
    }

    getHint(hintNumber) {
        const hints = [
            "For escape velocity: 11.2 km × 1,000 = ? meters",
            "For Morse code: Break it into groups. -- is M, --- is O, -. is N",
            "For launch sequence: What needs to happen BEFORE you can start the countdown?"
        ];
        return hints[hintNumber - 1] || "Think about real NASA procedures!";
    }
}

// Create global instance
const spaceRoom = new SpaceRoom();
