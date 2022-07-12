<script lang="ts">
	import { onMount } from 'svelte';
	import { fiatCurrencyStore } from '$stores';
	import fetchTopCoins from '$logic/third-party/coingecko/methods/fetchTopCoins';
	import { FrontPageLogo, Loading } from '$components/common';
	import type { Coins } from '$logic/third-party/coingecko/types/Coins';
	import type { GlobalData } from '$logic/third-party/coingecko/types/GlobalData';
	import fetchGlobalData from '$logic/third-party/coingecko/methods/fetchGlobalData';
	import { MarketSummary, CoinsTable } from '$components/content/';

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
