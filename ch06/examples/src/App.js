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
// import Button from './components/Button' ;
import Button2 from './components/Button' ;

function App() {
  // <SettingStylesDynamically />
  // <SelectivelyApplyingStyles />
  // <SettingInLineStyles />
  // <TodoPriority />
  return (
    <>
    <Button2 config={{type: 'button' }} className='btn important'>
        Urgent!
      </Button2>
      <br /><br />
      <Button2 config={{type: 'submit' }} className='btn normal'>
        Normal Priority
      </Button2>
    </>
  );
}

export default App;
