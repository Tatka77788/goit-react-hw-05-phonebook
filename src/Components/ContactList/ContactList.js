/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import pop from '../../Transitions/pop.module.css';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, handleRemove }) => {
  return (
    <>
      <TransitionGroup component="ul" className={styles.list}>
        {contacts.map(({ name, number, id }) => (
          <CSSTransition key={id} timeout={250} classNames={pop} unmountOnExit>
            <li className={styles.listItem}>
              <p className={styles.paragraph}>{name}</p>
              <p className={styles.paragraph}>{number}</p>
              <button
                className={styles.button}
                onClick={() => handleRemove(id)}
              >
                &#215;
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default ContactList;
