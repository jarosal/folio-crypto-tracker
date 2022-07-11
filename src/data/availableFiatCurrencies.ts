import type { FiatCurrency } from "src/stores/FiatCurrencyStore";

const usd: FiatCurrency = {
    sign: '$',
    shortName: 'usd',
    fullName: 'US dollar'
}

const eur: FiatCurrency = {
    sign: '€',
    shortName: 'eur',
    fullName: 'Euro'
}

export const currencies = [usd, eur];