<script>
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/card.svelte';
</script>

<Button>I'm a new button</Button>

<div class="box">
	The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure
	and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer
	pirate ipsum...own the high seas, arg!
</div>

<div class="box">
	<Card --background-color="#dedede">
		<h2 slot="title">How's this working?</h2>
		<div slot="content">I'm working just fine, I'm the slot content this time</div>
	</Card>
</div>

<style>
	.box {
		margin-block: var(--size-fluid-5);
		text-align: center;
	}
</style>
