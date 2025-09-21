# DOM Manipulation Projects

A collection of interactive web applications demonstrating fundamental DOM manipulation techniques using vanilla JavaScript, HTML, and CSS.

## 📋 Table of Contents

- [Overview](#overview)
- [Projects](#projects)
  - [Color Picker](#color-picker)
  - [Counter](#counter)
  - [Guessing Game](#guessing-game)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Features](#features)
- [Learning Objectives](#learning-objectives)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## 📖 Overview

This repository contains three interactive web applications that showcase different aspects of DOM manipulation. Each project demonstrates core JavaScript concepts including:

- Element selection and manipulation
- Event handling
- Dynamic styling
- User input processing
- Conditional logic
- Real-time UI updates

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
└── Guessing_Game/
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