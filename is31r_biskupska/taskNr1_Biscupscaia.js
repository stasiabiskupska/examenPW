let number = prompt('Введите число', '');
let result;
if(+number > 0) {
    result = '1';
} else if (+number < 0) {
    result = '-1';
} else if (+number === 0) {
    result = '0';
} else {
    result = 'Error';
}
alert('Результат проверки: ' + result);