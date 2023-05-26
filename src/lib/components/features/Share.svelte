<script lang="ts">
	import f3 from '$lib/assets/f3.png';
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
			let sp = getScrollPercent(feature, 600, -900);
			let anim = getaAnim(feature);
			anim.seek(sp * anim.duration);
		});
	});
</script>

<div class="min-h-[600px] w-full flex flex-row flex-wrap justify-around items-center p-8">
	<img
		bind:this={feature}
		src={f3}
		alt="Recurso compartilhar experiências"
		width="600px"
		height="600px"
	/>
	<div class="flex flex-col items-start max-w-lg">
		<h1 class="text-6xl text-gray-800 font-bold mb-10">Compartilhe experiências</h1>
		<p class="text-lg text-justify font-semibold">
			No Roda Belém, você pode contar com avaliações e comentários de outros usuários sobre a
			acessibilidade dos locais. Isso permite que você tome decisões informadas e encontre os
			melhores lugares adaptados às suas necessidades de locomoção.
			<!-- Junte-se à nossa comunidade e
			compartilhe suas próprias experiências para ajudar outras pessoas a encontrar locais
			acessíveis na cidade. -->
		</p>
	</div>
</div>
