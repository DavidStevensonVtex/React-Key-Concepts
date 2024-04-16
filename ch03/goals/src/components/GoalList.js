import Goal from './Goal.js' ;
import FirstGoal from './FirstGoal.js' ;
import SecondGoal from './SecondGoal.js' ;
import ThirdGoal from './ThirdGoal.js' ;

function GoalList() {
    return (
        <ul>
          <Goal id="g1" title="Learn React (without TypeScript)">
            <p>I want to read the book <i>React Key Concepts</i> by Maximilian Schwarzmüller.</p>
          </Goal>
          <FirstGoal />
          <SecondGoal />
          <ThirdGoal />
        </ul>
      );
}

export default GoalList ;