/**
 * @Author :JAY
 * Project :ABS Project Tracking System 
 * Client : React etc.,
 */

// User Registration
import React, { Component } from "react";
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      fullName: this.state.fullName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    this.props.createNewUser(newUser, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-9 text-center pt-5">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
              <form class="w-full" onSubmit={this.onSubmit}>
                <div class="flex items-center border-b border-blue-500 py-2">
                  <input
                    type="text"
                    className={classnames(
                      "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none box-shadow: 0 0 10px green",
                      {
                        "is-invalid": errors.fullName,
                      }
                    )}
                    placeholder="Full Name"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.onChange}
                  />
                  {errors.fullName && (
                    <div className={"invalid-feedback"}>{errors.fullName}</div>
                  )}
                </div>
                <div class="flex items-center border-b border-blue-500 py-2">
                  <input
                    type="text"
                    className={classnames(
                      "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none box-shadow: 0 0 10px green",
                      {
                        "is-invalid": errors.username,
                      }
                    )}
                    placeholder="Email Address (User name)"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  {errors.username && (
                    <div className={"invalid-feedback"}>{errors.username}</div>
                  )}
                </div>
                <div class="flex items-center border-b border-blue-500 py-2">
                  <input
                    type="password"
                    className={classnames(
                      "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none box-shadow: 0 0 10px green",
                      {
                        "is-invalid": errors.password,
                      }
                    )}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className={"invalid-feedback"}>{errors.password}</div>
                  )}
                </div>
                <div class="flex items-center border-b border-blue-500 py-2">
                  <input
                    type="password"
                    className={classnames(
                      "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none box-shadow: 0 0 10px green",
                      {
                        "is-invalid": errors.confirmPassword,
                      }
                    )}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                  {errors.confirmPassword && (
                    <div className={"invalid-feedback"}>
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <br></br>
                <input
                  type="submit"
                  name="Register"
                  class="contact form-control btn-custom"
                />
              </form>
            </div>
          </div>
        </div>
        <p>
          <a href="javascript:history.back()">Go Back</a>
        </p>
      </div>
    );
  }
}

Register.protoTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  security: state.security,
});
export default connect(mapStateToProps, { createNewUser })(Register);
