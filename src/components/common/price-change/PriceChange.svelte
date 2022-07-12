<script lang="ts">
	import { roundNumber } from '$logic/utils/formatting';
	import GreenPriceChange from '$components/common/price-change/GreenPriceChange.svelte';
	import RedPriceChange from '$components/common/price-change/RedPriceChange.svelte';

	export let priceChange: number;

	const isChangeGreaterThanZero = priceChange > 0;
	const priceChangeString = `${roundNumber(priceChange)}%`;
</script>

{#if isChangeGreaterThanZero}
	<GreenPriceChange {priceChangeString} />
{:else}
	<RedPriceChange {priceChangeString} />
{/if}
