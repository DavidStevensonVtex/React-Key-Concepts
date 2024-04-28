import classes from './SideDrawer.module.css';

function SideDrawer({display, onClose}) {

  console.log("SideDrawer: display: ", display);

  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <aside className={display ? classes.drawer : classes.hidedrawer}>
        <nav>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/products">All Products</a>
            </li>
            <li>
              <a href="/profile">Your Profile</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default SideDrawer;
