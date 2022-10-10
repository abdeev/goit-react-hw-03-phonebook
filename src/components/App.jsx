import React, { Component } from 'react';
import ContactForm from './Form';
import Filter from './Filter';
import ContactsList from './ContactsList';
import css from './Phonebook.module.css';


export default class App extends Component {
  state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        name: '',
        number: '',
        filter: ''
    }

    formSubmitHandler = (data) => {
        if (this.state.contacts.some(({ name }) => name === data.name)) {alert(`${data.name} is already in contacts!`);
      return;
    }
        this.setState(prev => ({ contacts: [...prev.contacts, data] }));
    };
    handleFilter = e => {this.setState({ filter: e.currentTarget.value });
    };
    handleDeleteContact = id => {
     this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };
    render() {
        const { contacts, filter } = this.state;
        const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
      return (
        <div className={css.section}>
          <h1 className={css.header}>Phonebook</h1>
          <ContactForm submitProps={this.formSubmitHandler} />
          <h2 className={css.header}>Contacts</h2>
          <Filter
                    filter={filter}
                    onFilter={this.handleFilter}
          />
          <ContactsList
                    contacts={filteredContacts}
                    handleDeleteCard={this.handleDeleteContact}
          />
        </div>
      )}
};
