<!-- src/components/SvelteTodo.svelte -->

<!-- src/components/SvelteTodo.svelte -->
<script>
    let newTodo = '';
    let todos = [];

    function addTodo() {
        if (newTodo.trim()) {
            todos = [...todos, { id: Date.now(), text: newTodo.trim() }];
            newTodo = '';
        }
    }

    function removeTodo(id) {
        todos = todos.filter((todo) => todo.id !== id);
    }
</script>

<style>
    /* Add any styles here */
</style>

<div class="container mx-auto px-4">
    <h1 class="text-3xl my-5">Svelte Todo</h1>
    <input type="text" bind:value={newTodo} on:keyup={(e) => e.key === 'Enter' && addTodo()} placeholder="Enter a new task" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

    <!-- The input preview section -->
    <p class="my-2 text-red-500">Input Preview: {newTodo}</p>

    <ul class="mt-4">
        {#each todos as todo (todo.id)}
            <li class="border p-4 my-2 rounded shadow flex justify-between">
                <span class="text-lg">{todo.text}</span>
                <button on:click={() => removeTodo(todo.id)} class="px-4 py-2 text-white bg-red-500 hover:bg-red-700 rounded">X</button>
            </li>
        {/each}
    </ul>
</div>

