import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import HomePage from './Pages/HomePage';
// import LoginPage from './Pages/LoginPage';
// import RegisterPage from './Pages/RegisterPage';
import AppBar from './UserMenu/AppBar';
import Phonebook from './Components/Phonebook';
import { getCurrentUser } from './redux/auth/auth.operations';
import { useDispatch } from 'react-redux';
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';
import Loader from 'react-loader-spinner';
import style from './Loader.module.css';

// const Phonebook = lazy(() => import('./Components/Phonebook'));
const HomePage = lazy(() => import('./Pages/HomePage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  // componentDidMount() {
  //   this.props.onGetCurrentUser();
  // }
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <Loader
            type="Grid"
            color="royalblue"
            height={80}
            width={80}
            className={style.appLoader}
          />
        }
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PublicRoute
            path="/register"
            redirectTo="/phonebook"
            restricted
            component={RegisterPage}
          />
          <PublicRoute
            path="/login"
            redirectTo="/phonebook"
            restricted
            component={LoginPage}
          />
          {/* <Route path="/phonebook" component={Phonebook} /> */}
          <PrivateRoute
            path="/phonebook"
            component={Phonebook}
            redirectTo="/login"
          />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

// const mapDispathToProps = {
//   onGetCurrentUser: getCurrentUser,
// };

// export default connect(null, mapDispathToProps)(App);
