import React from "react";
import autoBind from "react-autobind";

//router
import { Link } from "react-router-dom";

import PlaceContainer from "../containers/place-container.js";

class PlacesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      opacity: 1
    }
    autoBind(this);
  }
  hideNav() {
    if(window.scrollY > 150) {
      this.setState({
        isHidden: true,
        opacity: 0
      })
    }
  }
  hideHomePageDescription() {
    if(this.state.isHidden) {
      return 'hide-desc'
    } else {
      return ""
    }
  }
  // checkReturnVisit() {
  //   if() {
  //     return 'hide-desc'
  //   } else {
  //     return ""
  //   }
  // }
  // }
  navPaddingTop() {
    if(this.state.isHidden) {
      return 'nav-padding-top'
    } else {
      return ""
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.hideNav);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideNav);
  }
  genPlaces() {
    return this.props.places.sort((a, b) => {return (b.voteUp - b.voteDown) - (a.voteUp - a.voteDown)}).map((item, index) => {
      return <PlaceContainer key={index + item._id} place={item} handleDelete={this.props.handleDelete} handleUp={this.props.handleUp} handleDown={this.props.handleDown} />
    })
  }
  render () {
    return (
      <div className="places-list-wrapper">
        <center>
          <div className={`full-page-layout ${this.navPaddingTop()}`} >

            <div className={`home-page-description ${this.hideHomePageDescription()}`} style={{opacity:this.state.opacity, display: this.props.isShowing ? "inherit" : "none"}}>
              <div className="home-page-description-child">
                <h1>Dream. Discover. Share.</h1>
                <p>Explore amazing places here. Love your favorites.  The best will rise to the top.</p>
                <Link to="/addPlace"><button className="add-place-button button">add place</button></Link>
              </div>
            </div>
            {/* row places-row */}
            <div className="place-col">
                {this.genPlaces()}

            </div>
          </div>
        </center>
      </div>
    )
  }
}

export default PlacesList;
