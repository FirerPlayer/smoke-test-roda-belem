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
</div>
