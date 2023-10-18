<script>
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.png';
	import Switch from './Switch.svelte'
</script>
<header class="sticky top-0 z-50 navbar bg-base-100 shadow-md">
	<div class="flex-1">
		<a aria-current={$page.url.pathname === '/' ? 'page' : undefined} href="/" class="btn btn-ghost normal-case text-xl"><img src="{logo}"></a>
		<span class="hidden md:block text-xl ml-2">Arnaud Caillol</span>
	</div>
	<nav class="flex-none">
		<ul class="menu menu-horizontal items-center px-1">
			<li><a aria-current={$page.url.pathname.startsWith('/projets') ? 'page' : undefined} href="/projets">Projets</a></li>
			<li><a aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined} href="/contact">Contact</a></li>
			<li><Switch /></li>
		</ul>
	</nav>
</header>
<style>
	img {
		height: 100%;
	}
	
	header {
		display: flex;
		justify-content: space-between;
		view-transition-name: header;
	}
	
	a[aria-current='page']::before {
		content: '●';
		font-size: 0.7rem;
		padding-right: 2px;
		color: #05d797;
		view-transition-name: active-page;
	}
</style>