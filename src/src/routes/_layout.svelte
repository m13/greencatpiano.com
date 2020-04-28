<script>
	import Logo from './_component/Logo.svelte';
	import NavTop from './_component/NavTop.svelte';
	import NavBottom from './_component/NavBottom.svelte';

	export let segment;
</script>

<Logo></Logo>

<NavTop {segment}></NavTop>

<main>
	<slot></slot>
</main>

<NavBottom></NavBottom>
