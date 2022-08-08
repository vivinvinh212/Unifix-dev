import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./login/Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import picture from "../img/Frame.png"
import logo from "../img/logo.png";

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
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
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
