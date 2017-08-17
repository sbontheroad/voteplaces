import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

//to={`/place/${this.props.place._id}`}

class Place extends React.Component {
  render () {
    return (
      //  place-col col-md-4 col-sm-6
      <div className="place-wrapper">
        <a onClick={(event) => {
          let eventX = event.pageX;
          let eventY = event.pageY;
          let heartElem = document.querySelector(`#like-button-${this.props.place._id}`);
          let heartCoords = heartElem.getBoundingClientRect();
          if(eventX >= heartCoords.left && eventX <= heartCoords.right) {
            if(eventY >= heartCoords.top  && eventY <= heartCoords.bottom)  {
              this.props.handleUp(this.props.place._id, event)
            } else {
              window.location.href= `/place/${this.props.place._id}`;
            }
          } else {
            window.location.href= `/place/${this.props.place._id}`;
          }
        }}><div className="image-wrapper">
          <img className="output-image" src={this.props.place.image} alt={this.props.place.name}></img>
          <div className="hover-block">
            <h2 className="name-hover">{this.props.place.name}</h2>
            <button id={`like-button-${this.props.place._id}`} className="heart-button"><FontAwesome name='heart' size='2x'/></button>
            <p className="count">( {(this.props.place.voteUp) - (this.props.place.voteDown)} )</p>
          </div>
        </div></a>

        {/* <button onClick={() => {this.props.handleDelete(this.props.place._id)}}>x</button> */}
      </div>
    )
  }
}

{/* <button className="down-button button" onClick={() => {this.props.handleDown(this.props.place._id)}}>hate it</button> */}
export default Place;
