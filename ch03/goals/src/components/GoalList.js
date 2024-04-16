import Goal from './Goal.js' ;
import ThirdGoal from './ThirdGoal.js' ;

function GoalList() {
    return (
        <ul>
          <Goal id="g1" title="Learn React (without TypeScript)">
            <p>I want to read the book <i>React Key Concepts</i> by Maximilian Schwarzmüller.</p>
          </Goal>
          <Goal id="g2" title="I want to learn by doing.">
            <p>I will try to do the practice exercises, as learning by doing is the best way to learn.</p>
          </Goal>
          <ThirdGoal />
        </ul>
      );
}

export default GoalList ;