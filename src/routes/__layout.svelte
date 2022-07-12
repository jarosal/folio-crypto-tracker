<script lang="ts">
	import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';
	import '../app.css';
	import { Nav, Footer } from '$components/layout';
	import { fade } from 'svelte/transition';
</script>

<SvelteTheme attribute="class" />

<Nav />

<main class="min-h-screen mt-[120px] xl:min-h-layout">
	<div class="container mx-auto grid justify-center" transition:fade={{ duration: 150 }}>
		<slot />
	</div>
</main>

<Footer />
