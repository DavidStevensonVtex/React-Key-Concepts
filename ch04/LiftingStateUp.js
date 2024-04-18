import { useState } from 'react' ;

// Lifting State Up

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    function updateSearchTermHandler(event) {
        setSearchTerm(event.target.value);
    }

    return <input type="search" onChange={updateSearchTermHandler} />
}

function Overview() {
    return <p>Currently searching for {searchTerm}</p>
}

function App() {
    return (
        <>
            <SearchBar />
            <Overview />
        </>
    ) ;
}