<script lang="ts">
	import type { Task } from "../../types";
    import Card from "./Card.svelte";

    type Props = {
        tasks: Task[]
    }

    let {tasks}: Props = $props();
</script>

<div class="grid md:grid-cols-3 lg:grid-cols-4">

    {JSON.stringify(tasks)}
    <Card />
    <Card />
    <Card />
    <Card />
</div>