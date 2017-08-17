import React from "react";
import autoBind from "react-autobind";

import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
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
  componentDidMount() {
    window.addEventListener('scroll', this.hideNav);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideNav);
  }
  checkRoute() {
    if(document.location.pathname !== "/" && this.state.opacity !== 1) {
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

export default Navbar;
