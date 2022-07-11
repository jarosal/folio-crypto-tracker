<script lang="ts">
	import { onMount } from 'svelte';
	import { fiatCurrencyStore } from 'src/stores/FiatCurrencyStore';
	import fetchTopCoins from 'src/third-party/coingecko/methods/fetchTopCoins';
	import FrontPageLogo from 'src/components/common/FrontPageLogo.svelte';
	import CoinsTable from 'src/components/content/CoinsTable.svelte';
	import type { Coins } from 'src//third-party/coingecko/types/Coins';
	import type { GlobalData } from 'src/third-party/coingecko/types/GlobalData';
	import fetchGlobalData from 'src/third-party/coingecko/methods/fetchGlobalData';
	import MarketSummary from 'src/components/content/coins-table/MarketSummary.svelte';
	import Loading from 'src/components/common/Loading.svelte';

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
