<script lang="ts">
	import f2 from '$lib/assets/f2.png';
	import { getScrollPercent } from '$lib/utils';
	import anime from 'animejs';
	import { onMount } from 'svelte';

	let feature: HTMLElement;
	const getaAnim = (target: Element) =>
		anime({
			targets: target,
			translateX: ['110%', '0%'],
			duration: 2000,
			autoplay: false,
			easing: 'easeOutSine'
		});
	onMount(() => {
		window.addEventListener('scroll', () => {
			let sp = getScrollPercent(feature, 600, -200);
			let anim = getaAnim(feature);
			anim.seek(sp * anim.duration);
		});
	});
</script>

<div class="min-h-[600px] w-full flex flex-row-reverse flex-wrap justify-around items-center p-8">
	<img bind:this={feature} src={f2} alt="Recurso informar-se" width="600px" height="600px" />
	<div class="flex flex-col items-start max-w-lg">
		<h1 class="text-6xl text-gray-800 font-bold mb-10">Informe-se</h1>
		<p class="text-lg text-justify font-semibold">
			O Roda Belém fornece informações sobre acessibilidade em locais, como rampas de acesso,
			banheiros adaptados e elevadores, para ajudar cadeirantes e pessoas com dificuldade de
			locomoção a encontrar locais acessíveis de forma fácil e rápida.
		</p>
	</div>
</div>
