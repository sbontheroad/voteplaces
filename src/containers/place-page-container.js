import React from "react";
import autoBind from "react-autobind";

//redux
import { connect } from "react-redux";
import * as actionCreators from "../actions";

//import components
import PlacePage from "../components/place-page.js";

class PlacePageContainer extends React.Component {
  constructor() {
    super()
    this.state ={
      comment: ""
    }
    autoBind(this);
  }
  handleComment(event) {
    this.setState({
      comment: event.target.value
    });
  }

  clearInput() {
    this.setState({
      comment: ""
    })
  }
  componentWillMount(){
    this.props.loadDataById(this.props.match.params.id);
    this.props.hideDesc();
  }
  render() {
    return (
      <div className="place-page-container-wrapper">
        <PlacePage handleComment={this.handleComment} clearInput={this.clearInput} input={this.state} addComment={this.props.comment} placePage={this.props.placePage} handleUp={this.props.voteUp} handleDown={this.props.voteDown} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actionCreators) (PlacePageContainer);
