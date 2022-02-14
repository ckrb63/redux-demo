import classes from './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';
import UserProfile from './UserProfile';
import { Fragment } from 'react';
const Auth = () => {
  const auth = useSelector((state)=> state.auth.auth);
  const dispatch = useDispatch();
  const loginButtonHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.loggedIn());
  };
  return (
    <Fragment>
    {auth ? <UserProfile/> : <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginButtonHandler}>Login</button>
        </form>
      </section>
    </main>}
    </Fragment>
  );
};

export default Auth;
