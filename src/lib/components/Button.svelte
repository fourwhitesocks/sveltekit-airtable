<script>
	let variant = 'default';

	let disabled = false;
	//this is concept of props in Svelte: if they are just let-declared variables they are internal to the component
	//if you want to access them we need to export them

	export { variant, disabled };
</script>

<button on:click class:default={variant} {disabled}>
	<!--  --><slot />
</button>

<style>
	:root {
		--background-color: var(--teal-9);
	}

	.default {
		background-color: var(--background-color);
	}
</style>
