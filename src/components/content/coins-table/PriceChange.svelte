<script lang="ts">
	import { roundNumber } from '$logic/third-party/coingecko/utils/formatting/numbers';
	import GreenPriceChange from './price-change/GreenPriceChange.svelte';
	import RedPriceChange from './price-change/RedPriceChange.svelte';

	export let priceChange: number;

	const isChangeGreaterThanZero = priceChange > 0;
	const priceChangeString = `${roundNumber(priceChange)}%`;
</script>

{#if isChangeGreaterThanZero}
	<GreenPriceChange {priceChangeString} />
{:else}
	<RedPriceChange {priceChangeString} />
{/if}
