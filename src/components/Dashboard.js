/**
 * @Author :JAY
 * Project :ABS Project Tracking System 
 * Client : React etc.,
 */
// Project Dashboard
import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import { PropTypes } from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const projects = this.props.project.projects;



    return (
      <div>
        {/*Dashboard Component (Project Item included) */}

        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-9 text-center pt-3">Projects</h1>
                
                <CreateProjectButton />
                <br />
                {projects.map((project) => (
                  <ProjectItem key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <p>
          <a href="javascript:history.back()">Go Back</a>
        </p>
      </div>

      /*{/!*  End of Dashboard Component *!/}*/
    );
  }
}
Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
});
export default connect(mapStateToProps, { getProjects })(Dashboard);
