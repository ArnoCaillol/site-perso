<script>
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo-header.webp';
</script>
<header class="sticky top-0 z-50 navbar bg-base-100 shadow-md">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl"><img src="{logo}" width="47" height="47" alt="Arnaud Caillol">
			<span class="text-xl font-bold ml-2">Arnaud Caillol</span>
		</a>
	</div>
	<nav class="flex-none">
		<ul class="menu lg:menu-lg menu-horizontal items-center px-1 hidden md:inline-flex">
			<li><a aria-current={$page.url.pathname === '/' ? 'page' : undefined} href="/">Introduction</a></li>
			<li><a aria-current={$page.url.pathname.startsWith('/projets') ? 'page' : undefined} href="/projets">Projets</a></li>
			<li><a aria-current={$page.url.pathname.startsWith('/experiences') ? 'page' : undefined} href="/experiences">Expériences</a></li>
			<li><a aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined} href="/contact">Contact</a></li>
		</ul>
		<div class="dropdown dropdown-end inline-block md:hidden">
			<label tabindex="0" class="btn btn-ghost btn-square">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
			</label>
			<ul tabindex="0" class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				<li><a aria-current={$page.url.pathname === '/' ? 'page' : undefined} href="/">Introduction</a></li>
				<li><a aria-current={$page.url.pathname.startsWith('/projets') ? 'page' : undefined} href="/projets">Projets</a></li>
				<li><a aria-current={$page.url.pathname.startsWith('/experiences') ? 'page' : undefined} href="/experiences">Expériences</a></li>
				<li><a aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined} href="/contact">Contact</a></li>
			</ul>
		</div>
	</nav>
</header>
<style>
	header {
		display: flex;
		justify-content: space-between;
		view-transition-name: header;
	}
	
	a[aria-current='page']::before {
		content: '';
		width: 15px;
		height: 15px;
		border-radius: 1px;
		transform: skewX(-15deg);
		z-index: 1;
		overflow: hidden;
		transition: .5s;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Initial shadow */
		background-color: #05d797;
		view-transition-name: active-page;
	}
</style>