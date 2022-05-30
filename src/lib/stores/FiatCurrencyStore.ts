import { writable } from 'svelte/store';
import { currencies } from '$lib/utility/currency/availableFiatCurrencies';

export type FiatCurrency = {
    sign: string;
    shortName: string;
    fullName: string;
}

export interface FiatCurrencyStore {
    selectedCurrency: FiatCurrency;
}

export const availableFiatCurrencies = currencies;

export const fiatCurrencyStore = writable<FiatCurrencyStore>(
    {
        selectedCurrency: currencies[0]
    }
);

export function getCurrencyString(currency: FiatCurrency): string {
    return `${currency.sign} ${currency.shortName.toUpperCase()}`
};