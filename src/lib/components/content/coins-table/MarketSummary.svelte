<script lang="ts">
	import type { GlobalData } from '$lib/third-party/coingecko/types/GlobalData';
	import PriceChange from './PriceChange.svelte';
	import { roundNumber } from '$lib/third-party/coingecko/utils/formatting/numbers';
	import MarketCap from './market-summary/MarketCap.svelte';

	export let globalData: GlobalData;
	export let btcPrice: number;

	const data = globalData.data;
	const priceChange = data.market_cap_change_percentage_24h_usd;
	const btcMarketCap = data.total_market_cap['btc'];
	const bitcoinDominance = roundNumber(data.market_cap_percentage['btc']);
	const ethereumDominance = roundNumber(data.market_cap_percentage['eth']);
</script>

<p class="text-eggshell-50 font-lato font-black text-xl">Top 10 cryptocurrency prices by Market cap</p>
<p class="text-eggshell-50 font-lato font-bold text-[11px]">
	The global cryptocurrency market cap is <MarketCap {btcMarketCap} {btcPrice} />, a <PriceChange {priceChange} /> in the last 24 hours.
</p>
<p class="text-eggshell-50 font-lato font-bold text-[11px]">
	Bitcoin dominance is at {bitcoinDominance}% and Ethereum dominance is at {ethereumDominance}%
</p>
