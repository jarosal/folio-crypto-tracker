const PRICE_CHANGE_DECIMAL_PLACES = 2;
const NUMBER_FORMAT_EN_US = new Intl.NumberFormat('en-US');

export function getFormattedMarketCap(marketCap: number): string {
    return NUMBER_FORMAT_EN_US.format(marketCap);
}

export function getRoundedPriceChange(priceChange: number): string {
    return priceChange.toFixed(PRICE_CHANGE_DECIMAL_PLACES);
}

export function getPriceChangeText(priceChangeValue: number): string {
    const isChangeGreaterThanZero = priceChangeValue > 0;
    const symbol = isChangeGreaterThanZero ? '▲' : '▼';
    const color = isChangeGreaterThanZero ? 'green' : 'red';
    const roundedPriceChange = getRoundedPriceChange(priceChangeValue);

    return `<p class="text-${color}-500">${symbol} ${roundedPriceChange}%</p>`;
}