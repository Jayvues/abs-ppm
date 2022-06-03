/**
 * @Author :JAY
 * Project :ABS Project Tracking System 
 * Client : React etc.,
 */

// Master APP file
import "./App.css";
import "./style.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from "./components/Project/UpdateProject";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/ProjectBoard/ProjectTasks/AddProjectTask";
import UpdateProjectTask from "./components/ProjectBoard/ProjectTasks/UpdateProjectTask";
import Landing from "./components/Layout/Base";
//import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoute from "./securityUtils/SecureRoute";
import Footer from "../src/components/Layout/footer";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decode_jwtToken = jwt_decode(jwtToken);

  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decode_jwtToken,
  });

  const currentTime = Date.now() / 1000;
  if (decode_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          {
            //Public Routes
          }
          <Route exact path={"/"} component={Landing} />
          {/* <Route exact path={"/register"} component={Register} /> */}
          <Route exact path={"/login"} component={Login} />
          {}
          <Switch>
            <SecuredRoute exact path={"/dashboard"} component={Dashboard} />
            <SecuredRoute exact path={"/addProject"} component={AddProject} />
            <SecuredRoute
              exact
              path={"/updateProject/:id"}
              component={UpdateProject}
            />
            <SecuredRoute
              exact
              path={"/projectBoard/:id"}
              component={ProjectBoard}
            />
            <SecuredRoute
              exact
              path={"/addProjectTask/:id"}
              component={AddProjectTask}
            />
            <SecuredRoute
              exact
              path={"/updateProjectTask/:backlog_id/:pt_id"}
              component={UpdateProjectTask}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
