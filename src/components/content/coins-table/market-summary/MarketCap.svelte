<script lang="ts">
	import { fiatCurrencyStore } from 'src/stores/FiatCurrencyStore';

	export let btcMarketCap: number;
	export let btcPrice: number;

	const marketCap = btcMarketCap * btcPrice;

	function formatMarketCap(marketCap: number): string {
		let value: string;

		if (marketCap > 999999 && marketCap < 1000000000) {
			value = (marketCap / 1000000).toFixed(1) + ' Million';
		} else if (marketCap > 999999999 && marketCap < 1000000000000) {
			value = (marketCap / 1000000000).toFixed(1) + ' Billion';
		} else if (marketCap > 999999999999) {
			value = (marketCap / 1000000000000).toFixed(1) + ' Trillion';
		}

		return value;
	}
</script>

<span> {$fiatCurrencyStore.selectedCurrency.sign}{formatMarketCap(marketCap)} </span>
