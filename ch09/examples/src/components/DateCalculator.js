import { useState } from 'react' ;
import { add, differenceInDays, format, parseISO } from 'date-fns' ;

import classes from './DateCalculator.module.css' ;

const initialStartDate = new Date();
const initialEndDate = add(initialStartDate, { days: 1 });

export default function DateCalculator() {
    const [ startDate, setStartDate ] = useState ( format(initialStartDate, 'yyyy-MM-dd' ) );

    const [endDate, setEndDate ] = useState( format(initialEndDate, 'yyyy-MM-dd'));

    const daysDiff = differenceInDays(parseISO(endDate), parseISO(startDate)) ;

    function updateStartDateHandler(event) {
        setStartDate(event.target.value);
    }

    function updateEndDateHandler(event) {
        setEndDate(event.target.vaue);
    }

    return (
        <div className={classes.calculator}>
            <p>Calculate the difference (in days) between two dates.</p>
            <div className={classes.control}>
                <label htmlFor="start">Start Date</label>
                <input
                    id="start"
                    type="date"
                    value={startDate}
                    onChange={updateStartDateHandler} />
            </div>
            <div className={classes.control}>
                <label htmlFor="end">End Date</label>
                <input 
                    id="end"
                    type="date"
                    value={endDate}
                    onChange={updateEndDateHandler} />
            </div>
            <p className={classes.difference}>Difference: {daysDiff}</p>
        </div>
    )
}