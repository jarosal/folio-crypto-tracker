import type { Currency } from "src/types";

export default function getTextForCurrency(currency: Currency): string {
    return `${currency.sign} ${currency.shortName.toUpperCase()}`
};