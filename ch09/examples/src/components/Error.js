import classes from "./Error.module.css"

export default function Error( { message } )
{
    console.log("<Error /> component function is executed.");

    if (! message) {
        return null;
    }

    return <p className={classes.error}>{ message }</p>
}