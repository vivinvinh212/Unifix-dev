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
    <Container style={{margin: "0"}}>
      <div id="header" style={{height: "78px", width: "100%"}}>
        <img src={logo} alt="" style={{width: "150px", paddingTop: "25px", paddingBottom: "25px", paddingLeft: "25px"}}/>
      </div>
      <Container className="d-flex align-items-center justify-content-between"
                 style={{ minHeight: "90vh", gap: "90px", marginLeft: "100px"}}>
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
          <div className="justify-content-right" ><img src={picture} alt="" style={{width: "700x"}}/></div>
      </Container>
    </Container>
  )
}

export default App
