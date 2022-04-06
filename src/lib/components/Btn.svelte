<script>
	export let danger, success, info, href;

	$: console.log(danger);
</script>

<!-- <button class:danger={danger}>
	<slot>something</slot>
    ** see here the class is the same name as the variable name so you can remove the variable part above so it looks like below
</button>
 -->

{#if href}
	<a href class="button" class:danger class:success class:info>
		<slot />
	</a>
{:else}
	<button class="button" class:danger class:success class:info>
		<slot>something</slot>
	</button>
{/if}

<style>
	/*https://youtu.be/EBtsu6naB8g web jeda*/

	.button {
		padding: 10px 20px;
	}

	.danger {
		background-color: red;
		color: white;
	}

	.success {
		background-color: green;
		color: white;
	}

	.info {
		background-color: blue;
		color: white;
	}
</style>
