/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Notification from './Notification/Notification';
import ContactFrom from './ContactFrom/ContactFrom';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import styles from './app.module.css';
import slideLeft from '../Transitions/slideLeft.module.css';
import slideRight from '../Transitions/slideRight.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    isRender: false,
    isExist: false,
    isNotification: false,
  };

  componentDidMount() {
    this.setState({
      isRender: true,
    });
  }

  handleFormSubmit = contact => {
    const { contacts } = this.state;
    const contactExist = contacts.find(
      i => i.name.toLowerCase() === contact.name.toLowerCase(),
    );

    if (contacts.length > 0 && contactExist) {
      this.setState({
        isExist: true,
      });
      this.showNotification();
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
        name: '',
        number: '',
      }));
    }
  };

  showNotification = () =>
    setTimeout(() => this.setState({ isExist: false }), 2000);

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  changeFilterValue = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { contacts, isRender, isExist } = this.state;
    return (
      <div className={styles.container}>
        <CSSTransition
          in={isExist}
          timeout={500}
          classNames={slideRight}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>

        <CSSTransition
          in={isRender}
          timeout={500}
          classNames={slideLeft}
          unmountOnExit
        >
          <h2 className={styles.title}>Phonebook</h2>
        </CSSTransition>

        <ContactFrom onSubmit={this.handleFormSubmit} />

        {contacts.length > 0 && (
          <>
            {contacts.length > 1 && (
              <Filter onChange={this.changeFilterValue} />
            )}
            <ContactList
              contacts={this.getFilteredContacts()}
              handleRemove={this.handleDelete}
            />
          </>
        )}
      </div>
    );
  }
}
