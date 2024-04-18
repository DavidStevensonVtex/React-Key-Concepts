import { useState } from 'react' ;

// Lifting State Up

function SearchBar(props) {
    return <input type="search" onChange={props.onUpdateSearch} />
}

function Overview( { currentTerm } ) {
    return <p>Currently searching for {currentTerm}</p>
}

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    function updateSearchTermHandler(event) {
        setSearchTerm(event.target.value) ;
    }
    return (
        <>
            <SearchBar onUpdateSearch={updateSearchTermHandler} />
            <Overview currentTerm={searchTerm}/>
        </>
    ) ;
}