import { useState } from 'react' ;
import classes from "./Form.css" ;
import Preferences from "./Preferences" ;

export default function Form() {
    const [ wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
    const [ wantsProdUpdateInfo, setWantsProdUpdateInfo ] = useState(false);

    function updateProdInfoHandler(selection) {
        // using one shared update handler function is optional
        // you cuold also use two separate functions (passed to Preferences) as props
        console.log("selection", selection);
        if (selection === 'pref-new')
        {
            setWantsNewProdInfo( prevPref => !prevPref);
        }
        else if (selection === 'pref-updates' )
        {
            setWantsProdUpdateInfo( prevPref => !prevPref) ;
        }   
    }

    function reset() {
        setWantsNewProdInfo(false);
        setWantsProdUpdateInfo(false);
    }

    function submitHandler(event) {
        event.preventDefault();
        // state values and be used here
        console.log("wantsNewProdInfo", wantsNewProdInfo, "wantsProdUpdateInfo", wantsProdUpdateInfo);
        reset();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.formControl}>
                <label htmlFor="email">Your email</label>
                <br />
                <input type="email" id="email" />
            </div>
            <Preferences 
                newProdInfo={wantsNewProdInfo}
                prodUpdateInfo={wantsProdUpdateInfo}
                onUpdateInfo={updateProdInfoHandler} />
            <button>Submit</button>
        </form>
    )
}