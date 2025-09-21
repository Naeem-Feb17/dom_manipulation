// Digital Clock & Timer JavaScript - Advanced DOM Manipulation
class DigitalClock {
    constructor() {
        this.is24Hour = false;
        this.isUTC = false;
        this.clockInterval = null;
        
        this.timeDisplay = document.getElementById('timeDisplay');
        this.periodDisplay = document.getElementById('periodDisplay');
        this.dateDisplay = document.getElementById('dateDisplay');
        this.formatToggle = document.getElementById('formatToggle');
        this.timezoneToggle = document.getElementById('timezoneToggle');
        this.timezoneInfo = document.getElementById('timezoneInfo');
        
        this.startClock();
    }
    
    startClock() {
        this.updateTime();
        this.clockInterval = setInterval(() => this.updateTime(), 1000);
    }
    
    updateTime() {
        const now = this.isUTC ? new Date(Date.now() + (new Date().getTimezoneOffset() * 60000)) : new Date();
        
        // Update date
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        };
        this.dateDisplay.textContent = now.toLocaleDateString('en-US', options);
        
        // Update time
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        if (this.is24Hour) {
            this.timeDisplay.textContent = `${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
            this.periodDisplay.style.display = 'none';
        } else {
            const period = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            this.timeDisplay.textContent = `${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
            this.periodDisplay.textContent = period;
            this.periodDisplay.style.display = 'block';
        }
        
        // Update timezone info
        this.timezoneInfo.textContent = this.isUTC ? 'UTC Time' : 'Local Time';
    }
    
    formatTime(time) {
        return time.toString().padStart(2, '0');
    }
    
    toggleFormat() {
        this.is24Hour = !this.is24Hour;
        this.formatToggle.textContent = this.is24Hour ? 'Switch to 12H' : 'Switch to 24H';
        this.updateTime();
    }
    
    toggleTimezone() {
        this.isUTC = !this.isUTC;
        this.timezoneToggle.textContent = this.isUTC ? 'Local' : 'UTC';
        this.updateTime();
    }
}

class Stopwatch {
    constructor() {
        this.startTime = null;
        this.elapsedTime = 0;
        this.timerInterval = null;
        this.isRunning = false;
        this.lapCount = 0;
        
        this.display = document.getElementById('stopwatchDisplay');
        this.msDisplay = document.getElementById('stopwatchMs');
        this.startBtn = document.getElementById('stopwatchStart');
        this.lapBtn = document.getElementById('stopwatchLap');
        this.resetBtn = document.getElementById('stopwatchReset');
        this.lapTimes = document.getElementById('lapTimes');
    }
    
    start() {
        if (!this.isRunning) {
            this.startTime = Date.now() - this.elapsedTime;
            this.timerInterval = setInterval(() => this.updateDisplay(), 10);
            this.isRunning = true;
            
            this.startBtn.textContent = 'Stop';
            this.startBtn.className = 'btn btn-reset';
            this.lapBtn.disabled = false;
            
            document.querySelector('#stopwatchContent .timer-display').classList.add('timer-running');
        } else {
            this.stop();
        }
    }
    
    stop() {
        clearInterval(this.timerInterval);
        this.isRunning = false;
        
        this.startBtn.textContent = 'Start';
        this.startBtn.className = 'btn btn-start';
        this.lapBtn.disabled = true;
        
        document.querySelector('#stopwatchContent .timer-display').classList.remove('timer-running');
    }
    
    reset() {
        this.stop();
        this.elapsedTime = 0;
        this.lapCount = 0;
        this.updateDisplay();
        this.lapTimes.innerHTML = '';
    }
    
    lap() {
        if (this.isRunning) {
            this.lapCount++;
            const currentTime = Date.now() - this.startTime;
            const lapElement = document.createElement('div');
            lapElement.className = 'lap-time';
            lapElement.innerHTML = `
                <span>Lap ${this.lapCount}</span>
                <span>${this.formatTime(currentTime)}</span>
            `;
            this.lapTimes.insertBefore(lapElement, this.lapTimes.firstChild);
        }
    }
    
