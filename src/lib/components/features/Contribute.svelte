<script lang="ts">
	import f4 from '$lib/assets/f4.png';
	import { getScrollPercent } from '$lib/utils';
	import anime from 'animejs';
	import { onMount } from 'svelte';

	let feature: HTMLElement;
	const getaAnim = (target: Element) =>
		anime({
			targets: target,
			translateX: ['300%', '0%'],
			duration: 2000,
			autoplay: false,
			easing: 'easeOutSine'
		});
	onMount(() => {
		window.addEventListener('scroll', () => {
			let sp = getScrollPercent(feature, 1200, -1200);
			let anim = getaAnim(feature);
			anim.seek(sp * anim.duration);
		});
	});
</script>

<div class="min-h-[600px] w-full flex flex-row-reverse flex-wrap justify-around items-center p-8">
	<img bind:this={feature} src={f4} alt="Recurso contribuir" width="600px" height="600px" />
	<div class="flex flex-col items-start max-w-lg">
		<h1 class="text-6xl text-gray-800 font-bold mb-10">Compartilhe experiências</h1>
		<p class="text-lg text-justify font-semibold">
			O Roda Belém é mais do que um simples aplicativo. Ele é uma ferramenta que promove a
			acessibilidade e inclusão para cadeirantes e pessoas com dificuldade de locomoção na nossa
			cidade. Ao usar e apoiar o Roda Belém, você está fazendo a diferença e ajudando a criar um
			ambiente mais inclusivo para todos.
			<!-- Junte-se à nossa comunidade e
			compartilhe suas próprias experiências para ajudar outras pessoas a encontrar locais
			acessíveis na cidade. -->
		</p>
	</div>
</div>
