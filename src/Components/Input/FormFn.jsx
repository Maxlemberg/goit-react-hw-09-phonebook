import React from 'react';
import styles from './Input.module.css';

const FormFn = ({ handleSubmit, handlName, handleNumber, value, number }) => {
  const anable = !(value && number);
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          placeholder="Enter name"
          onChange={handlName}
          value={value}
          name="name"
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="number"
          placeholder="Enter number"
          onChange={handleNumber}
          value={number}
          name="number"
        />
      </label>
      {anable ? (
        <button type="submit" disabled={anable} className={styles.disabled}>
          Add contact
        </button>
      ) : (
        <button type="submit" disabled={anable} className={styles.button}>
          Add contact
        </button>
      )}
    </form>
  );
};

export default FormFn;
