<script lang="ts">
	import Globe from '$lib/components/Globe.svelte';
	import emailjs from '@emailjs/browser';
	//@ts-ignore
	import { Confetti } from 'svelte-confetti';
	import { Notyf } from 'notyf';
	import 'notyf/notyf.min.css';
	import { onMount } from 'svelte';
	import type { PageServerData } from '../../routes/$types';

	export let data: PageServerData;

	let notyf: Notyf;
	let form: HTMLFormElement;

	function sendEmail(e: Event) {
		if (form.checkValidity()) {
			emailjs.sendForm('portfolio-website', 'template_ri83ex9', form, data.emailPublicKey);
			notyf.success('Mensagem enviada! :D');
			showConfetti = true;
			if (someKey < 3) {
				someKey++;
			}
			form.reset();
			[...form.children].forEach((child) => {
				child.classList.remove(activeClass);
			});
		} else {
			const wrongInput = [...form.elements].find((element) => {
				const el = element as HTMLInputElement | HTMLTextAreaElement;
				return !el.checkValidity();
			}) as HTMLInputElement | HTMLTextAreaElement;

			notyf.error(`Por favor, preencha o campo ${wrongInput?.name} corretamente`);
		}
	}

	const handleChange = (e: Event) => {
		const target = e.target as HTMLInputElement | HTMLTextAreaElement;
		const label = target.previousElementSibling as HTMLElement;
		const valid = target.checkValidity();
		if (valid) {
			label.classList.add(activeClass);
		} else {
			label.classList.remove(activeClass);
		}
	};

	onMount(() => {
		notyf = new Notyf({ duration: 3500, position: { x: 'right', y: 'top' } });
	});
	let activeClass = 'bg-sky-500';
	let inputClass = `focus:outline-none rounded-b-lg text-black bg-white/50 rounded-tr-lg px-2 py-1 border-2 border-black`;
	let labelClass = `mt-2 text-xl font-semibold w-fit px-2 rounded-t-xl border-t-2 border-x-2 border-black`;
	let showConfetti = false;
	let someKey = 0;
</script>

<div class=" w-full h-fit flex flex-col items-center">
	<h1 class="text-4xl mt-16 mb-10">Fale com a gente !</h1>
	<div class="w-full h-fit flex flex-wrap justify-around gap-y-8 md:gap-y-0 px-5">
		<form bind:this={form} class="flex flex-col w-96 self-start my-auto">
			<label class={labelClass} for="name">Nome</label>
			<input on:change={handleChange} required type="text" name="name" class={inputClass} />

			<label class={labelClass} for="email">Email</label>
			<input on:change={handleChange} required type="email" name="email" class={inputClass} />

			<label class={labelClass} for="message">Mensagem</label>
			<textarea
				on:change={handleChange}
				required
				name="message"
				id="editor"
				class="{inputClass} h-[280px] md:h-[300px] resize-none p-1"
			/>

			<button
				on:click|preventDefault={sendEmail}
				class="bg-sky-500 font-semibold hover:scale-110 w-1/2 self-center rounded-lg p-2 text-lg mt-4 transition-transform"
			>
				Mandar mensagem
			</button>
		</form>
		<Globe />
	</div>
</div>
{#if showConfetti}
	{#key someKey}
		<div class="fixed left-0 top-3/4 md:top-1/2 my-auto">
			<!-- Desktop confetti -->
			<div class="hidden md:block">
				<Confetti delay={[0, 450]} amount={80} cone x={[0.1, 2]} y={[1, 4]} fallDistance="350px" />
			</div>
			<!-- Mobile confetti -->
			<div class="block md:hidden">
				<Confetti
					delay={[0, 450]}
					amount={30}
					cone
					x={[0.1, 1]}
					y={[1, 2.8]}
					fallDistance="200px"
				/>
			</div>
		</div>
		<div class="fixed right-0 top-3/4 md:top-1/2 my-auto">
			<!-- Desktop confetti -->
			<div class="hidden md:block">
				<Confetti
					delay={[0, 450]}
					amount={80}
					cone
					x={[-0.1, -2]}
					y={[1, 4]}
					fallDistance="350px"
				/>
			</div>
			<!-- Mobile confetti -->
			<div class="block md:hidden">
				<Confetti
					delay={[0, 450]}
					amount={30}
					cone
					x={[-0.1, -1]}
					y={[1, 2.8]}
					fallDistance="200px"
				/>
			</div>
		</div>
		<div class="fixed left-1/2 bottom-0 my-auto">
			<!-- Desktop confetti -->
			<div class="hidden md:block">
				<Confetti
					delay={[0, 450]}
					iterationCount={2}
					amount={80}
					x={[-1.5, 1.5]}
					y={[1, 6]}
					fallDistance="350px"
				/>
			</div>
			<!-- Mobile confetti -->
			<div class="block md:hidden">
				<Confetti
					delay={[0, 450]}
					amount={30}
					iterationCount={2}
					x={[-1.5, 1.5]}
					y={[0.8, 3]}
					fallDistance="200px"
				/>
			</div>
		</div>
	{/key}
{/if}
