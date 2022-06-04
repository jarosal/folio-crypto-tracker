<script context="module" lang="ts">
	import { fiatCurrencyStore } from '$lib/stores/FiatCurrencyStore';
	import fetchCoinData from '$lib/third-party/coingecko/methods/fetchCoinData';
	import fetchMarketChart from '$lib/third-party/coingecko/methods/fetchMarketChart';
	import type { CoinData } from '$lib/third-party/coingecko/types/CoinData';
	import type { MarketChart } from '$lib/third-party/coingecko/types/MarketChart';
	import { get } from 'svelte/store';

	const selectedFiatCurrency = get(fiatCurrencyStore).selectedCurrency;

	export async function load({ fetch, params }) {
		const coinId = params.id;
		const coinData = await fetchCoinData(coinId);
		const marketChart = await fetchMarketChart(coinId, selectedFiatCurrency, 7);

		return { props: { coinData, marketChart } };
	}
</script>

<script lang="ts">
	export let coinData: CoinData;
	export let marketChart: MarketChart;
</script>

<p>{coinData.name}</p>
<p>{marketChart.prices[0][1]}</p>
