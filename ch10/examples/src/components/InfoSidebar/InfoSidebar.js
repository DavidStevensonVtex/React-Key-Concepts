import BookmarkInformation from '../BookmarkSummary/BookmarkInformation';
import classes from './InfoSidebar.module.css';

function InfoSidebar( { bookmarkedArticles } ) {
    console.log("InfoSidebar: ", bookmarkedArticles);

    return (
        <aside className={classes.sidebar}>
            <BookmarkInformation />
        </aside>
    )
}

export default InfoSidebar;