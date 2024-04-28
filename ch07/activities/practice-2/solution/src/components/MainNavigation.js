import { useState } from 'react' ;
import SideDrawer from './SideDrawer';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  const [displaySidebar, setDisplaySidebar] = useState(false);

  function display() {
    setDisplaySidebar(true);
  }

  function onClose() {
    setDisplaySidebar(false);
  }

  return (
    <>
    <SideDrawer display={displaySidebar} onClose={onClose}/>
    <header className={classes.header}>
      <h1>Demo App</h1>
      <button className={classes.btn} onClick={display}>
        <div />
        <div />
        <div />
      </button>
    </header>
    {/* Should be shown conditionally: <SideDrawer />  */}
    </>
  );
}

export default MainNavigation;