    updateDisplay() {
        this.elapsedTime = Date.now() - this.startTime;
        const timeString = this.formatTime(this.elapsedTime);
        const parts = timeString.split('.');
        this.display.textContent = parts[0];
        this.msDisplay.textContent = '.' + parts[1];
    }
    
    formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const ms = Math.floor((milliseconds % 1000) / 10);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
    }
}

class CountdownTimer {
    constructor() {
        this.totalTime = 0;
        this.remainingTime = 0;
        this.timerInterval = null;
        this.isRunning = false;
        this.isPaused = false;
        
        this.display = document.getElementById('countdownDisplay');
        this.startBtn = document.getElementById('countdownStart');
        this.pauseBtn = document.getElementById('countdownPause');
        this.resetBtn = document.getElementById('countdownReset');
        this.progressBar = document.getElementById('countdownProgress');
        
        this.hoursInput = document.getElementById('hoursInput');
        this.minutesInput = document.getElementById('minutesInput');
        this.secondsInput = document.getElementById('secondsInput');
        
        this.audio = document.getElementById('timerAudio');
        
        this.updateDisplay();
    }
    
    start() {
        if (!this.isRunning && !this.isPaused) {
            // Get time from inputs
            const hours = parseInt(this.hoursInput.value) || 0;
            const minutes = parseInt(this.minutesInput.value) || 0;
            const seconds = parseInt(this.secondsInput.value) || 0;
            
            this.totalTime = (hours * 3600 + minutes * 60 + seconds) * 1000;
            this.remainingTime = this.totalTime;
            
            if (this.totalTime <= 0) {
                alert('Please set a valid time!');
                return;
            }
        }
        
        if (!this.isRunning) {
            this.timerInterval = setInterval(() => this.updateTimer(), 100);
            this.isRunning = true;
            this.isPaused = false;
            
            this.startBtn.textContent = 'Running...';
            this.startBtn.disabled = true;
            this.pauseBtn.disabled = false;
            
            // Disable inputs
            this.hoursInput.disabled = true;
            this.minutesInput.disabled = true;
            this.secondsInput.disabled = true;
            
            document.querySelector('#countdownContent .timer-display').classList.add('timer-running');
        }
    }
    
    pause() {
        if (this.isRunning) {
            clearInterval(this.timerInterval);
            this.isRunning = false;
            this.isPaused = true;
            
            this.startBtn.textContent = 'Resume';
            this.startBtn.disabled = false;
            this.pauseBtn.disabled = true;
            
            document.querySelector('#countdownContent .timer-display').classList.remove('timer-running');
        }
    }
    
    reset() {
        clearInterval(this.timerInterval);
        this.isRunning = false;
        this.isPaused = false;
        this.remainingTime = 0;
        this.totalTime = 0;
        
        this.startBtn.textContent = 'Start';
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        
        // Enable inputs
        this.hoursInput.disabled = false;
        this.minutesInput.disabled = false;
        this.secondsInput.disabled = false;
        
        this.updateDisplay();
        this.progressBar.style.width = '0%';
        
        document.querySelector('#countdownContent .timer-display').classList.remove('timer-running', 'timer-finished');
    }
    
    updateTimer() {
        this.remainingTime -= 100;
        
        if (this.remainingTime <= 0) {
            this.remainingTime = 0;
            this.timerFinished();
        }
        
        this.updateDisplay();
        this.updateProgress();
    }
    
    updateDisplay() {
        const timeString = this.formatTime(this.remainingTime);
        this.display.textContent = timeString;
    }
    
    updateProgress() {
        if (this.totalTime > 0) {
            const progress = ((this.totalTime - this.remainingTime) / this.totalTime) * 100;
            this.progressBar.style.width = `${progress}%`;
        }
    }
    
