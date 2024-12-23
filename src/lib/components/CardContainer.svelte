<script lang="ts">
	import type { Writable } from "svelte/store";
	import type { Task } from "../../types";
    import Card from "./Card.svelte";
    import { tasks } from "../../shared";

</script>

<div class="grid md:grid-cols-3 lg:grid-cols-4">

    {#each $tasks as task, index (index) }
        <Card {task}/>
    {/each}

</div>