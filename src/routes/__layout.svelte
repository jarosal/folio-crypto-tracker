<script lang="ts">
	import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';
	import '../app.css';
	import Nav from '$lib/components/layout/Nav.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<SvelteTheme attribute="class" />

<Nav />

<main class="min-h-screen mt-[120px] xl:min-h-layout">
	<div class="container mx-auto grid justify-center">
		<slot />
	</div>
</main>

<Footer />
