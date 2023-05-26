<script lang="ts">
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.postcss';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<meta name="description" content="" />
	<title>Roda Belém - A sua escolha para acessibilidade</title>
</svelte:head>

<div class="bg-slate-200 flex flex-col gap-2">
	<NavBar />

	<main class="overflow-hidden">
		<slot />
	</main>

	<Footer />
	<!-- Google tag (gtag.js) -->
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-PEJLD7WR10"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-PEJLD7WR10');
	</script>
</div>
