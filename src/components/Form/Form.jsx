import { Component } from "react";
import { nanoid } from 'nanoid';
import css from './Form.module.css';

class ContactForm extends Component {
    state = {
        id:'',
        name: '',
        number: ''
    }
    handleChange = e => {
        this.setState({ id: nanoid(), [e.currentTarget.name]: e.currentTarget.value });
    };
    onButtonSubmit = (e) => {
        e.preventDefault();
        this.props.submitProps(this.state);
        this.reset();
    };
    reset = () => {
        this.setState({name: '', number: '',id:''})
    };

    render() {
        return (
            <form className={css.form_input} onSubmit={this.onButtonSubmit}>
                <label className={css.label} htmlFor="name">
                    Name
                    <input
                        className={css.input_name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                </label>
                
                <label className={css.label} htmlFor="number">
                    Phone number
                    <input
                        className={css.input_phone}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.handleChange}
                />
                </label>
                <button className={css.button_submit} type="submit">Add contact</button>
            </form>
            
        );
    }
}

export default ContactForm;