export function numberFormatConverter (number) {
    let result = '';
    if (typeof(number) === 'number') {
        result = new Intl.NumberFormat('ru-RU').format(number);
    }
    return result;
}