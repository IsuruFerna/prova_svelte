

<script lang="ts">
	import '../app.css';
	import type { Task } from '../types';

	import Nav from './components/Nav.svelte';
	let { children } = $props();

	let tasks: Task[] = [];
</script>

<div class="container-fluid mx-auto">
    <Nav />
</div>

{@render children()}
