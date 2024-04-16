function Goal(props) {
    return (
        <li id={props.id}>
            <article>
                <h2>{props.title}</h2>
                {props.children}
            </article>
        </li>
    ) ;    
}