    updateFromInputs() {
        if (!this.isRunning && !this.isPaused) {
            const hours = parseInt(this.hoursInput.value) || 0;
            const minutes = parseInt(this.minutesInput.value) || 0;
            const seconds = parseInt(this.secondsInput.value) || 0;
            
            this.remainingTime = (hours * 3600 + minutes * 60 + seconds) * 1000;
            this.updateDisplay();
        }
    }
    
    formatTime(milliseconds) {
        const totalSeconds = Math.ceil(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    timerFinished() {
        clearInterval(this.timerInterval);
        this.isRunning = false;
        this.isPaused = false;
        
        this.startBtn.textContent = 'Start';
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        
        // Enable inputs
        this.hoursInput.disabled = false;
        this.minutesInput.disabled = false;
        this.secondsInput.disabled = false;
        
        // Visual notification
        document.querySelector('#countdownContent .timer-display').classList.add('timer-finished');
        
        // Audio notification
        this.playNotification();
        
        // Browser notification
        if (Notification.permission === 'granted') {
            new Notification('Timer Finished!', {
                body: 'Your countdown timer has reached zero.',
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23ff6b6b"/><text x="50" y="60" text-anchor="middle" fill="white" font-size="40">⏰</text></svg>'
            });
        }
        
        setTimeout(() => {
            document.querySelector('#countdownContent .timer-display').classList.remove('timer-finished');
        }, 5000);
    }
    
    playNotification() {
        // Create a simple beep sound using Web Audio API
        if (window.AudioContext || window.webkitAudioContext) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 1);
        }
    }
}

// Tab Management
class TabManager {
    constructor() {
        this.activeTab = 'stopwatch';
    }
    
    showTab(tabName) {
        // Hide all content
        document.querySelectorAll('.timer-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Remove active class from all tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected content and activate tab
        document.getElementById(`${tabName}Content`).classList.add('active');
        document.getElementById(`${tabName}Tab`).classList.add('active');
        
        this.activeTab = tabName;
    }
}

// Global instances
let digitalClock;
let stopwatch;
let countdownTimer;
let tabManager;

// Global functions for button onclick events
function toggleFormat() {
    digitalClock.toggleFormat();
}

function toggleTimezone() {
    digitalClock.toggleTimezone();
}

function showTab(tabName) {
    tabManager.showTab(tabName);
}

function startStopwatch() {
    stopwatch.start();
}

function lapStopwatch() {
    stopwatch.lap();
}

function resetStopwatch() {
    stopwatch.reset();
}

function startCountdown() {
    countdownTimer.start();
}

function pauseCountdown() {
    countdownTimer.pause();
}

function resetCountdown() {
    countdownTimer.reset();
}

function updateCountdownDisplay() {
    countdownTimer.updateFromInputs();
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    digitalClock = new DigitalClock();
    stopwatch = new Stopwatch();
    countdownTimer = new CountdownTimer();
    tabManager = new TabManager();
    
    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
    
    // Add visual feedback for buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            if (!this.disabled) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT') return;
        
        switch(e.key.toLowerCase()) {
            case ' ':
                e.preventDefault();
                if (tabManager.activeTab === 'stopwatch') {
                    stopwatch.start();
                } else {
                    countdownTimer.start();
                }
                break;
            case 'r':
                e.preventDefault();
                if (tabManager.activeTab === 'stopwatch') {
                    stopwatch.reset();
                } else {
                    countdownTimer.reset();
                }
                break;
            case 'l':
                e.preventDefault();
                if (tabManager.activeTab === 'stopwatch') {
                    stopwatch.lap();
                }
                break;
            case 'p':
                e.preventDefault();
                if (tabManager.activeTab === 'countdown') {
                    countdownTimer.pause();
                }
                break;
            case '1':
                e.preventDefault();
                showTab('stopwatch');
                break;
            case '2':
                e.preventDefault();
                showTab('countdown');
                break;
        }
    });
});