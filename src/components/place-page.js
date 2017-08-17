import React from "react";
import FontAwesome from "react-fontawesome";


import MapContainer from "../google-map/map-container.js";

class PlacePage extends React.Component {
  genComments() {
    return this.props.placePage.comments.map((item, i) => {
      return (<p key={item + i}>username: {item}</p>)
    });
  }

  render() {
    return (
      <div className="place-page-wrapper">
        <img className="place-page-image" src={this.props.placePage.image} alt={this.props.placePage.name}></img>
        <h1>{this.props.placePage.name}</h1>
        <h2>{this.props.placePage.location}</h2>
        <p>{this.props.placePage.description}</p>
        <button className="heart-button" onClick={() => {this.props.handleUp(this.props.placePage._id)}}><FontAwesome className="heart-button" name='heart' size='2x' /></button>
        <p className="count">( {(this.props.placePage.voteUp) - (this.props.placePage.voteDown)} )</p>
        {/* <button className="down-button button" onClick={() => {this.props.handleDown(this.props.placePage._id)}}>hate it</button> */}
        <div className="map-container">
          <MapContainer />
        </div>
        <div className="comment-area">
          <textarea className="comment-text-area" placeholder="Add a comment..."  value={this.props.input.comment} onChange={(event) => {this.props.handleComment(event)}}></textarea>
          <button className="place-page-button" onClick={() => {this.props.addComment(this.props.placePage._id, this.props.input.comment); this.props.clearInput();}}>submit</button>

        <div className="comment-output">
          {this.genComments()}
        </div>
        </div>
      </div>
    )
  }
}

export default PlacePage;
