import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactsList.module.css';
import { deleteContact } from '../../redux/contacts.operations';
import { getVisibleContacts } from '../../redux/contacts-selectors';

// const mapStateToProps = state => ({
//   visibleContacts: getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onDelete: e => dispatch(deleteContact(e.target.id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default function ContactList() {
  const dispatch = useDispatch();
  const onDelete = e => dispatch(deleteContact(e.target.id));
  const visibleContacts = useSelector(getVisibleContacts);
  const itemLi = visibleContacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={styles.itemLi}>
        <span className={styles.text}>
          {name}: {number}
        </span>
        <button
          type="button"
          className={styles.button}
          id={id}
          onClick={onDelete}
        >
          Delete
        </button>
      </li>
    );
  });
  return <ul className={styles.list}>{itemLi}</ul>;
}
