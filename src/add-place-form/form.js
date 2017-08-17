import React from "react";


class Form extends React.Component {
  render() {
    return (
      <div className="form-wrapper">
        <h1 className="form-title">Share something amazing...</h1>
        <input className="form-input" placeholder="image url (required)" onChange={(event) => {this.props.handleChange("image", event)}} value={this.props.input.image} />
        <input className="form-input" placeholder="name (required)" onChange={(event) => {this.props.handleChange("name", event)}} value={this.props.input.name} />
        <input className="form-input" placeholder="location (required)" onChange={(event) => {this.props.handleChange("location", event)}} value={this.props.input.location} />
        <textarea className="form-input form-input-desc" placeholder="description (optional)" onChange={(event) => {this.props.handleChange("description", event)}} value={this.props.input.description} />
        <button className="form-button button" onClick={() => {this.props.handleClick(this.props.input); this.props.clearInputs();}}>add place</button>
      </div>
    )
  }
}

export default Form;
