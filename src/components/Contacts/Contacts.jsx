import React, { Component } from "react";

class Contacts extends Component {

    render() {
        return (
            <div>
                <ul>{this.props.renderContacts(this.props.filter, this.props.contacts)}</ul>
                </div>
    )}
}
export default Contacts