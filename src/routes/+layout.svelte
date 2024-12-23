<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';
	import type { Task } from '../types';

	let { children } = $props();

	let tasks: Task[] = [];
</script>

<div class="container-fluid mx-auto">
    <Nav />
</div>

{@render children()}
