import React from 'react';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filtredContacts } from '../../redux/actions';
import { getFilter } from '../../redux/contacts-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChange = e => dispatch(filtredContacts(e.target.value));

  return (
    <>
      <h3 className={styles.title}>Find contacts by name</h3>
      <label className={styles.cont}>
        <input
          type="text"
          value={filter}
          className={styles.input}
          name="filter"
          onChange={handleChange}
        />
      </label>
    </>
  );
}

// const mapStateToProps = state => ({
//   filter: getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   handleInput: e => dispatch(filtredContacts(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
