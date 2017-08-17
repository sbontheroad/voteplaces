import React from "react";
// import autoBind from "react-autobind";

import { Link } from "react-router-dom";

//redux
import { connect } from "react-redux";
import * as actionCreators from "../actions";

//import components
import PlacesList from "../components/places-list.js";

class PlacesListContainer extends React.Component {
  componentWillMount(){
    this.props.loadData();
  }
  render() {
    return (
      <div className="places-list-container-wrapper">
        <PlacesList isShowing={this.props.isShowingHomeDesc} places={this.props.places} handleDelete={this.props.deleteData} handleUp={this.props.voteUp} handleDown={this.props.voteDown} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actionCreators) (PlacesListContainer);
