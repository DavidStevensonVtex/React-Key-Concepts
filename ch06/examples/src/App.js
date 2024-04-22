import './App.css';
// import SettingStylesDynamically from './components/SettingStylesDynamically'
// import SelectivelyApplyingStyles from './components/SelectivelyApplyingStyles' ;
// import SettingInLineStyles from './components/SettingInLineStyles' ;
// import TodoPriority from './components/TodoPriority' ;
// import ConditionalStyles1 from './components/ConditionalStyles1' ;
import ConditionalStyles2 from './components/ConditionalStyles2' ;

function App() {
  // <SettingStylesDynamically />
  // <SelectivelyApplyingStyles />
  // <SettingInLineStyles />
  // <TodoPriority />
  return (
    <>
      <ConditionalStyles2 isValid={true} isRecommended={false} inputConfig={{type: 'text', maxLength: 10}} />
      <br />
      <ConditionalStyles2 isValid={false} isRecommended={true} inputConfig={{type: 'email', maxLength: 99}} />
      <br />
      <ConditionalStyles2 isValid={true} isRecommended={true} inputConfig={{type: 'date', maxLength: 14 }} />
    </>
  );
}

export default App;
