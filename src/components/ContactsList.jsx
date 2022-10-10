import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './Button'
import css from './Phonebook.module.css';

class ContactsList extends Component {
    state = {
        contacts: [],
        filter: '',
        name: '',
        number: ''
    }
    handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });

    };
    filterChange = e => {
        this.setState({filter: e.currentTarget.value})
    }
    render() {
        const { contacts } = this.props;
        const handleDeleteCard = this.props.handleDeleteCard;
        return (
                <ul className={css.phonebook_list}>
                    {contacts.map(item => (
                        <li className={css.list_item} key={item.id}>{item.name}: {item.number}
                            <DeleteButton handleDeleteCard={() => handleDeleteCard(item.id)} />
                        </li>))}
                </ul>
        )
    }
}
ContactsList.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    handleDeleteCard: PropTypes.func,
}

export default ContactsList;