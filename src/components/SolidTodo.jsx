// src/components/SolidTodo.jsx
import { createSignal, createEffect, For } from 'solid-js';

function SolidTodo() {
    const [todos, setTodos] = createSignal([]);
    const [newTodo, setNewTodo] = createSignal('');

    const addTodo = () => {
      if(newTodo().trim() === '') {
          setTodos([...todos(), { id: Date.now(), text: newTodo() }]);
          setNewTodo('');
      };
    };

    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            addTodo();
        }
    }

    return (
        <>
            <input
                type="text"
                value={newTodo()}
                onInput={(event) => setNewTodo(event.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="New todo..."
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                <For each={todos()}>
                    {(todo) => (
                        <li key={todo.id}>{todo.text}</li>
                    )}
                </For>
            </ul>
        </>
    );
}

export default SolidTodo;
