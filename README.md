# DOM Man  - [Projects](#projects)
    - [Color Picker](#color-picker)
    - [Counter](#counter)
    - [Guessing Game](#guessing-game)
    - [Light Switch Control](#light-switch-control)
    - [Calculator](#calculator)
    - [Digital Clock & Timer](#digital-clock--timer)
    - [Random Quote Generator](#random-quote-generator)tion Projects

A collection of interactive web applications demonstrating fundamental DOM manipulation techniques using vanilla JavaScript, HTML, and CSS.

## 📋 Table of Contents

- [DOM Manipulation Projects](#dom-manipulation-projects)
  - [📋 Table of Contents](#-table-of-contents)
  - [📖 Overview](#-overview)
  - [🎨 Projects](#-projects)
    - [Color Picker](#color-picker)
    - [Counter](#counter)
    - [Guessing Game](#guessing-game)
    - [Light Switch Control](#light-switch-control)
  - [🛠 Technologies Used](#-technologies-used)
  - [🚀 Getting Started](#-getting-started)
  - [✨ Features](#-features)
    - [Cross-Project Features](#cross-project-features)
    - [Individual Project Features](#individual-project-features)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [📁 Project Structure](#-project-structure)
  - [🔧 Code Examples](#-code-examples)
    - [DOM Element Selection](#dom-element-selection)
    - [Event Handling](#event-handling)
    - [Style Manipulation](#style-manipulation)
  - [🎮 How to Use Each Project](#-how-to-use-each-project)
    - [Color Picker](#color-picker-1)
    - [Counter](#counter-1)
    - [Guessing Game](#guessing-game-1)
    - [Light Switch Control](#light-switch-control-1)
  - [🤝 Contributing](#-contributing)
    - [Contributing Guidelines](#contributing-guidelines)
  - [📚 Additional Resources](#-additional-resources)
  - [📄 License](#-license)

## 📖 Overview

This repository contains seven interactive web applications that showcase different aspects of DOM manipulation. Each project demonstrates core JavaScript concepts including:

- Element selection and manipulation
- Event handling
- Dynamic styling
- User input processing
- Conditional logic
- Real-time UI updates
- Advanced interactions and state management

## 🎨 Projects

### Color Picker

An interactive color picker that allows users to change the background color of the page by clicking on predefined color buttons.

**Features:**
- 4 predefined color options (#e0e0e0, #6fcf97, #56ccf2, #bb6bd9)
- Real-time background color changes
- Display of selected color hex code
- Responsive design with Bootstrap integration

**Key Learning Points:**
- CSS styling manipulation via JavaScript
- Event handlers with `onclick`
- Dynamic text content updates

### Counter

A simple counter application with increment, decrement, and reset functionality.

**Features:**
- Increase/Decrease counter values
- Reset counter to zero
- Color-coded values (green for positive, red for negative, black for zero)
- Clean, centered UI design

**Key Learning Points:**
- Number manipulation and parsing
- Conditional styling based on values
- Multiple event handlers
- State management

### Guessing Game

A number guessing game where users try to guess a randomly generated number between 1 and 100.

**Features:**
- Random number generation (1-100)
- Input validation
- Feedback system (Too High, Too Low, Correct)
- Dynamic background color changes based on game state
- Responsive design with Bootstrap

**Key Learning Points:**
- Random number generation
- User input validation
- Conditional logic and feedback
- Form handling without page refresh

### Light Switch Control

An interactive light switch simulator that allows users to control a virtual light bulb with enhanced features and animations.

**Features:**
- Toggle light on/off with visual feedback
- Dynamic background changes (dark/light modes)
- Animated bulb and cat images
- Keyboard support (Space/Enter to toggle, 'S' for sound)
- Touch support for mobile devices
- Sound effects and hover interactions
- Persistent state management
- Accessibility features with ARIA labels

**Key Learning Points:**
- Class-based JavaScript architecture
- Advanced event handling (keyboard, touch, mouse)
- Local storage for state persistence
- Complex DOM manipulation and animations
- Accessibility best practices
- Mobile-responsive interactions

### Calculator

A fully functional calculator application with a modern interface supporting basic arithmetic operations and advanced features.

**Features:**
- Basic arithmetic operations (+, −, ×, ÷)
- Decimal number support with proper validation
- Clear All (AC) and Clear Entry (CE) functions
- Backspace functionality for corrections
- Full keyboard support for all operations
- Error handling for invalid operations (division by zero, overflow)
- Operation history display
- Responsive design with visual feedback
- Mathematical expression evaluation

**Key Learning Points:**
- Complex mathematical operations and parsing
- Advanced error handling and validation
- State management for calculator operations
- Keyboard event handling and shortcuts
- Class-based architecture with encapsulation
- Real-time display updates and formatting
- User input validation and sanitization

### Digital Clock & Timer

A comprehensive time management application featuring a digital clock, stopwatch, and countdown timer with multiple display options.

**Features:**
- Real-time digital clock with automatic updates
- 12/24 hour format toggle
- Local and UTC timezone support
- Current date display with full formatting
- Precision stopwatch with millisecond accuracy
- Lap time recording and display
- Customizable countdown timer
- Progress bar visualization for timers
- Audio and visual notifications
- Keyboard shortcuts for all functions
- Tab-based interface for different modes

**Key Learning Points:**
- Date and Time API manipulation
- setInterval and setTimeout for real-time updates
- Time formatting and timezone handling
- Audio API for notification sounds
- Browser Notification API integration
- Complex state management across multiple timers
- Tab-based UI navigation
- Progress visualization with CSS animations

### Random Quote Generator

An inspirational quote generator featuring a curated collection of quotes from famous personalities across multiple categories.

**Features:**
- 500+ curated quotes from famous personalities
- 8 different categories (Inspirational, Motivational, Wisdom, Success, Life, Love, Happiness, Famous)
- Random quote generation with category filtering
- Favorite quotes system with local storage
- Copy to clipboard functionality
- Social sharing capabilities
- Auto-play mode with customizable intervals
- Dark/Light theme toggle
- Usage statistics tracking
- Keyboard shortcuts for all functions
- Responsive design with smooth animations
- Modal dialogs for favorites and statistics

**Key Learning Points:**
- Large dataset management and filtering
- Local storage for persistent data
- Clipboard API for copy functionality
- Web Share API for social sharing
- Theme management and CSS custom properties
- Modal dialog creation and management
- Statistics tracking and data visualization
- Advanced array manipulation and search
- CSS animations and transitions
- Browser notification integration

## 🛠 Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - DOM manipulation and interactivity
- **Bootstrap 4.5.2** - UI framework for responsive design
- **Google Fonts** - Typography enhancement

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd dom_manipulation
   ```

2. **Open any project:**
   Each project is self-contained in its own folder. Simply open the `index.html` file in your web browser.

3. **Using a local server (recommended):**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using Live Server extension in VS Code
   Right-click on index.html → "Open with Live Server"
   ```

4. **Navigate to the project:**
   Open your browser and go to:
   - Color Picker: `http://localhost:8000/Color_picker/`
   - Counter: `http://localhost:8000/Counter/`
   - Guessing Game: `http://localhost:8000/Guessing_Game/`
   - Light Switch Control: `http://localhost:8000/Switch_on&off/`
   - Calculator: `http://localhost:8000/Calculator/`
   - Digital Clock & Timer: `http://localhost:8000/Digital_Clock/`
   - Random Quote Generator: `http://localhost:8000/Quote_Generator/`

## ✨ Features

### Cross-Project Features
- **Responsive Design**: All projects are mobile-friendly using Bootstrap
- **Clean UI**: Consistent styling with Google Fonts integration
- **No Dependencies**: Pure vanilla JavaScript implementation
- **Immediate Feedback**: Real-time user interaction responses
- **Cross-Browser Compatible**: Works on all modern browsers

### Individual Project Features

| Project | Key Features |
|---------|-------------|
| Color Picker | Dynamic background changes, Hex code display, 4 color options |
| Counter | Increment/Decrement, Color-coded values, Reset functionality |
| Guessing Game | Random number generation, Input validation, Feedback system |
| Light Switch Control | Toggle animations, Keyboard/Touch support, Sound effects, State persistence |
| Calculator | Full arithmetic operations, Keyboard support, Error handling, History display |
| Digital Clock & Timer | Real-time clock, Stopwatch, Countdown timer, Multiple formats, Notifications |
| Random Quote Generator | 500+ quotes, Categories, Favorites, Sharing, Themes, Statistics |

## 🎯 Learning Objectives

By exploring these projects, you will learn:

1. **DOM Selection**: Using `getElementById()` to select elements
2. **Event Handling**: Implementing `onclick` events and function calls
3. **Style Manipulation**: Changing CSS properties via JavaScript
4. **Content Updates**: Modifying `textContent` and `innerHTML`
5. **User Input**: Processing form inputs and validation
6. **Conditional Logic**: Implementing if-else statements for different outcomes
7. **Number Operations**: Parsing and manipulating numeric values
8. **Random Generation**: Creating random numbers for game mechanics
9. **Class-Based Programming**: Object-oriented JavaScript patterns
10. **Local Storage**: Persisting application state
11. **Keyboard Events**: Handling complex user interactions
12. **Mobile Responsiveness**: Touch events and responsive design
13. **Accessibility**: ARIA labels and keyboard navigation
14. **Mathematical Operations**: Complex calculations and expression parsing
15. **Time Management**: Date/Time APIs and real-time updates
16. **Data Management**: Large datasets, filtering, and search
17. **API Integration**: Clipboard, Notification, and Web Share APIs
18. **Theme Management**: CSS custom properties and dynamic styling
19. **Modal Dialogs**: Creating and managing overlay interfaces
20. **Statistics Tracking**: Data collection and visualization
21. **Error Handling**: Robust validation and user feedback
22. **Animation Control**: CSS animations and transitions

## 📁 Project Structure

```
dom_manipulation/
├── README.md
├── Color_picker/
│   ├── index.html
│   ├── index.css
│   └── index.js
├── Counter/
│   ├── index.html
│   ├── index.css
│   └── index.js
├── Guessing_Game/
│   ├── index.html
│   ├── index.css
│   └── index.js
├── Switch_on&off/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── Calculator/
│   ├── index.html
│   ├── index.css
│   └── index.js
├── Digital_Clock/
│   ├── index.html
│   ├── index.css
│   └── index.js
└── Quote_Generator/
    ├── index.html
    ├── index.css
    └── index.js
```

## 🔧 Code Examples

### DOM Element Selection
```javascript
// Getting elements by ID
let counterElement = document.getElementById('counterValue');
let gameResult = document.getElementById("gameResult");
```

### Event Handling
```javascript
// Function-based event handling
function onIncrement() {
    // Logic here
}

// Inline event handling in HTML
<button onclick="checkGuess()">Check</button>
```

### Style Manipulation
```javascript
// Changing background colors
colorPickerConainerElement.style.backgroundColor = "#6fcf97";

// Conditional styling
if (value > 0) {
    counterElement.style.color = 'green';
}

// Class-based state management
this.darkBackground.classList.toggle('dark-background', !this.isOn);
```

### Advanced JavaScript Patterns
```javascript
// Calculator class with error handling
performCalculation(firstOperand, secondOperand, operator) {
    try {
        switch (operator) {
            case '/':
                if (secondOperand === 0) {
                    this.showError('Cannot divide by zero');
                    return null;
                }
                return firstOperand / secondOperand;
        }
    } catch (error) {
        this.showError('Calculation error');
        return null;
    }
}

// Time formatting with Date API
updateTime() {
    const now = this.isUTC ? new Date(Date.now() + (new Date().getTimezoneOffset() * 60000)) : new Date();
    this.timeDisplay.textContent = `${this.formatTime(now.getHours())}:${this.formatTime(now.getMinutes())}`;
}

// Local storage for data persistence
saveFavorites() {
    localStorage.setItem('quoteGeneratorFavorites', JSON.stringify(this.favorites));
}
```

## 🎮 How to Use Each Project

### Color Picker
1. Open the Color Picker project
2. Click on any of the four colored buttons
3. Watch the background change and hex code update

### Counter
1. Open the Counter project
2. Use INCREASE/DECREASE buttons to modify the counter
3. Use RESET to return to zero
4. Notice color changes based on positive/negative values

### Guessing Game
1. Open the Guessing Game project
2. Enter a number between 1-100 in the input field
3. Click "Check" to see if your guess is correct
4. Follow the hints (Too High/Too Low) to find the correct number

### Light Switch Control
1. Open the Light Switch Control project
2. Click ON/OFF buttons to toggle the light
3. Use keyboard shortcuts (Space/Enter to toggle, 'S' for sound)
4. Watch the animated bulb and background changes
5. Notice the cat's reaction to the light changes

### Calculator
1. Open the Calculator project
2. Click number buttons or use keyboard input (0-9)
3. Use operation buttons (+, −, ×, ÷) or keyboard operators
4. Press = or Enter to calculate results
5. Use AC (All Clear) or CE (Clear Entry) to reset
6. Try keyboard shortcuts: Escape (clear), Backspace (delete)

### Digital Clock & Timer
1. Open the Digital Clock & Timer project
2. View the real-time clock with current date
3. Toggle between 12/24 hour format
4. Switch between Local and UTC time
5. Use the Stopwatch tab for timing activities
6. Use the Timer tab to set countdown timers
7. Try keyboard shortcuts: Space (start/stop), R (reset), L (lap)

### Random Quote Generator
1. Open the Random Quote Generator project
2. Click "New Quote" to discover inspiring quotes
3. Filter quotes by category using the dropdown
4. Heart quotes to add them to favorites
5. Copy quotes to clipboard or share them
6. Try keyboard shortcuts: Space (new quote), F (favorite), C (copy)
7. Toggle between light and dark themes
8. View your statistics and favorite quotes

## 🤝 Contributing

Contributions are welcome! Here are some ways you can contribute:

1. **Bug Fixes**: Report and fix any issues
2. **New Features**: Add new functionality to existing projects
3. **New Projects**: Create additional DOM manipulation examples
4. **Documentation**: Improve README or add code comments
5. **Styling**: Enhance CSS designs and responsiveness

### Contributing Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📚 Additional Resources

- [MDN Web Docs - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [JavaScript DOM Manipulation Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Bootstrap Documentation](https://getbootstrap.com/docs/4.5/)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Coding! 🚀**

*These projects are perfect for beginners learning DOM manipulation and JavaScript fundamentals. Each project builds upon core concepts while providing hands-on experience with real-world web development scenarios.*