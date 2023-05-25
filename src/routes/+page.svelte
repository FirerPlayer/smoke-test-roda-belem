<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	import GetApp from '$lib/components/GetApp.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Contribute from '$lib/components/features/Contribute.svelte';
	import Explore from '$lib/components/features/Explore.svelte';
	import GetInformed from '$lib/components/features/GetInformed.svelte';
	import Share from '$lib/components/features/Share.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<Hero />
<div class="bg-brand-500 text-white">
	<Explore />
	<GetInformed />
	<Share />
	<Contribute />
	<GetApp />
	<Contact {data} />
</div>
