/**
 * @Author :JAY
 * Project :ABS Project Tracking System 
 * Client : React etc.,
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";
import logo from "../../images/abs-logo.png";
import "../../App.css";

class Header extends Component {
  logout() {
    this.props.logout();
    window.location.href = "/";
  }

  render() {
    const { validToken, user } = this.props.security;

   const userIsAuthenticated = (
        
      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto ">
          <li className="nav-item">
            <Link className="btn btn-sm btn-primary mr-1 " to={"/dashboard"}>
              <i className="fas fa-user-circle mr-1" />
              {user.fullName}
            </Link>
          </li>
          &nbsp;
          <li>
            <Link
              className="btn btn-sm btn-primary mr-2 "
              to={"/logout"}
              onClick={this.logout.bind(this)}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );

    const userIsNotAuthenticated = (
      <div className="collapse navbar-collapse " id="mobile-nav">
        &nbsp;
        <ul className="navbar-nav ml-auto ">
          {/* <li className="nav-item">
            <Link className="contact form-control btn-custom" to={"/register"}>
              Sign Up
            </Link>
          </li> */}
          &nbsp;
          {/* <li>
            <Link className="contact form-control btn-custom" to={"/login"}>
              Login
            </Link>
          </li>*/}
        </ul>
      </div>
    );

    const userbuttons = (

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
              <span class="toggler-icon top-bar"></span>
              <span class="toggler-icon middle-bar"></span>
              <span class="toggler-icon bottom-bar"></span>
            
            </button>
    );

    let headerLinks;
    if (validToken && user) {
      headerLinks = userIsAuthenticated;
      
    } 
    else {
      headerLinks = userIsNotAuthenticated;
    }

let buttonlinks;

 if ( validToken && user) {
    
    buttonlinks = userbuttons;
  } 
  else {
   
   }


    return (
      //Navbar Component
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-light mb-4 shadow-xl">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img class="logo" src={logo} alt="logo" />
            </Link>
            
            {buttonlinks}
         
            {headerLinks}
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps, { logout })(Header);
