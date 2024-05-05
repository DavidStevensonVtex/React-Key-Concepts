import { useState } from 'react';

import Articles from '../Articles/Articles';
import InfoSidebar from '../InfoSidebar/InfoSidebar';
import BookmarkContext from '../../store/bookmark-context';
import Header from '../Header/Header' ;

function News() 
{
    const [savedArticles, setSavedArticles] = useState([]);

    function addArticle(article) {
        setSavedArticles( (prevSavedArticles) => [...prevSavedArticles, article]);
    }

    function removeArticle(articleId) {
        setSavedArticles( (prevSavedArticles) => 
        prevSavedArticles.filter( (article) => article.id !== articleId));
    }

    const bookmarkCtxValue = { 
        bookmarkedArticles: savedArticles,
        bookmarkArticle: addArticle,
        unbookmarkArticle: removeArticle
    } ;

    const clear = { clear: "both" } ;

    return (
        <BookmarkContext.Provider value={bookmarkCtxValue}>
            <Header />
            <InfoSidebar bookmarkedArticles={bookmarkCtxValue.bookmarkedArticles} />
            <div style={clear} />
            <Articles />
        </BookmarkContext.Provider>
    )
}

export default News ;