import Articles from '../Articles/Articles' ;
import InfoSidebar from '../InfoSidebar/InfoSidebar' ;
import BookmarkContext from '../../store/bookmark-context' ;

export default function News() 
{
    const bookmarkCtxValue = { 
        bookmarkedArticles: [] 
    } ; // for now, it's the same value as used before, for the initial context

    return (
        <BookmarkContext.Provider value={bookmarkCtxValue}>
            <Articles />
            <InfoSidebar />
        </BookmarkContext.Provider>
    )
}