<script lang="ts">
	import type { Coins } from '$logic/third-party/coingecko/types/Coins';
	import { fiatCurrencyStore } from '$stores';
	import { formatMarketCap, roundNumber } from '$logic/utils/formatting';
	import { PriceChange } from '$components/common';
	import { goto } from '$app/navigation';

	export let coins: Coins;
</script>

<slot />

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
		<tr
			class="border-b border-eggshell-50 font-normal text-[13px] hover:bg-lavender-600 dark:hover:bg-raisin-700 hover:cursor-pointer"
			on:click={() => {
				goto(`/coin/${coin.id}`);
			}}
		>
			<td class="px-4 py-3 text-center">{index + 1}</td>
			<td class="px-4 py-3 flex items-center "><img class="w-4 h-4 mr-2" src={coin.image} alt="coin icon" />{coin.name}</td>
			<td class="px-4 py-3 text-right">{$fiatCurrencyStore.selectedCurrency.sign}{roundNumber(coin.current_price)}</td>
			<td class="px-4 py-3 text-right"><PriceChange priceChange={coin.price_change_percentage_1h_in_currency} /></td>
			<td class="px-4 py-3 text-right"><PriceChange priceChange={coin.price_change_percentage_24h_in_currency} /></td>
			<td class="px-4 py-3 text-right"><PriceChange priceChange={coin.price_change_percentage_7d_in_currency} /></td>
			<td class="px-4 py-3 text-right">{$fiatCurrencyStore.selectedCurrency.sign}{formatMarketCap(coin.market_cap)}</td>
		</tr>
	{/each}
</table>
