import './App.css';
// import SettingStylesDynamically from './components/SettingStylesDynamically'
// import SelectivelyApplyingStyles from './components/SelectivelyApplyingStyles' ;
// import SettingInLineStyles from './components/SettingInLineStyles' ;
// import TodoPriority from './components/TodoPriority' ;
// import ConditionalStyles1 from './components/ConditionalStyles1' ;
// import ConditionalStyles2 from './components/ConditionalStyles2' ;
// import CombiningMultipleDynamicClasses from './components/CombiningMultipleDynamicClasses' ;
// import CombiningMultipleDynamicClasses2 from './components/CombiningMultipleDynamicClasses2' ;
// import MergingMultipleInlineStyleObjects from './components/MergingMultipleInlineStyleObjects' ;
import Button from './components/Button' ;

function App() {
  // <SettingStylesDynamically />
  // <SelectivelyApplyingStyles />
  // <SettingInLineStyles />
  // <TodoPriority />
  return (
    <>
    <Button config={{type: 'button' }} className='important'>
        Urgent!
      </Button>
      <br /><br />
      <Button config={{type: 'submit' }} className='normal'>
        Normal Priority
      </Button>
    </>
  );
}

export default App;
