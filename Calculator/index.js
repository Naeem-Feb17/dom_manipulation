// Calculator JavaScript - Enhanced DOM Manipulation
class Calculator {
    constructor() {
        this.currentInput = '0';
        this.operator = null;
        this.previousInput = null;
        this.waitingForOperand = false;
        this.history = '';
        
        this.display = document.getElementById('display');
        this.historyDisplay = document.getElementById('history');
        this.errorMessage = document.getElementById('errorMessage');
        
        this.setupEventListeners();
        this.updateDisplay();
    }
    
    setupEventListeners() {
        // Keyboard support
        document.addEventListener('keydown', (e) => {
            e.preventDefault();
            
            if (e.key >= '0' && e.key <= '9') {
                this.inputNumber(e.key);
            } else if (e.key === '.') {
                this.inputDecimal();
            } else if (['+', '-', '*', '/'].includes(e.key)) {
                this.inputOperator(e.key);
            } else if (e.key === 'Enter' || e.key === '=') {
                this.calculate();
            } else if (e.key === 'Escape') {
                this.clearAll();
            } else if (e.key === 'Backspace') {
                this.deleteLast();
            }
        });
    }
    
    updateDisplay() {
        this.display.textContent = this.formatNumber(this.currentInput);
        this.historyDisplay.textContent = this.history;
        this.clearError();
    }
    
    formatNumber(num) {
        const number = parseFloat(num);
        if (isNaN(number)) return '0';
        
        // Handle very large or very small numbers
        if (Math.abs(number) > 999999999 || (Math.abs(number) < 0.000001 && number !== 0)) {
            return number.toExponential(6);
        }
        
        // Format with appropriate decimal places
        return number.toString();
    }
    
    inputNumber(num) {
        if (this.waitingForOperand) {
            this.currentInput = num;
            this.waitingForOperand = false;
        } else {
            this.currentInput = this.currentInput === '0' ? num : this.currentInput + num;
        }
        this.updateDisplay();
    }
    
    inputDecimal() {
        if (this.waitingForOperand) {
            this.currentInput = '0.';
            this.waitingForOperand = false;
        } else if (this.currentInput.indexOf('.') === -1) {
            this.currentInput += '.';
        }
        this.updateDisplay();
    }
    
    inputOperator(nextOperator) {
        const inputValue = parseFloat(this.currentInput);
        
        if (this.previousInput === null) {
            this.previousInput = inputValue;
        } else if (this.operator) {
            const currentValue = this.previousInput || 0;
            const newValue = this.performCalculation(currentValue, inputValue, this.operator);
            
            if (newValue === null) return; // Error occurred
            
            this.currentInput = String(newValue);
            this.previousInput = newValue;
        }
        
        this.waitingForOperand = true;
        this.operator = nextOperator;
        
        // Update history
        this.history = `${this.formatNumber(this.previousInput)} ${this.getOperatorSymbol(this.operator)}`;
        this.updateDisplay();
    }
    
    calculate() {
        const inputValue = parseFloat(this.currentInput);
        
        if (this.previousInput !== null && this.operator) {
            const newValue = this.performCalculation(this.previousInput, inputValue, this.operator);
            
            if (newValue === null) return; // Error occurred
            
            // Update history with complete calculation
            this.history = `${this.formatNumber(this.previousInput)} ${this.getOperatorSymbol(this.operator)} ${this.formatNumber(inputValue)} =`;
            
            this.currentInput = String(newValue);
            this.previousInput = null;
            this.operator = null;
            this.waitingForOperand = true;
            
            this.updateDisplay();
        }
    }
    
    performCalculation(firstOperand, secondOperand, operator) {
        let result;
        
        try {
            switch (operator) {
                case '+':
                    result = firstOperand + secondOperand;
                    break;
                case '-':
                    result = firstOperand - secondOperand;
                    break;
                case '*':
                    result = firstOperand * secondOperand;
                    break;
                case '/':
                    if (secondOperand === 0) {
                        this.showError('Cannot divide by zero');
                        return null;
                    }
                    result = firstOperand / secondOperand;
                    break;
                default:
                    return null;
            }
            
            // Check for invalid results
            if (!isFinite(result)) {
                this.showError('Invalid operation');
                return null;
            }
            
            return result;
        } catch (error) {
            this.showError('Calculation error');
            return null;
        }
    }
    
    getOperatorSymbol(operator) {
        const symbols = {
            '+': '+',
            '-': '−',
            '*': '×',
            '/': '÷'
        };
        return symbols[operator] || operator;
    }
    
    clearAll() {
        this.currentInput = '0';
        this.previousInput = null;
        this.operator = null;
        this.waitingForOperand = false;
        this.history = '';
        this.updateDisplay();
    }
    
    clearEntry() {
        this.currentInput = '0';
        this.updateDisplay();
    }
    
    deleteLast() {
        if (this.currentInput.length > 1 && this.currentInput !== '0') {
            this.currentInput = this.currentInput.slice(0, -1);
        } else {
            this.currentInput = '0';
        }
        this.updateDisplay();
    }
    
    showError(message) {
        this.errorMessage.textContent = message;
        this.errorMessage.classList.add('error-show');
        
        setTimeout(() => {
            this.clearError();
        }, 3000);
    }
    
    clearError() {
        this.errorMessage.textContent = '';
        this.errorMessage.classList.remove('error-show');
    }
}

// Global functions for button onclick events
let calculator;

function appendNumber(num) {
    calculator.inputNumber(num);
}

function appendOperator(op) {
    calculator.inputOperator(op);
}

function appendDecimal() {
    calculator.inputDecimal();
}

function calculate() {
    calculator.calculate();
}

function clearAll() {
    calculator.clearAll();
}

function clearEntry() {
    calculator.clearEntry();
}

function deleteLast() {
    calculator.deleteLast();
}

// Initialize calculator when page loads
document.addEventListener('DOMContentLoaded', () => {
    calculator = new Calculator();
    
    // Add visual feedback for button clicks
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Add keyboard highlighting
        button.addEventListener('mousedown', function() {
            this.style.boxShadow = 'inset 0 2px 10px rgba(0,0,0,0.2)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.boxShadow = '';
        });
    });
    
    // Add focus styles for accessibility
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('focus', function() {
            this.style.outline = '2px solid #007bff';
            this.style.outlineOffset = '2px';
        });
        
        button.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
});