<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import CardContainer from "../lib/components/CardContainer.svelte";

    import { tasksState } from "../shared.svelte";

</script>

<!-- <CardContainer /> -->

{#each tasksState as task, index (index)}
    <Card {task} />
{/each}

