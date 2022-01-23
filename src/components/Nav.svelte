<script>
	import ThemeSwitch from '$components/nav/ThemeSwitch.svelte';
	import CurrencySwitch from '$components/nav/CurrencySwitch.svelte';
</script>

<nav class="flex items-center justify-center mx-auto absolute top-5 right-0 left-1/3">
	<a class="mx-4 text-lg" href="/">Login</a>
	<a class="mx-4 text-lg" href="/about">Register</a>
	<CurrencySwitch />
	<ThemeSwitch />
</nav>
