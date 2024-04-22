import './App.css';
// import SettingStylesDynamically from './components/SettingStylesDynamically'
// import SelectivelyApplyingStyles from './components/SelectivelyApplyingStyles' ;
// import SettingInLineStyles from './components/SettingInLineStyles' ;
// import TodoPriority from './components/TodoPriority' ;
// import ConditionalStyles1 from './components/ConditionalStyles1' ;
import ConditionalStyles2 from './components/ConditionalStyles2' ;
import CombiningMultipleDynamicClasses from './components/CombiningMultipleDynamicClasses' ;

function App() {
  // <SettingStylesDynamically />
  // <SelectivelyApplyingStyles />
  // <SettingInLineStyles />
  // <TodoPriority />
  return (
    <>
      <CombiningMultipleDynamicClasses isImportant={true}>
        You can see a lot just by looking.
      </CombiningMultipleDynamicClasses>
      <CombiningMultipleDynamicClasses isImportant={false}>
        The rain in Spain falls mainly in the plain.
      </CombiningMultipleDynamicClasses>
      <CombiningMultipleDynamicClasses isImportant={true}>
        It's tough to make predictions, especially about the future.
      </CombiningMultipleDynamicClasses>
    </>
  );
}

export default App;
