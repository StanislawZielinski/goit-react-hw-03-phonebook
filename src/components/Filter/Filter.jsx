import React, { Component } from "react";

class Filter extends Component {

    render() {
        return (
            <div>
                <p className="title">Contacts</p>
                <p className="filter-title">filter contacts by name</p>
                <input className="input" onChange={this.props.onChange} />
            </div>
    )}
}

export default Filter