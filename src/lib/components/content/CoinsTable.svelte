<script lang="ts">
	import type { Coins } from '$lib/third-party/coingecko/types/Coins';
	import { currencyStore } from '$lib/stores/CurrencyStore';
	import { formatMarketCap, roundNumber } from '$lib/third-party/coingecko/utils/formatting/numbers';
	import MarketSummary from './coins-table/MarketSummary.svelte';
	import PriceChange from './coins-table/PriceChange.svelte';
	import type { GlobalData } from '$lib/third-party/coingecko/types/GlobalData';

	export let coins: Coins;
	export let globalData: GlobalData;

	const btcPrice = coins[0].current_price;
</script>

<MarketSummary {globalData} {btcPrice} />

<table style="width:100vh" class="m-5 mx-auto text-eggshell-50 font-lato">
	<tr class="border-b border-t border-eggshell-50 text-[14px]">
		<th class="px-4 py-3 text-center">#</th>
		<th class="px-4 py-3 text-left">Coin</th>
		<th class="px-4 py-3 text-right">Price</th>
		<th class="px-4 py-3 text-right">1h change</th>
		<th class="px-4 py-3 text-right">24h change</th>
		<th class="px-4 py-3 text-right">7d change</th>
		<th class="px-4 py-3 text-right">Market cap</th>
	</tr>
	{#each coins as coin, index}
		<tr class="border-b border-eggshell-50 font-normal text-[13px]">
			<td class="px-4 py-3 text-center">{index + 1}</td>
			<td class="px-4 py-3 flex items-center "><img class="w-4 h-4 mr-2" src={coin.image} alt="coin icon" />{coin.name}</td>
			<td class="px-4 py-3 text-right">{$currencyStore.selectedCurrency.sign}{roundNumber(coin.current_price)}</td>
			<td class="px-4 py-3 text-right"><PriceChange priceChange={coin.price_change_percentage_1h_in_currency} /></td>
			<td class="px-4 py-3 text-right"><PriceChange priceChange={coin.price_change_percentage_24h_in_currency} /></td>
			<td class="px-4 py-3 text-right"><PriceChange priceChange={coin.price_change_percentage_7d_in_currency} /></td>
			<td class="px-4 py-3 text-right">{$currencyStore.selectedCurrency.sign}{formatMarketCap(coin.market_cap)}</td>
		</tr>
	{/each}
</table>
