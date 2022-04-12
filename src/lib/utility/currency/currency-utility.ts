import type { Currency } from "src/types";

export function getCurrencyString(currency: Currency): string {
    return `${currency.sign} ${currency.shortName.toUpperCase()}`
};