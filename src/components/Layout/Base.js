/**
 * @Author :JAY
 * Project :ABS Project Tracking System 
 * Client : React etc.,
 */

// Landing Page
import { logout } from "../../actions/securityActions";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import "../../App.css";

class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 class="hero-title">
                ABS
                <br /> Project <br/>Planner
              </h1>
              <p className="hero-discription">
                A easy way to prepare, assign, track, update our projects !
              </p>
              <div class="d-flex justify-center ui vertical masthead center aligned segment"/>
              {/* <Link
                className={
                  "flex-shrink-10 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-lg border-4 text-white py-1 px-2 rounded"
                }
                to={"/register"}
              >
                Signup
              </Link> */}
              &nbsp;
              <Link
                className={"col-md-3 contact form-control btn-custom" 
                  
                }
                to={"/login"}
              >
                Login
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps)(Landing);
