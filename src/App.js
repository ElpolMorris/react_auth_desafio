import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./containers/Login/Login";
import Dashboard from "./containers/dashboard/Dashboard";
import CloseSession from "./components/close-session/CloseSession";
import DeleteUser from "./containers/delete-user/DeleteUser";
import CreateUser from "./containers/create-user/CreateUser";
import UpdateUser from "./containers/update-user/UpdateUser";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/dashboard" exact>
            <CloseSession />
            <Dashboard />
          </Route>
          <Route path="/dashboard/create" exact>
            <CloseSession />
            <CreateUser />
          </Route>
          <Route path="/dashboard/update/:id">
            <CloseSession />
            <UpdateUser />
          </Route>
          <Route path="/dashboard/delete/:id">
            <CloseSession />
            <DeleteUser />
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
