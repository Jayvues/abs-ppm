/**
 * @Author :JAY
 * Project :ABS Project Tracking System 
 * Client : React etc.,
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addProjectTask } from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import classnames from "classnames";

class AddProjectTask extends Component {
  constructor(props) {
    super(props);

    const { id } = this.props.match.params;

    this.state = {
      summary: "",
      acceptanceCriteria: "",
      status: "",
      priority: 0,
      dueDate: "",
      projectIdentifier: id,
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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newTask = {
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status,
      priority: this.state.priority,
      dueDate: this.state.dueDate,
    };
    this.props.addProjectTask(
      this.state.projectIdentifier,
      newTask,
      this.props.history
    );
    console.log(newTask);
  }

  render() {
    const { id } = this.props.match.params;
    const { errors } = this.state;
    return (
      <div className="add-PBI">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto pt-3">
              <Link to={`/projectBoard/${id}`} className="btn btn-dark">
                Back to Project Board
              </Link>
              <h4 className="display-9 text-center pt-3">Add Project Task</h4>
              <p className="lead text-center">Project Name + Code</p>
              <form class="w-full" onSubmit={this.onSubmit}>
                <div className="flex items-center border-b border-blue-500 py-2">
                  <input
                    type="text"
                    className={classnames(
                      "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none box-shadow: 0 0 10px green",
                      {
                        "is-invalid": errors.summary,
                      }
                    )}
                    name="summary"
                    placeholder="Project Task summary"
                    value={this.state.summary}
                    onChange={this.onChange}
                  />
                  {errors.summary && (
                    <div className={"invalid-feedback"}>{errors.summary}</div>
                  )}
                </div>
                <div className="flex items-center border-b border-blue-500 py-2">
                  <textarea
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none box-shadow: 0 0 10px green"
                    placeholder="Acceptance Criteria"
                    name="acceptanceCriteria"
                    value={this.state.acceptanceCriteria}
                    onChange={this.onChange}
                  />
                </div>
                <h6>Due Date</h6>
                <div className="flex items-center border-b border-blue-500 py-2">
                  <input
                    type="date"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none box-shadow: 0 0 10px green"
                    name="dueDate"
                    value={this.state.dueDate}
                    onChange={this.onChange}
                  />
                </div>
                <div className="flex items-center border-b border-blue-500 py-2">
                  <select
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none box-shadow: 0 0 10px green"
                    name="priority"
                    value={this.state.priority}
                    onChange={this.onChange}
                  >
                    <option value={0}>Select Priority</option>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Done</option>
                  </select>
                </div>

                <div className="flex items-center border-b border-blue-500 py-2">
                  <select
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none box-shadow: 0 0 10px green"
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                  >
                    <option value="">Select Status</option>
                    <option value="TO_DO">TO DO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                  </select>
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
    );
  }
}

AddProjectTask.propTypes = {
  addProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { addProjectTask })(AddProjectTask);
