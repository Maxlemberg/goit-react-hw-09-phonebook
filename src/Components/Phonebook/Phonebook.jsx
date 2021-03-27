import React, { useState, useEffect, useCallback } from 'react';
import FormFn from '../Input';
import Filter from '../Filter';
import ContactList from '../ContactList';
import styles from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contacts.operations';
import { fetchContacts } from '../../redux/contacts.operations';
import Loader from 'react-loader-spinner';
import style from '../../Loader.module.css';
import { getLoading, getContacts } from '../../redux/contacts-selectors';

// const mapStateToProps = state => {
//   return {
//     state: getContacts(state),
//     isLoading: getLoading(state),
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     onSubmit: (name, number) => {
//       return dispatch(addContacts(name, number));
//     },
//     fetchContacts: () => dispatch(fetchContacts()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);

export default function Phonebook() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // state = {
  //   name: '',
  //   number: '',
  // };

  // componentDidMount() {
  //   this.props.fetchContacts();
  // }
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const state = useSelector(getContacts);
  const isLoading = useSelector(getLoading);

  const handleName = useCallback(e => {
    setName(e.target.value);
  }, []);

  const handleNumber = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      const uniqCheck = state.some(item => item.name === name);
      if (uniqCheck) {
        alert(`Імя ${name} вже існує!`);
        return;
      }
      // this.props.onSubmit(this.state.name, this.state.number);
      dispatch(addContacts(name, number));
      setName('');
      setNumber('');
    },
    [dispatch, name, number, state],
  );

  // const handInput = e => {
  //   const { name, value } = e.currentTarget;
  //   // this.setState({ [name]: value });
  //   if (name === 'name') {
  //     setName(value);
  //     return;
  //   }
  //   setNumber(value);
  // };

  // const { handleSubmit, handleInput } = this;
  // const { name, number } = this.state;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <FormFn
        handleSubmit={handleSubmit}
        handlName={handleName}
        handleNumber={handleNumber}
        value={name}
        number={number}
      />
      <h2 className={styles.title2}>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && (
        <Loader
          type="Grid"
          color="royalblue"
          height={40}
          width={40}
          className={style.loader}
        />
      )}
    </div>
  );
}
