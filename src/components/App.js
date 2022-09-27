import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UpdateProfile from "./UpdateProfile"
import logo from "../img/logo.png";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import Signup from "./login-page/Signup";
import Login from "./login-page/Login";
import ForgotPassword from "./login-page/ForgotPassword";
import picture from "../img/Frame.png";

function App() {
  return (
    <Container>
      <Container className="d-flex align-items-center justify-content-center"
                 style={{ minHeight: "100vh" }}>
        <div className="justify-content-left" style={{ minWidth: "432px"}}>
          <Router>
            <AuthProvider>
              <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                  <Route path="/update-profile" component={UpdateProfile} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </Container>
  )
}

export default App
