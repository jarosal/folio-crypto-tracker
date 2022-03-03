<script lang="ts">
	import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<SvelteTheme attribute="class" />

<main class="h-screen flex items-center px-6 lg:px-32 bg-purple-900 text-white">
	<Nav />
	<section class="w-full grid grid-cols-1 row-start-1 place-items-center h-screen">
		<slot />
	</section>
	<Footer />
</main>
