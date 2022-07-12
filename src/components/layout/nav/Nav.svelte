<script lang="ts">
	import UserPanel from '$components/layout/nav/UserPanel.svelte';
	import ThemeSwitch from '$components/layout/nav/ThemeSwitch.svelte';
	import CurrencySwitch from '$components/layout/nav/CurrencySwitch.svelte';
</script>

<nav class="w-full absolute inset-x-0 top-0 p-10">
	<div class="flex justify-between mx-24">
		<div />
		<!-- placeholder for logo -->

		<div class="flex items-center gap-4">
			<UserPanel />
			<CurrencySwitch />
			<ThemeSwitch />
		</div>
	</div>
</nav>
