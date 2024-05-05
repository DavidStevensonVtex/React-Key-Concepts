import { useState } from 'react' ;

import Articles from '../Articles/Articles' ;
import InfoSidebar from '../InfoSidebar/InfoSidebar' ;
import BookmarkContext from '../../store/bookmark-context' ;

export default function News() 
{
    const [savedArticles, setSavedArticles] = useState([]);

    const bookmarkCtxValue = { 
        bookmarkedArticles: savedArticles
    } ;

    return (
        <BookmarkContext.Provider value={bookmarkCtxValue}>
            <Articles />
            <InfoSidebar />
        </BookmarkContext.Provider>
    )
}