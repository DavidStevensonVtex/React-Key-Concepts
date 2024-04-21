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
        // The push() method of Array instances adds the specified elements to the 
        // end of an array and returns the new length of the array.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
        // todos.push('A new todo');

        // The original array or object is spread out as a list of individual items that can be 
        // used to create a new array or object.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        setTodos(curTodos => [...curTodos, 'A new todo' ]);
        // alternative: Use concat() instead of the spread operator:
        // concat(), unlike push(), returns a new array
        // setTodos(curTodos => curTodos.concat('A new todo'));
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