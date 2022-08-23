import React, { Component } from "react";


class Form extends Component {
    
render() {
    return (
            <form className="form" onSubmit={this.props.handleSubmit}>
            <p className="title">Phonebook</p>
            <div className="input-wrapper">
                <label className="label">Name
                    <input
                    className="input"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </label>
                <label className="label">Phone number
                    <input
                        className="input"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                </label>
            </div>
                <button className="button" type="submit">Add contact</button>
            </form>
    )}
}

export default Form