const calculator = document.querySelector('.calculator');
const result = document.querySelector('#result');
calculator.addEventListener('click', function (event) {
    if (!event.target.classList.contains('calculator-button')) return;

    const value = (event.target.innerText);
    switch (value) {
        case 'C':
            result.innerText = '';
            break;
        case '=':
            result.innerText = eval(result.innerText).toFixed();
            break;
        default:
            if (/[\d+\-*/.%]/.test(value)) {
                result.innerText += value;
            }
    }
    });

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        result.innerText += key;
    } else if (/[\+\-\*\/]/.test(key)) {
        result.innerText += key;
    } else if (key === 'Enter') {
        result.innerText = eval(result.innerText).toFixed();
    } else if (key === 'Escape') {
        result.innerText = '';
    }
});

