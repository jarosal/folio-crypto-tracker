<script lang="ts">
	import { onMount } from 'svelte';
	import { fiatCurrencyStore } from '$lib/stores/FiatCurrencyStore';
	import fetchTopCoins from '$lib/third-party/coingecko/methods/fetchTopCoins';
	import FrontPageLogo from '$lib/components/common/FrontPageLogo.svelte';
	import CoinsTable from '$lib/components/content/CoinsTable.svelte';
	import type { Coins } from '$lib/third-party/coingecko/types/Coins';
	import type { GlobalData } from '$lib/third-party/coingecko/types/GlobalData';
	import fetchGlobalData from '$lib/third-party/coingecko/methods/fetchGlobalData';
	import MarketSummary from '$lib/components/content/coins-table/MarketSummary.svelte';
	import Loading from '$lib/components/common/Loading.svelte';

	let coins: Coins = null;
	let globalData: GlobalData = null;
	let btcPrice: number = 15;

	onMount(async () => {
		await setCoins().then(() => {
			setBtcPrice();
		});
		await setGlobalData();
	});

	async function setCoins() {
		coins = await fetchTopCoins($fiatCurrencyStore.selectedCurrency, 10);
	}

	async function setGlobalData() {
		globalData = await fetchGlobalData();
	}

	function setBtcPrice() {
		btcPrice = coins.find((x) => x.symbol == 'btc').current_price;
	}

	$: $fiatCurrencyStore.selectedCurrency,
		setCoins().then(() => {
			setBtcPrice();
		});
</script>

<section class="block m-auto">
	<FrontPageLogo />
</section>

<section>
	{#if coins && globalData}
		<CoinsTable {coins}>
			<MarketSummary {globalData} {btcPrice} />
		</CoinsTable>
	{:else}
		<div class="h-96 grid place-items-center">
			<Loading />
		</div>
	{/if}
</section>
