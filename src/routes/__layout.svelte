<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main class="h-screen flex items-center px-6 lg:px-32 bg-purple-900 text-white">
	<Nav />
	<section class="w-full grid place-items-center h-screen">
		<slot />
	</section>
	<Footer />
</main>
