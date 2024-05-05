import { useContext } from 'react' ;

import BookmarkContext from '../../store/bookmark-context' ;
import classes from './BookmarkSummary.module.css' ;

export default function BookmarkSummary() {
    const bookmarkCtx = useContext(BookmarkContext);
    const numberOfArticles = bookmarkCtx.bookmarkedArticles.length ;

    return (
        <>
            <p className={classes.summary}>{numberOfArticles}</p>
            <ul className={classes.list}>
                {
                    bookmarkCtx.bookmarkedArticles.map( (article) => (
                        <li key={article.id}>{article.title}</li>
                    ))
                }
            </ul>
        </>
    ) ;
}