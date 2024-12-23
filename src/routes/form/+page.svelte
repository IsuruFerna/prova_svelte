<script lang="ts">
	import type { Task } from "../../types";
    import { tasks } from "../../shared";
    import { tasksState } from "../../shared.svelte";

    // let { tasks } = $props();
    let task: Task = $state({
        name:"",
        task:"",
        done: false
    })

    const handleSubmit = (e:SubmitEvent) => {
        e.preventDefault();
        // tasks = [...tasks, {...task}];
        // $tasks.push({...task});
        tasksState.push(task);
        task = {
            name: "",
            task: "",
            done: false
        }

        console.log("these are tasks: ", $tasks);
    }


</script>

<h1>This is Form page</h1>

{JSON.stringify(task)}

<div class="container mx-auto p-4">
    <form action="" class="flex flex-col" onsubmit={handleSubmit}>
        <label for="name">Name</label>
        <input class="mb-3 rounded-md" id="name" placeholder="Your name" type="text" bind:value={task.name}>
        <label for="task">Describe the task</label>
        <textarea class="rounded-md mb-3" id="task" rows="4" cols="50" bind:value={task.task}>Describe your task</textarea>
        <button class="border rounded-md py-1 bg-green-500 hover:bg-green-700" type="submit">Submit</button>
    </form>
</div>