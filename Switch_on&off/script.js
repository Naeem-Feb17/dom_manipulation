

// Light Switch Controller - Enhanced Version
class LightSwitchController {
  constructor() {
    this.isOn = true; // Default state
    this.soundEnabled = true;
    this.brightness = 100;
    this.initializeElements();
    this.loadState();
    this.setupEventListeners();
    this.updateUI();
  }

  // Initialize DOM elements
  initializeElements() {
    this.bulbImage = document.getElementById("bulbImage");
    this.catImage = document.getElementById("catImage");
    this.switchStatus = document.getElementById("switchStatus");
    this.onSwitch = document.getElementById("onSwitch");
    this.offSwitch = document.getElementById("offSwitch");
    this.darkBackground = document.querySelector('.dark-background');
  }

  // Setup event listeners for enhanced interactions
  setupEventListeners() {
    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault();
        this.toggle();
      }
      if (e.key === 's' || e.key === 'S') {
        this.toggleSound();
      }
    });

    // Add hover effects
    this.onSwitch.addEventListener('mouseenter', () => this.playHoverSound());
    this.offSwitch.addEventListener('mouseenter', () => this.playHoverSound());

    // Touch support for mobile
    this.onSwitch.addEventListener('touchstart', (e) => e.preventDefault());
    this.offSwitch.addEventListener('touchstart', (e) => e.preventDefault());
  }

  // Enhanced switch off functionality
  switchOff() {
    if (!this.isOn) return; // Already off
    
    this.isOn = false;
    this.playClickSound();
    
    // Update images with animation
    this.updateImages();
    
    // Update text and button states
    this.switchStatus.textContent = "Switched Off";
    this.switchStatus.classList.remove('glowing');
    
    // Update button appearance
    this.updateButtonStates();
    
    // Add visual effects
    this.addSwitchEffects();
    
    // Save state
    this.saveState();
    
    // Update overall UI
    this.updateUI();
  }

  // Enhanced switch on functionality
  switchOn() {
    if (this.isOn) return; // Already on
    
    this.isOn = true;
    this.playClickSound();
    
    // Update images with animation
    this.updateImages();
    
    // Update text and button states
    this.switchStatus.textContent = "Switched On";
    this.switchStatus.classList.add('glowing');
    
    // Update button appearance
    this.updateButtonStates();
    
    // Add visual effects
    this.addSwitchEffects();
    
    // Save state
    this.saveState();
    
    // Update overall UI
    this.updateUI();
  }

  // Toggle between on and off
  toggle() {
    if (this.isOn) {
      this.switchOff();
    } else {
      this.switchOn();
    }
  }

  // Update images with smooth transitions
  updateImages() {
    const bulbSrc = this.isOn 
      ? "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
      : "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    
    const catSrc = this.isOn
      ? "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
      : "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";

    // Add fade effect during transition
    this.bulbImage.style.opacity = "0.3";
    this.catImage.style.opacity = "0.3";
    
    setTimeout(() => {
      this.bulbImage.src = bulbSrc;
      this.catImage.src = catSrc;
      this.bulbImage.style.opacity = "1";
      this.catImage.style.opacity = "1";
    }, 150);
  }

  // Update button visual states
  updateButtonStates() {
    if (this.isOn) {
      this.offSwitch.classList.remove('inactive');
      this.onSwitch.classList.add('inactive');
      this.bulbImage.classList.add('bright', 'pulsing');
    } else {
      this.onSwitch.classList.remove('inactive');
      this.offSwitch.classList.add('inactive');
      this.bulbImage.classList.remove('bright', 'pulsing');
    }
  }

  // Add visual effects during switching
  addSwitchEffects() {
    const effect = this.isOn ? 'switch-on-effect' : 'switch-off-effect';
    this.darkBackground.classList.add(effect);
    
    setTimeout(() => {
      this.darkBackground.classList.remove(effect);
    }, 500);
  }

  // Update overall UI theme
  updateUI() {
    if (this.isOn) {
      this.darkBackground.classList.remove('light-mode');
      this.bulbImage.classList.add('bright');
    } else {
      this.bulbImage.classList.remove('bright');
    }
  }

  // Sound effects
  playClickSound() {
    if (!this.soundEnabled) return;
    
    // Create audio context for click sound
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(this.isOn ? 800 : 400, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      console.log('Audio not supported in this browser');
    }
  }

  playHoverSound() {
    if (!this.soundEnabled) return;
    
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.05);
    } catch (e) {
      console.log('Audio not supported in this browser');
    }
  }

  // Toggle sound on/off
  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    this.saveState();
    
    // Visual feedback
    const message = this.soundEnabled ? "Sound: ON" : "Sound: OFF";
    this.showNotification(message);
  }

  // Show notification
  showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      z-index: 1000;
      font-family: Roboto, sans-serif;
      animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 2000);
  }

  // Save state to localStorage
  saveState() {
    const state = {
      isOn: this.isOn,
      soundEnabled: this.soundEnabled,
      brightness: this.brightness
    };
    localStorage.setItem('lightSwitchState', JSON.stringify(state));
  }

  // Load state from localStorage
  loadState() {
    try {
      const savedState = localStorage.getItem('lightSwitchState');
      if (savedState) {
        const state = JSON.parse(savedState);
        this.isOn = state.isOn !== undefined ? state.isOn : true;
        this.soundEnabled = state.soundEnabled !== undefined ? state.soundEnabled : true;
        this.brightness = state.brightness || 100;
      }
    } catch (e) {
      console.log('Could not load saved state');
    }
  }

  // Get current state
  getState() {
    return {
      isOn: this.isOn,
      soundEnabled: this.soundEnabled,
      brightness: this.brightness
    };
  }
}

// Initialize the controller when DOM is loaded
let lightSwitch;

document.addEventListener('DOMContentLoaded', () => {
  lightSwitch = new LightSwitchController();
  
  // Add CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }
    @keyframes slideOut {
      from { transform: translateX(0); }
      to { transform: translateX(100%); }
    }
    .switch-on-effect {
      animation: brighten 0.5s ease !important;
    }
    .switch-off-effect {
      animation: darken 0.5s ease !important;
    }
    @keyframes brighten {
      0% { filter: brightness(1); }
      50% { filter: brightness(1.2); }
      100% { filter: brightness(1); }
    }
    @keyframes darken {
      0% { filter: brightness(1); }
      50% { filter: brightness(0.8); }
      100% { filter: brightness(1); }
    }
  `;
  document.head.appendChild(style);
});

// Global functions for backwards compatibility
function switchOff() {
  if (lightSwitch) lightSwitch.switchOff();
}

function switchOn() {
  if (lightSwitch) lightSwitch.switchOn();
}

// Add helpful instructions
console.log(`
🔦 Light Switch Enhanced Features:
• Press SPACE or ENTER to toggle the switch
• Press 'S' to toggle sound effects
• Click and hold buttons for enhanced effects
• Your preferences are automatically saved!
`);

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LightSwitchController;
}