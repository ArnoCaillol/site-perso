<script>
    import "../app.css";
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>
<Header />

{#key data.currentRoute}
	<main class="container mx-auto" 
	in:fly={{ y: -50, duration: 250, delay: 300 }}
	out:fly={{ y: -50, duration: 250 }}>
		<slot />
	</main>
{/key}

<Footer />