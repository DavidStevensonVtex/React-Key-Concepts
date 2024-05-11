import useCounter from '../hooks/use-counter' ;

export function Demo1() {
    const { counter, increment, decrement } = useCounter() ;

    return (
        <>
            <p>Counter: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export function Demo2() {
    const { counter, increment, decrement } = useCounter() ;

    return (
        <>
            <p>Counter: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}