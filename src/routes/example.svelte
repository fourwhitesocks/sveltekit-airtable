<script>
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/card.svelte';
</script>

<Button>I'm a new button</Button>

<div class="box">
	Set your variable in the parent or prob main css then you use it in the child component and then
	you can change it in whatever parent place you need it changed in... think that's right
</div>

<div class="box">
	<Card --background-color="#dedede">
		<h2 slot="title">How's this working?</h2>
		<div slot="content">
			I'm working just fine, I'm the slot content this time, but which is the parent and which is
			the child??
		</div>
	</Card>
</div>

<style>
	.box {
		margin-block: var(--size-fluid-5);
		text-align: center;
	}
</style>
