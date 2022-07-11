import { request } from "$logic/third-party/utility/request";
import type { FiatCurrency } from "$stores/FiatCurrencyStore";
import type { MarketChart } from "../types/MarketChart";
import { URL } from "../utils/constants";

const ENDPOINT = "/coins";

export default function fetchCoinData(coinId: string, currency: FiatCurrency, daysToFetch: number): Promise<MarketChart> {
    var queryString = `${URL}${ENDPOINT}/${coinId}/market_chart?vs_currency=${currency.shortName}&days=${daysToFetch}}`;
    return request(queryString);
}