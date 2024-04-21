import { useState } from 'react' ;

// Here's a simplified example that would *not* work as intended.

// Once the button is clicked and addTodoHandler is executed, the expected
// result of another to-do item being displayed will not materialize.

// This is because executing todos.push('a new todo') will update the todos array,
// but React won't notice it. Keep in mind that you must only update the state via
// state updating function returned by useState(); otherwise, React will not
// re-evaluate the component function.

function Todos() {
    const [todos, setTodos] = useState([ 'Learn React', 'Recommend this book' ]);

    function addTodoHandler() {
        todos.push('A new todo');
    }

    return (
        <div>
            <button onClick={addToDoHandler}>Add Todo</button>
            <ul>
                {todos.map(todo => <li>{todo}</li>)}
            </ul>
        </div>
    );
}