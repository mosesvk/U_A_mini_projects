import React, {useContext} from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.scss';

const Navigation = () => {
  //Pointing to the AuthContext in the App folder
  const ctx = useContext(AuthContext); 

  return (
          <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
        )
};

export default Navigation;
