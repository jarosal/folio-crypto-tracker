import { request } from "$lib/third_party/utility/request";
import type { Currency } from "src/types";
import type { Coins } from "../types/coins";
import { URL } from "../utility/constants";

const ENDPOINT = "/coins/markets";

export default function getTopCoins(currency: Currency, amount: number): Promise<Coins> {
    var queryString = `${URL}${ENDPOINT}?vs_currency=${currency.shortName}&order=market_cap_desc&per_page=${amount}&page=1&sparkline=false`;
    return request(queryString);
}