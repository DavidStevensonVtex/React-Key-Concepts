import { useState, forwardRef } from 'react' ;
import classes from "./Preferences.css" ;

function Preferences(props, ref) {
    const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
    const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false) ;

    function changeNewProdPrefHandler() {
        setWantsNewProdInfo(prevPref => !prevPref);
    }

    function changeUpdateProdPrefHandler() {
        setWantsProdUpdateInfo(prevPref => !prevPref);
    }

    return (
        <div className={classes.preferences}>
            <label>
                <input
                    type="checkbox"
                    id="pref-new"
                    checked={wantsNewProdInfo}
                    onChange={changeNewProdPrefHandler} />
                <span>New Products</span>
            </label>
            <label>
                <input
                    type="checkbox"
                    id="pref-updates"
                    checked={wantsProdUpdateInfo}
                    onChange={changeUpdateProdPrefHandler} />
                <span>Product Updates</span>
            </label>
        </div>
    )
}

export default forwardRef(Preferences) ;