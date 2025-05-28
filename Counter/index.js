let counterElement = document.getElementById('counterValue');

function updateColor(value) {
    if (value > 0) {
        counterElement.style.color = 'green';
    } else if (value < 0) {
        counterElement.style.color = 'red';
    } else {
        counterElement.style.color = 'black';
    }
}

function onIncrement() {
    let previousValue = parseInt(counterElement.textContent);
    let updatedValue = previousValue + 1;
    counterElement.textContent = updatedValue;
    updateColor(updatedValue);
}

function onDecrement() {
    let previousValue = parseInt(counterElement.textContent);
    let updatedValue = previousValue - 1;
    counterElement.textContent = updatedValue;
    updateColor(updatedValue);
}

function onReset() {
    let counterValue = 0;
    counterElement.textContent = counterValue;
    counterElement.style.color = 'black';
}
