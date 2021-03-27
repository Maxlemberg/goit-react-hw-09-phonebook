import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth.operations';
import styles from './Inputs.module.css';

// const mapDispathToProps = dispath => ({
//   onRegister: data => dispath(register(data)),
// });

//  const mapDispathToProps = {
//   onSubmit: register,
// };

// export default connect(null, mapDispathToProps)(RegisterPage);

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // state = {
  //   name: '',
  //   email: '',
  //   password: '',
  // };

  const handleChange = useCallback(({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
      return;
    }
    if (name === 'email') {
      setEmail(value);
      return;
    }
    setPassword(value);
  }, []);

  const handlSubmit = useCallback(
    evt => {
      evt.preventDefault();
      dispatch(register({ name, email, password }));
      setName('');
      setPassword('');
      setEmail('');
    },
    [dispatch, email, name, password],
  );
  // const { email, password, name } = this.state;
  return (
    <div>
      <h1 className={styles.title}>Сторінка реєстрації</h1>
      <form className={styles.form} onSubmit={handlSubmit} autoComplete="off">
        <label className={styles.label}>
          {/* Імя */}
          <input
            placeholder="Name"
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          {/* <span className={styles.sp}>Email</span> */}
          <input
            placeholder="Email"
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          {/* Пароль */}
          <input
            placeholder="Password"
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          Зареєструватися
        </button>
      </form>
    </div>
  );
}

// const mapStateToProps = state => ({});

// const mapDispathToProps = dispath => ({
//   onRegister: data => dispath(register(data)),
// });

//  const mapDispathToProps = {
//   onSubmit: register,
// };

// export default connect(null, mapDispathToProps)(RegisterPage);
