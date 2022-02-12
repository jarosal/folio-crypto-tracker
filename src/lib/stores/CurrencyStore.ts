import { writable } from 'svelte/store';
import { currencies } from '$lib/utility/currency/currencies';
import type { Currency } from 'src/types';

export interface CurrencyStore {
    selectedCurrency: Currency;
}

export const setCurrency = (currency: Currency): void => currencyStore.update((store) => ({ ...store, currency }));

export const currencyStore = writable<CurrencyStore>(
    {
        selectedCurrency: currencies[0]
    }
);

export default currencyStore;