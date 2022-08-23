import React, { Component } from "react";

class DeleteBtn extends Component {
    render() {
        return (
            <button className="button-contact" onClick={() =>
            { this.props.delete(this.props.id) }}>delete</button>
    )}
}
export default DeleteBtn