export const moneyFormatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'KZT',
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});
