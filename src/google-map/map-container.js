import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import * as actionCreators from "../actions";


import Map from "./map.js";
import FormContainer from "./form/form-container.js";

class MapContainer extends React.Component {
  componentWillMount() {
    this.props.loadMarkers();
  }
  render () {
    return (
      <div>
        <FormContainer />
        <Map markers={this.props.markers} selected={this.props.selected} handleSet={this.props.setCurrent} handleAdd={this.props.addMarker} handleDelete={this.props.deleteMarker} containerElement={<div style={{height: "400px", width: "80vw", margin: "0px auto 30px auto"}}></div>} mapElement={<div style={{height: "100%"}}></div>}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actionCreators)(MapContainer);
