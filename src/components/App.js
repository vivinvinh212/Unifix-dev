import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import Navbar from "./navigation-bar/Navbar";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import Signup from "./login-page/Signup";
import Login from "./login-page/Login";
import ForgotPassword from "./login-page/ForgotPassword";
import Footer from "./footer/Footer";
import Study11 from "./study1-1/Study11";
import TutorDescription from "./study1-1/TutorDescription";
import CourseRegistration from "./course-registration/CourseRegistration";
import CourseRegistrationDetail from "./course-registration/CourseRegistrationDetail";
import ProfilePageInfo from "./profile-page/ProfilePageInfo";
import ProfilePageSession from "./profile-page/ProfilePageSession";

function App() {
  return (
    <div>
        <div className="navbar p-0"> <Navbar /> </div>
      <div className="container-fluid">
        <div>
          <Router>
            <AuthProvider>
              <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                  <Route path="/update-profile" component={UpdateProfile} />
                  <Route path="/study1-1" component={Study11} />
                  <Route path="/course-registration" component={CourseRegistration} />
                  <Route path="/course-detail" component={CourseRegistrationDetail} />
                  <Route path="/tutor-description" component={TutorDescription} />
                  <Route path="/profile-page-info" component={ProfilePageInfo}/>
                  <Route path="/profile-page-sessions&reviews" component={ProfilePageSession}/>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </div>
        <div className="footer"> <Footer /> </div>
    </div>
  )
}

export default App
