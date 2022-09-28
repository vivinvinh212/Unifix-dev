import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UpdateProfile from "./UpdateProfile"
import logo from "../img/logo.png";
import Navbar from "./navigation-bar/Navbar";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import Signup from "./login-page/Signup";
import Login from "./login-page/Login";
import ForgotPassword from "./login-page/ForgotPassword";
import picture from "../img/Frame.png";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
        <div className="navbar p-0"> <Navbar /> </div>
      <Container className="d-flex align-items-center justify-content-center">
        <div className="justify-content-left">
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
        <div className="footer"> <Footer /> </div>
    </div>
  )
}

export default App
