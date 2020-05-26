import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ onChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find contact by name
        <input type="text" onChange={onChange} className={styles.input} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
