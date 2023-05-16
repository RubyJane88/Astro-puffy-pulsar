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

<div>
    <h1 class="text-3xl">Svelte Todo</h1>
    <input type="text" bind:value="{newTodo}" on:keyup="{(e) => e.key === 'Enter' && addTodo()}" placeholder="Enter a new task" />
    <ul>
        {#each todos as todo (todo.id)}
            <li>
                {todo.text}
                <button on:click="{() => removeTodo(todo.id)}">X</button>
            </li>
        {/each}
    </ul>
</div>
