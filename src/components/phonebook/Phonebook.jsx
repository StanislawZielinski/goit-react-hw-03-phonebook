import React, { Component } from "react";
import { nanoid } from 'nanoid';
import "./Phonebook.css"
import Form from "components/Form/Form";
import DeleteBtn from "components/DeleteBtn/DeleteBtn"
import Filter from "components/Filter/Filter"
import Contacts from "components/Contacts/Contacts";

class Phonebook extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const name = form.elements.name.value;
        const phoneNumber = form.elements.number.value;
        for (const contact of this.state.contacts) {
            if (contact.name.includes(name)) {
                alert(`${name} is already in contacts`)
                form.reset();
                return
            }  
        };
        
        this.setState({...this.state, contacts:[...this.state.contacts,{name:name, id:nanoid(), number:phoneNumber} ]})
        form.reset();
    }
    
    componentDidUpdate() {
        localStorage.setItem("newState", JSON.stringify(this.state.contacts));
        console.log(localStorage);
    }
        componentDidMount() {
        const newStatetmp = localStorage.getItem("newState");
        const newState = JSON.parse(newStatetmp);
            console.log(newState);
            if (newState !== null) {
                this.setState({...this.state, contacts:newState})
            }
    }
    renderContacts = (filterValue, contacts) => {
        if (!filterValue) {
            return contacts.map(contact =>
            {
                return <li className="contacts" key={contact.id}>{contact.name}: {contact.number}
                            <DeleteBtn delete={this.delete} id={contact.id} />
                        </li>
            })
        };
        const filterFunction = contacts.filter((el) => el.name.toLowerCase().includes(filterValue.toLowerCase()));
            return (
            filterFunction.map(contact =>
            {
                return <li className="contacts" key={contact.id}>{contact.name}: {contact.number}
                    <DeleteBtn delete={this.delete} id={contact.id} />
                </li>
            })
        )
    }
    onChange = (evt) => this.setState({ ...this.setState, filter: evt.target.value });
    delete = (id) => {
        const newContactList = this.state.contacts.filter((contact) =>
            contact.id !== (id));
        this.setState({ ...this.setState, contacts: newContactList });
    }
    render() {
        return (
            <div className="wrapper">
                <Form handleSubmit={this.handleSubmit} />
                <div className="contacts-wrapper">
                    <Filter onChange={this.onChange} />
                    <Contacts renderContacts={this.renderContacts}
                            filter={this.state.filter} contacts={this.state.contacts} />
                </div>
            </div>
    )}
}
export default Phonebook