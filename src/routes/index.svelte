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

	export let coins: Coins;
</script>

<section>
	<FolioBigLogo />
</section>

<section class="w-full">
	<div class="w-full h-96 bg-red-300 dark:bg-zinc-50" />
	<p>{coins}</p>
</section>
