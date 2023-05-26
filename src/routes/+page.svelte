<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	import GetApp from '$lib/components/GetApp.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Contribute from '$lib/components/features/Contribute.svelte';
	import Explore from '$lib/components/features/Explore.svelte';
	import GetInformed from '$lib/components/features/GetInformed.svelte';
	import Share from '$lib/components/features/Share.svelte';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
	let initSection: HTMLElement;
	let contactRef: HTMLElement;
</script>

<Hero {initSection} />
<div class="bg-brand-500 text-white">
	<section bind:this={initSection} title="Explorar"><Explore /></section>
	<GetInformed />
	<Share />
	<Contribute />
	<GetApp {contactRef} />
	<section bind:this={contactRef}><Contact {data} /></section>
</div>
