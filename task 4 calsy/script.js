function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = new Function('return ' + display.value)();
    } catch {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    const display = document.getElementById('display');
    try {
        const result = parseFloat(display.value) / 100;
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === '%') {
        calculatePercentage();
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
});

document.getElementById('display').addEventListener('focus', clearDisplay);
