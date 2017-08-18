import React from "react";
import autoBind from "react-autobind";

//redux
import { connect } from "react-redux";
import * as actionCreators from "../actions";

import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0
    }
    autoBind(this);
  }
  hideNav() {
    if(window.scrollY > 150) {
      this.setState({
        opacity: 1
      })
    }
  }
  componentWillMount() {
    if(!this.props.isShowingHomeDesc) {
        console.log("Here")
      this.setState({
        opacity: 1
      });
    } else {
      console.log("Here 2")
      this.setState({
        opacity: 0
      })
    }
    this.checkRoute();
  }
  componentDidMount() {
    window.addEventListener('scroll', this.hideNav);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideNav);
  }
  checkRoute() {
    if( ! (document.location.href.indexOf("#") + 2 > document.location.href.length - 1) && this.state.opacity != 1) {
      console.log("Here 3")
      this.setState({
        opacity: 1
      })
    }
  }
  render() {
    this.checkRoute();
    return (
      <div className="navbar-wrapper" style={{opacity:this.state.opacity}}>
        <img className="logo-navbar" src="http://via.placeholder.com/250x65" alt="logo placeholder"></img>
        <Link className="create-place-nav" to="/addPlace">Create Place</Link>
        <Link className="places-nav" to="/">Places</Link>
      </div>
    )
  }
}

export default connect((state) => state, actionCreators)(Navbar);
