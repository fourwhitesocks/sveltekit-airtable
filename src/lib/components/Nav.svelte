<script>
	import Btn from '$lib/components/Btn.svelte';
</script>

<div class="fancy">
	This is very confusing to me! Maybe these in the root to make it make sense,
	https://natclark.com/tutorials/svelte-custom-style-properties/
</div>
<div>
	<p>
		<Btn success>hello World</Btn>
	</p>
	<p>
		<Btn danger href="#">hello</Btn>
	</p>
</div>

<style>
	.fancy {
		background-color: var(--backdrop);
		color: var(--text);
	}
</style>
