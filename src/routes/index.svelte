<script lang="ts" context="module">
	import getTopCoins from '$lib/third_party/coingecko/methods/getTopCoins';
	import { currencyStore } from '$lib/stores/CurrencyStore';
	import { get } from 'svelte/store';

	var currency = get(currencyStore).selectedCurrency;

	export async function load() {
		const data = await getTopCoins(currency, 10);
		return { props: { coins: data } };
	}
</script>

<script lang="ts">
	import FolioBigLogo from '$lib/components/common/FolioBigLogo.svelte';
	import type { Coins } from '$lib/third_party/coingecko/types/coins';
	import { getFormattedMarketCap, getRoundedPriceChange, getPriceChangeText } from '$lib/third_party/coingecko/utility/number-formatting-utility';

	export let coins: Coins;

	async function fetchCoins() {
		coins = await getTopCoins($currencyStore.selectedCurrency, 10);
	}

	$: $currencyStore.selectedCurrency, fetchCoins();
</script>

<section>
	<FolioBigLogo />
</section>

<section class="w-full">
	<table class="w-full rounded-t-lg m-5 mx-auto bg-gray-800 text-gray-200">
		<tr class="text-left border-b border-gray-300">
			<th class="px-4 py-3">#</th>
			<th class="px-4 py-3">Coin</th>
			<th class="px-4 py-3">Price</th>
			<th class="px-4 py-3">1h change</th>
			<th class="px-4 py-3">24h change</th>
			<th class="px-4 py-3">7d change</th>
			<th class="px-4 py-3">Market cap</th>
		</tr>
		{#each coins as coin, index}
			<tr class="bg-gray-700 border-b border-gray-600">
				<td class="px-4 py-3">{index + 1}</td>
				<td class="px-4 py-3 flex items-center"><img class="w-4 h-4 mr-2" src={coin.image} alt="coin icon" />{coin.name}</td>
				<td class="px-4 py-3">{$currencyStore.selectedCurrency.sign}{getRoundedPriceChange(coin.current_price)}</td>
				<td class="px-4 py-3">{@html getPriceChangeText(coin.price_change_percentage_1h_in_currency)}</td>
				<td class="px-4 py-3">{@html getPriceChangeText(coin.price_change_percentage_24h_in_currency)}</td>
				<td class="px-4 py-3">{@html getPriceChangeText(coin.price_change_percentage_7d_in_currency)}</td>
				<td class="px-4 py-3">{$currencyStore.selectedCurrency.sign}{getFormattedMarketCap(coin.market_cap)}</td>
			</tr>
		{/each}
	</table>
</section>
