import BookmarkInformation from '../BookmarkSummary/BookmarkInformation' ;
import classes from './InfoSidebar.module.css' ;

function InfoSidebar( { bookmarkedArticles } ) {
    console.log("InfoSidebar: ", bookmarkedArticles);

    return (
        <div className={classes.sidebar}>
            <BookmarkInformation />
        </div>
    )
}

export default InfoSidebar;