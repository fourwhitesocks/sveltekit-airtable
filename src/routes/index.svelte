<script>
	import ContactForm from '$lib/contact-form.svelte';
	import Button from '$lib/components/Button.svelte';
	import Todos from '$lib/components/Todos.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<h1>Welcome to SvelteKit 8:40 stopped</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<ContactForm />

<h2>Component Library</h2>
<!-- since we put a slot in the button component it will add what ever goes in the button this home page button is red-->
<Button --background-color="blue">You change this from where it's being imported to</Button>
<Todos />
<h3>https://www.youtube.com/watch?v=kWOBUF_Ht4Y&ab_channel=WebJeda</h3>

<style>
	h1,
	h2 {
		font-size: var(--font-size-fluid-3);
	}
</style>
