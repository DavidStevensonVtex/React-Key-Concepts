import { NavLink } from 'react-router-dom';

function MainNavigation() 
{
    // console.log("MainNavigation");
    return (
        <header id="main-nav">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Our Products
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      );
}

export default MainNavigation ;