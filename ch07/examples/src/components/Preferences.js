import classes from "./Preferences.css" ;

export default function Preferences({newProdInfo, prodUpdateInfo, onUpdateInfo}) 
{
    return (
        <div className={classes.preferences}>
            <label>
                <input
                    type="checkbox"
                    id="pref-new"
                    checked={newProdInfo}
                    onChange={onUpdateInfo.bind(null, 'pref-new')} />
                <span>New Products</span>
            </label>
            <label>
                <input
                    type="checkbox"
                    id="pref-updates"
                    checked={prodUpdateInfo}
                    onChange={onUpdateInfo.bind(null, 'pref-updates')} />
                <span>Product Updates</span>
            </label>
        </div>
    )
}