export type CoinData = {
    id: string;
    symbol: string;
    name: string;
    hashing_algorithm: string;
    links: {
        homepage: Array<string>
    };
    image: {
        thumb: string
    };
    genesis_date: string;
    market_cap_rank: number;
    market_data: {
        current_price: Array<{ currency: string, price: number }>,
        ath: Array<{ currency: string, price: number }>,
        ath_change_percentage: Array<{ currency: string, price: number }>,
        market_cap: Array<{ currency: string, price: number }>,
        total_volume: Array<{ currency: string, price: number }>,
        high_24h: Array<{ currency: string, price: number }>,
        low_24h: Array<{ currency: string, price: number }>,
        price_change_24h: number;
        price_change_percentage_24h: number;
        total_supply: number;
        max_supply: number;
        circulating_supply: number;
    }
}