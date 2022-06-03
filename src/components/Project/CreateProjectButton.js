/**
 * @Author :JAY
 * Project :ABS Project Tracking System 
 * Client : React etc.,
 */

// Button component for crate a project
import React from "react";
import { Link } from "react-router-dom";
import { Add } from "@material-ui/icons";

const CreateProjectButton = () => {
  return (
    <React.Fragment>
      <div className="text-center mb-0 py-1">
        <Link to={"/addProject"} className="contact form-control btn-custom">
          Create a Project
        </Link>
      </div>
    </React.Fragment>
  );
};

export default CreateProjectButton;
