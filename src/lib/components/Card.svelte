<script lang="ts">
	import type { Task } from "../../types";

    interface Props {
        task: Task
    }

    let {task}: Props = $props();

</script>

<div class="block bg-slate-400 m-3 p-3 rounded-lg">
    <h1 class="text-xl mb-3">{task.name}</h1>
    <p>{task.task}</p>
</div>