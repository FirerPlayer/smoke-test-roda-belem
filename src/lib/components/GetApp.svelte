<script lang="ts">
	export let contactRef: HTMLElement;
</script>

<div
	class="flex flex-col items-center justify-around bg-slate-200 px-2 h-[600px] border-y-8 border-black"
>
	<h1 class="text-6xl text-black text-center md:text-left [&>span]:text-sky-500 [&>span]:font-bold">
		Experimente o <span>app</span>
	</h1>
	<p
		class=" max-w-7xl text-2xl md:text-4xl text-black text-center [&>span]:text-sky-500 [&>span]:font-bold"
	>
		Teste agora a nossa aplicação e comece a <span>contribuir</span>. Milhões de pessoas precisam de
		<span>ajuda</span> para se locomover
	</p>
	<!-- <form> -->
	<button
		on:pointerup={() => contactRef.scrollIntoView({ behavior: 'smooth' })}
		class="bg-sky-500 hover:scale-[1.15] transition-transform duration-500 ease-out text-white font-bold px-20 py-6 rounded-lg text-6xl"
	>
		Acesso ao beta
	</button>
	<!-- </form> -->
</div>
