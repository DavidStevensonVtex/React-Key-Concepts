import { createContext } from 'react' ;

const BookmarkContext = createContext( {
    bookmarkedArticles: []
});

export default BookmarkContext ;    // making it available outside of its file