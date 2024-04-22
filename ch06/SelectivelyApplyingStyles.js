import { useState } from 'react' ;

function SelectivelyApplyStyles()
{
    return ( 
        <nav>
            <ul>
                <li><a href="...">Home</a></li>
                <li><a href="...">New Goals</a></li>
            </ul>

            <h2>My Course Goals</h2>
            <li className="goal-item">Learn React!</li>
            <li className="goal-item">Master React!</li>
        </nav>
    )
}