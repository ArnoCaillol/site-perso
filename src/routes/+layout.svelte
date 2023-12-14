<script>
	import "../app.css";
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import * as THREE from 'three';
	import WAVES from 'vanta/dist/vanta.waves.min';
	import { onMount } from "svelte";
	import { onNavigate } from '$app/navigation';
	
	onNavigate((navigation) => {
		document.documentElement.classList[navigation.delta ? 'add' : 'remove']('back-transition');
		
		if (!document.startViewTransition) return;
		
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
	
	onMount(() => {
		WAVES({
			el: "#waves",
			THREE: THREE,
			mouseControls: true,
			touchControls: true,
			gyroControls: true,
			scale: 1.00,
			scaleMobile: 1.00,
			color: 0x272935,
			shininess: 10.00,
			waveHeight: 20.00,
			zoom: 1
		})
	});

	export let data;
</script>

<Header />
<div id="waves">
	<div id="overlay" class="backdrop-blur-sm" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>
</div>
{#key data.currentRoute}
<main id="main" class="container mx-auto min-h-screen">
	<slot />
</main>
{/key}

<Footer />

<style>
	#waves {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1; /* Ensure it's behind other content */
	}
	
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}
	
	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}
	
	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}
	
	@keyframes slide-to-right {
		to {
			transform: translateX(30px);
		}
	}
	
	@keyframes slide-from-left {
		from {
			transform: translateX(-30px);
		}
	}
	
	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}
	
	:root::view-transition-old(root) {
		animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}
	
	:root::view-transition-new(root) {
		animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in, 300ms cubic-bezier(0.4, 0, 0.2, 1) both
		slide-from-right;
	}
	/* Overrides for 'back' transitions */
	:root.back-transition::view-transition-old(root) {
		animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-right;
	}
	
	:root.back-transition::view-transition-new(root) {
		animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in, 300ms cubic-bezier(0.4, 0, 0.2, 1) both
		slide-from-left;
	}
</style>