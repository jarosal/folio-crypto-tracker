const NUMBER_FORMAT_EN_US = new Intl.NumberFormat('en-US');

export function formatMarketCap(marketCap: number): string {
    return NUMBER_FORMAT_EN_US.format(marketCap);
}

export function roundNumber(priceChange: number, decimalPlaces: number = 2): string {
    return priceChange.toFixed(decimalPlaces);
}