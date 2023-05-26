<script lang="ts">
	import f1 from '$lib/assets/f1.png';
	import { getScrollPercent } from '$lib/utils';
	import anime from 'animejs';
	import { onMount } from 'svelte';
	let feature: HTMLElement;
	const getaAnim = (target: Element) =>
		anime({
			targets: target,
			translateX: ['-120%', '0%'],
			duration: 2000,
			autoplay: false,
			easing: 'easeOutSine'
		});
	onMount(() => {
		window.addEventListener('scroll', () => {
			let sp = getScrollPercent(feature, 600, -100);
			let anim = getaAnim(feature);
			anim.seek(sp * anim.duration);
		});
	});
</script>

<div class="min-h-[600px] w-full flex flex-row flex-wrap justify-around items-center p-8">
	<img bind:this={feature} src={f1} alt="Recurso explorar" width="600px" height="600px" />
	<div class="flex flex-col items-start max-w-lg">
		<h1 class="text-6xl text-gray-800 font-bold mb-10">Explore</h1>
		<p class="text-lg text-justify font-semibold">
			Explore a cidade e encontre os melhores locais para <span>você</span>. Abra o mapa e veja
			todos os locais proximo a você, como restaurantes, lojas, shoppings, praças, parques, etc...
			Com o Roda Belém, você consegue descobrir locais de forma inclusiva e fácil.
		</p>
	</div>
</div>
