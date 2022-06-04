import type { FiatCurrency } from "$lib/stores/FiatCurrencyStore";
import { request } from "$lib/third-party/utility/request";
import type { Coins } from "../types/Coins";
import { URL } from "../utils/constants";

const ENDPOINT = "/coins/markets";

export default function fetchTopCoins(currency: FiatCurrency, amount: number): Promise<Coins> {
    var queryString = `${URL}${ENDPOINT}?vs_currency=${currency.shortName}&order=market_cap_desc&per_page=${amount}&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;
    return request(queryString);
}