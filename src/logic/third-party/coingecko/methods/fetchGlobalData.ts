import { request } from "$logic/third-party/utility/request";
import type { GlobalData } from "../types/GlobalData";
import { URL } from "../utils/constants";

const ENDPOINT = "/global";

export default function fetchGlobalData(): Promise<GlobalData> {
    var queryString = `${URL}${ENDPOINT}`;
    return request(queryString);
}