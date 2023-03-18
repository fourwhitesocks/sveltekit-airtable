<script>
	import '$lib/style.css';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/example">Example</a>
</nav>

<main>
	<slot />
</main>

<style>
	@import 'https://unpkg.com/open-props';

	nav {
		padding: 1em;
	}

	a {
		padding: 1em;
	}
</style>
