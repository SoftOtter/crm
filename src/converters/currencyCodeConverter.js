export function currencyCodeConverter (currencyCode) {
    switch (currencyCode) {
        case 'RUB': return '₽';
        case 'USD': return '$';
        case 'EUR': return '€';
        default: return '';
    };
};
