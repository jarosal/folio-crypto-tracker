import type { Currencies, Currency } from "src/types";

const usd: Currency = {
    sign: '$',
    shortName: 'usd',
    fullName: 'US dollar'
}

const eur: Currency = {
    sign: '€',
    shortName: 'eur',
    fullName: 'Euro'
}

export const currencies: Currencies = [usd, eur];