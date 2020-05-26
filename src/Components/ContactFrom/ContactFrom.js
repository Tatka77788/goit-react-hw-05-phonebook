import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './ContactFrom.module.css';

export default class ContactFrom extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;

    if (name.length > 0) {
      this.props.onSubmit(this.state);
      this.resetState();
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      id: shortid.generate(),
      [name]: value,
    });
  };

  resetState = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={name}
          name="name"
          placeholder="Enter name..."
          onChange={this.handleChange}
        />
        <input
          className={styles.input}
          type="tel"
          placeholder="Enter number 999-99-99"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          required
          value={number}
          name="number"
          onChange={this.handleChange}
        />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}
