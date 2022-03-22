<script>
	let id = 'checkbox';
	let checked = false;

	export { id, checked };
</script>

<label for="">
	<!-- this will bind the value of checked so if it's false it's gonna bind the valu and then whereever we use the component we're going to bind the variable we want to that false/true flip-->
	<input type="checkbox" {id} on:change bind:checked />

	<slot />
</label>
