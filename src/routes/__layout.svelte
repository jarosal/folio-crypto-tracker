<script lang="ts">
	import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<SvelteTheme attribute="class" />

<Nav />

<main class="min-h-screen mt-[120px] text-white xl:min-h-layout">
	<div class="container mx-auto w-full grid justify-center px-6 lg:px-32">
		<slot />
	</div>
</main>

<Footer />
