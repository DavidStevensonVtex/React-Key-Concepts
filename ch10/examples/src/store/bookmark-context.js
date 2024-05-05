import { createContext } from 'react';

const BookmarkContext = createContext( {
    bookmarkedArticles: [],
    bookmarkArticle: () => {},
    unbookmarkArticle: () => {}
});

export default BookmarkContext ;    // making it available outside of its file