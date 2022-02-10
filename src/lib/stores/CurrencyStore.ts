import { writable } from 'svelte/store';
import type { Currency } from 'src/types';

export interface CurrencyStore {
    selectedCurrency: Currency;
}

export const setCurrency = (currency: Currency): void => currencyStore.update((store) => ({ ...store, currency }));

export const currencyStore = writable<CurrencyStore>(
    {
        selectedCurrency: undefined
    }
);

export default currencyStore;