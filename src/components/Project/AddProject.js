/**
 * @Author :JAY
 * Project :ABS Project Tracking System 
 * Client : React etc.,
 */

// Add Projects to the dashboard
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import classnames from "classnames";

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      projectName: "",
      projectIdentifier: "",
      description: "",
      start_date: "",
      end_date: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //life cycle hooks
  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };
    this.props.createProject(newProject, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center pt-3">
                <h5>Create Project form</h5>
                <form class="w-full" onSubmit={this.onSubmit}>
                  <div className="flex items-center border-b border-blue-500 py-2">
                    <input
                      type="text"
                      className={classnames(
                        "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none box-shadow: 0 0 10px green",
                        {
                          "is-invalid": errors.projectName,
                        }
                      )}
                      placeholder="Project Name"
                      name={"projectName"}
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                    {errors.projectName && (
                      <div className={"invalid-feedback"}>
                        {errors.projectName}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center border-b border-blue-500 py-2">
                    <input
                      type="text"
                      className={classnames(
                        "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none box-shadow: 0 0 10px green",
                        {
                          "is-invalid": errors.projectIdentifier,
                        }
                      )}
                      placeholder="Unique Project ID"
                      name={"projectIdentifier"}
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                    />
                    {errors.projectIdentifier && (
                      <div className={"invalid-feedback"}>
                        {errors.projectIdentifier}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center border-b border-blue-500 py-2">
                    <textarea
                      className={classnames(
                        "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none box-shadow: 0 0 10px green",
                        {
                          "is-invalid": errors.description,
                        }
                      )}
                      placeholder="Project Description"
                      name={"description"}
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                    {errors.description && (
                      <div className={"invalid-feedback"}>
                        {errors.description}
                      </div>
                    )}
                  </div>
                  <h6>Start Date</h6>
                  <div className="flex items-center border-b border-blue-500 py-2">
                    <input
                      type="date"
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none box-shadow: 0 0 10px green"
                      name="start_date"
                      value={this.state.start_date}
                      onChange={this.onChange}
                    />
                  </div>
                  <h6>Estimated End Date</h6>
                  <div className="flex items-center border-b border-blue-500 py-2">
                    <input
                      type="date"
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none box-shadow: 0 0 10px green"
                      name="end_date"
                      value={this.state.end_date}
                      onChange={this.onChange}
                    />
                  </div>
                  <br></br>
                  <input
                    type="submit"
                    className="contact form-control btn-custom"
                  />
                </form>
              </div>
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

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createProject })(AddProject);
