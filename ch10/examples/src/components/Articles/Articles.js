import { useContext } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

import dummyArticles from '../../data/dummy-articles';
import BookmarkContext from '../../store/bookmark-context';
import classes from './Articles.module.css';

function Articles() {
  const bookmarkCtx = useContext(BookmarkContext);

  return (
    <ul className={classes.list}>
      {dummyArticles.map((article) => {
        // will be true, if this article item is also included in the bookmarkedArticles array
        const isBookmarked = bookmarkCtx.bookmarkedArticles.some(
          (bArticle) => bArticle.id === article.id
        );

        let buttonAction = () => {} ; // dummy value, will be finished later!}
        // default button icon: Empty bookmark icon, because not bookmarked
        let buttonIcon = <FaRegBookmark />;

        if (isBookmarked) {
          buttonAction = () => {} ; // dummy value, will be finished later!}
          buttonIcon = <FaBookmark />;
        }

        return (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <button onClick={buttonAction}>{buttonIcon}</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Articles;
