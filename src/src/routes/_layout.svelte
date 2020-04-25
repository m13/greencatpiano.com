<script>
	import Logo from './_components/Logo.svelte';
	import NavTop from './_components/NavTop.svelte';
	import NavBottom from './_components/NavBottom.svelte';

	export let segment;
</script>

<Logo></Logo>

<NavTop {segment}></NavTop>

<main>
	<slot></slot>
</main>

<NavBottom></NavBottom>
