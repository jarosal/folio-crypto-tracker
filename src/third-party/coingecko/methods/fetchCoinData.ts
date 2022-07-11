import { request } from "src/third-party/utility/request";
import type { CoinData } from "../types/CoinData";
import { URL } from "../utils/constants";

const ENDPOINT = "/coins";

export default function fetchCoinData(coinId: string): Promise<CoinData> {
    var queryString = `${URL}${ENDPOINT}/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
    return request(queryString);
}