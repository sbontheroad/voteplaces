import React from "react";

import Place from "../components/place.js";

class PlaceContainer extends React.Component {
  render () {
    return (
      <div className="place-container-wrapper">
        <Place place={this.props.place} handleDelete={this.props.handleDelete} handleUp={this.props.handleUp} handleDown={this.props.handleDown} />
      </div>
    )
  }
}

export default PlaceContainer;
