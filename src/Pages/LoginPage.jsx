import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth.operations';
import styles from './Inputs.module.css';

// const mapDispathToProps = {
//   onLogin: logIn,
// };

// export default connect(null, mapDispathToProps)(LoginPage);

export default function LoginPage() {
  const dispatch = useDispatch();
  // state = {
  //   email: '',
  //   password: '',
  // };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };
  // const handleChange = e => {
  //   // this.setState({ [name]: value });
  //   if (e.target.name === 'email') {
  //     setEmail(e.target.value);
  //     return;
  //   }
  //   setPassword(e.target.value);
  // };

  const handlSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email: email, password: password }));
    setEmail('');
    setPassword('');
    // this.props.onLogin(this.state);
    // this.setState({
    //   email: '',
    //   password: '',
    // });
  };

  // const { email, password } = this.state;
  return (
    <div>
      <h1 className={styles.title}>Сторінка логіна</h1>
      <form className={styles.form} onSubmit={handlSubmit} autoComplete="off">
        <label className={styles.label}>
          {/* Eлектронна скринька📧 */}
          📯
          <input
            placeholder="Email"
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onInput={handleEmail}
          />
        </label>
        <label className={styles.label}>
          {/* Пароль */}
          🗝️
          <input
            placeholder="Password"
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <button type="submit" className={styles.button}>
          Зайти
        </button>
      </form>
    </div>
  );
}
