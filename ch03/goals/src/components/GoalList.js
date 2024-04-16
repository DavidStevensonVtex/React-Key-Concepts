import Goal from './Goal.js' ;

function GoalList() {
    return (
        <ul>
          <Goal id="g1" title="Learn React (without TypeScript)">
            <p>I want to read the book <i>React Key Concepts</i> by Maximilian Schwarzmüller.</p>
          </Goal>
          <Goal id="g2" title="I want to learn by doing.">
            <p>I will try to do the practice exercises, as learning by doing is the best way to learn.</p>
          </Goal>
          <Goal id="g3" title="I want to go deeper into React, and eventually learn React with TypeScript">
            <p>Perhaps I will try Maximilian Schwarzmüller's video course on Udemy.</p>
          </Goal>
        </ul>
      );
}

export default GoalList ;