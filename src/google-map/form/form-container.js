import React from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import * as actionCreators from "../../actions";

import Form from "./form.js";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      lng: "",
      label: ""
    }
    autoBind(this);
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    })
  }
  handleClick(data) {
    this.props.addMarker(data);
    this.setState({
      lat: "",
      lng: "",
      label: ""
    })
  }
  render() {
    return (
      <div className="add-map-marker-form">
        <Form input={this.state} handleChange={this.handleChange} handleClick={this.handleClick}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default  connect(mapStateToProps, actionCreators)(FormContainer);
