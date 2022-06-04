<script lang="ts" context="module">
	import getTopCoins from '$lib/third-party/coingecko/methods/fetchTopCoins';
	import { fiatCurrencyStore } from '$lib/stores/FiatCurrencyStore';
	import { get } from 'svelte/store';

	var currency = get(fiatCurrencyStore).selectedCurrency;

	export async function load() {
		const coinsData = await getTopCoins(currency, 10);
		const globalData = await fetchGlobalData();
		return { props: { coins: coinsData, globalData: globalData } };
	}
</script>

<script lang="ts">
	import FrontPageLogo from '$lib/components/logos/FrontPageLogo.svelte';
	import CoinsTable from '$lib/components/content/CoinsTable.svelte';
	import type { Coins } from '$lib/third-party/coingecko/types/Coins';
	import type { GlobalData } from '$lib/third-party/coingecko/types/GlobalData';
	import fetchGlobalData from '$lib/third-party/coingecko/methods/fetchGlobalData';
	import MarketSummary from '$lib/components/content/coins-table/MarketSummary.svelte';

	export let coins: Coins;
	export let globalData: GlobalData;

	async function fetchCoins() {
		coins = await getTopCoins($fiatCurrencyStore.selectedCurrency, 10);
	}

	let btcPrice = coins[0].current_price;

	$: $fiatCurrencyStore.selectedCurrency, fetchCoins();
</script>

<section class="block m-auto ">
	<FrontPageLogo />
</section>

<section>
	<CoinsTable {coins}>
		<MarketSummary {globalData} {btcPrice} />
	</CoinsTable>
</section>
