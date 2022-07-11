export type GlobalData = {
    data: {
        active_cryptocurrencies: number,
        total_market_cap: Array<{ coin: string, percentage: number }>,
        total_volume: Array<{ coin: string, percentage: number }>,
        market_cap_percentage: Array<{ coin: string, percentage: number }>,
        market_cap_change_percentage_24h_usd: number
    }
}