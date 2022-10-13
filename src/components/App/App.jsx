import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import css from './App.module.css';

const LOCALSTORAGE_KEY = 'user-phonebook';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Pointer Event', number: '459-12-56' },
      { id: 'id-2', name: 'Jack Richardson', number: '443-89-12' },
      { id: 'id-3', name: 'Stella Artois', number: '645-17-79' },
      { id: 'id-4', name: 'Phillp Morris', number: '227-91-26' },
      { id: 'id-5', name: 'Klementina Zakruzhetsaya', number: '427-99-17' },
    ],
    filter: '',
  };
  componentDidMount() {
    const localData = localStorage.getItem(LOCALSTORAGE_KEY);
    if (localData) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(
        LOCALSTORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );
      // console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    }
  }

  formSubmitHandler = data => {
    if (this.state.contacts.some(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    this.setState(prev => ({ contacts: [...prev.contacts, data] }));
  };
  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  handleDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div className={css.section}>
        <h1 className={css.header}>Phonebook</h1>
        <ContactForm submitProps={this.formSubmitHandler} />
        <h2 className={css.header}>Contacts</h2>
        <Filter filter={filter} onFilter={this.handleFilter} />
        <ContactsList
          contacts={filteredContacts}
          handleDeleteCard={this.handleDeleteContact}
        />
      </div>
    );
  }
}
