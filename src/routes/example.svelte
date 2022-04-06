<script>
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/card.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav --text="blue" --backdrop="pink" />
<Button --background-color="pink">I'm a new button</Button>

<div class="box">
	Set your root variables up in main css then you set the main child default styles w/ custom
	properties, then where you import the child you can change those custom properties if needed; but
	I can't get it to be able to use another variable...only able to adjust the custom properties that
	are set as default in the child component.
	<p>https://svelte.dev/repl/bb42c17d585b4236824e1d5e48fe92b5?version=3.38.0</p>
</div>

<div class="box">
	<Card --background-color="#2b8379">
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
