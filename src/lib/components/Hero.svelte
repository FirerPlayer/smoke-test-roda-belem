<script lang="ts">
	import wave from '$lib/assets/wave.svg';
	import wheelchair from '$lib/assets/wheelchair.png';
	import anime from 'animejs';
	import { slide } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { tweened, type Tweened } from 'svelte/motion';
	import { browser } from '$app/environment';

	let active = false;
	export let initSection: HTMLElement;

	onMount(() => {
		anime({
			targets: '#wheel',
			rotate: 360,
			duration: 5000,
			easing: 'linear',
			loop: true
		});
	});
</script>

<div
	style="background-image: url({wave});"
	class="min-h-screen flex flex-col items-center justify-center bg-cover"
>
	<div class="w-full p-8 flex max-md:flex-col gap-y-12 items-center">
		<div class="max-w-lg mr-auto flex flex-col gap-1">
			<h1
				class="w-fit text-6xl font-bold mb-6 flex flex-col md:flex-row items-start md:items-center gap-3"
			>
				<span class="text-brand-500">Roda</span> Belém
				<span class="w-16">
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="wheel">
						<!-- circle -->
						<path
							d="M 373.7 355 C 373.7 357.883 372.448 360.685 370.566 362.566 C 368.685 364.448 365.883 365.7 363 365.7 C 360.117 365.7 357.315 364.448 355.434 362.566 C 353.552 360.685 352.3 357.883 352.3 355 C 352.3 352.117 353.552 349.315 355.434 347.434 C 357.315 345.552 360.117 344.3 363 344.3 C 365.883 344.3 368.685 345.552 370.566 347.434 C 372.448 349.315 373.7 352.117 373.7 355 Z M 369.156 348.844 C 367.526 347.214 365.476 346.294 363 346.294 C 360.524 346.294 358.474 347.214 356.844 348.844 C 355.214 350.474 354.294 352.524 354.294 355 C 354.294 357.476 355.214 359.526 356.844 361.156 C 358.474 362.786 360.524 363.706 363 363.706 C 365.476 363.706 367.526 362.786 369.156 361.156 C 370.786 359.526 371.706 357.476 371.706 355 C 371.706 352.524 370.786 350.474 369.156 348.844 Z"
							style="fill-rule: nonzero; fill: rgb(126, 126, 126);"
							transform="matrix(1.002024, 0, 0, 1.003943, -351.773132, -344.418915)"
						/>
						<!-- wheel -->
						<path
							d="M12 10V3M13.4141 10.5857L18.3639 5.63599M14 12H21M13.4143 13.4141L18.364 18.3639M12 14V21M10.5859 13.4143L5.63611 18.364M10 12H3M10.5857 10.5859L5.63599 5.63611M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
			</h1>
			<p class="text-2xl mb-4 [&>span]:text-sky-500 [&>span]:font-bold">
				Informações para uma locomoção fácil, sem obstáculos e <span>inclusiva</span>
			</p>
			<p class="text-lg mb-4 [&>span]:text-sky-500 [&>span]:font-bold">
				<span>Acabe</span> com <span>problemas</span> como não encontrar rampas em um restaurante, ou
				não ter uma entrada acessivel para você
			</p>
			<h2 class="text-3xl self-center">👇</h2>
			<div class="inline-grid [&>*]:col-start-1 [&>*]:row-start-1">
				{#if active}
					<div
						transition:slide={{ duration: 500, easing: sineOut }}
						class="w-full h-full bg-sky-500 rounded-lg"
					/>
				{/if}
				<button
					on:blur={() => {
						active = false;
					}}
					on:focus={() => {
						active = true;
					}}
					on:pointerenter={() => {
						active = true;
					}}
					on:pointerleave={() => {
						active = false;
					}}
					on:pointerup={() => {
						initSection.scrollIntoView({
							behavior: 'smooth'
						});
					}}
					class="w-full h-full active:appearance-none py-8 px-4 border-2 rounded-lg border-black text-3xl font-bold z-10"
				>
					Começar
				</button>
			</div>
		</div>
		<img src={wheelchair} alt="wheelchair" class="-sale-x-100" width="700px" />
	</div>
</div>
