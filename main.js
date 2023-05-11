const calculator = document.querySelector('.calculator');
const result = document.querySelector('#result');
calculator.addEventListener('click', function (event){
    if (!event.target.classList.contains('calculator-button')) return;

    const value = (event.target.innerText);
    switch (value) {
        case 'C':
            result.innerText = '';
            break;
        case '=':
            result.innerText = eval(result.innerText).toFixed(2);
            break;
        default:
            result.innerText += value;
    }
    });

//const calculatorButtons = document.querySelectorAll('.calculator-button');
//const result = document.querySelector('#result');
/*calculatorButtons.forEach(calc => {
    calc.addEventListener('click', function (event) {
        const value = (event.target.innerText);
        switch (value) {
            case 'C':
                result.value = '';
                break;
            case '=':
                result.value = eval(result.value).toFixed(2);
                break;
            default:
                result.value += value;
        }
    });
})*/