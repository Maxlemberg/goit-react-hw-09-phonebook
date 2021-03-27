import React from 'react';
import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import { getIsAuthenticated } from '../redux/auth/auth.selectors';
import styles from './User.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);
