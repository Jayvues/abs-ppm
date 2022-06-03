/**
 * @Author :JAY
 * Project :ABS Project Tracking System 
 * Client : React etc.,
 */

// Backlog
import React, { Component } from "react";
import ProjectTask from "./ProjectTasks/ProjectTask";
import "../../style.css";

class Backlog extends Component {
  render() {
    const { project_tasks_prop } = this.props;

    const tasks = project_tasks_prop.map((project_task) => (
      <ProjectTask key={project_task.id} project_task={project_task} />
    ));

    let todoItems = [];
    let inProgressItems = [];
    let doneItems = [];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].props.project_task.status === "TO_DO") {
        todoItems.push(tasks[i]);
      }
    }

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].props.project_task.status === "IN_PROGRESS") {
        inProgressItems.push(tasks[i]);
      }
    }

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].props.project_task.status === "DONE") {
        doneItems.push(tasks[i]);
      }
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="text-center mb-2">
              <div className="contact btn-custom todo">
                <h4>
                  <b>TO DO</b>
                </h4>
              </div>
            </div>
            {todoItems}
          </div>

          <div className="col-md-4">
            <div className="text-center mb-2">
              <div className="contact btn-custom">
                <h4>
                  <b>In Progress</b>
                </h4>
              </div>
            </div>
            {inProgressItems}
          </div>
          <div className="col-md-4">
            <div className="text-center mb-4">
              <div className="contact btn-custom">
                <h4>
                  <b>Done</b>
                </h4>
              </div>
            </div>
            {doneItems}
          </div>
        </div>
      </div>
    );
  }
}

export default Backlog;
