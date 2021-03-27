import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '../redux/auth/auth.selectors';
import styles from './User.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (
    <nav className="">
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Головна
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/phonebook"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}

// const mapStateToProps = state => ({
//   isLoggedIn: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
