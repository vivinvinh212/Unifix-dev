import React from "react";
import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import NavbarLogin from "./navigation-bar/NavbarLogin";
import Navbar1 from "./navigation-bar/Navbar";
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
import MakeClass1 from "./make-class/Makeclass1";
import MakeClass2 from "./make-class/Makeclass2";
import MakeClass3 from "./make-class/Makeclass3";
import LandingPage from "./landing-page/LandingPage";
import LandingPage1 from "./landing-page/LandingPage1";
import ProfilePageInfo from "./profile-page/ProfilePageInfo";
import ProfilePageSession from "./profile-page/ProfilePageSession";
import Tutor1 from "./study1-1/Tutor1";
import Tutor2 from "./study1-1/Tutor2";
import Tutor3 from "./study1-1/Tutor3";
import Tutor4 from "./study1-1/Tutor4";
import {auth} from "../firebase"


export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const login = () => {
    setIsLogin(!isLogin);
  }
  React.useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
        return;
      }
      else{
        setIsLogin(false);
        return;
      }
    });
    return () => {
      unsubscibed();
    };
  },);
    
  return (
    <div>
        <div className="navbar p-0"> {isLogin == false && <Navbar1 />} 
        {isLogin == true && <NavbarLogin />} 
        </div>
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
                  <Route path="/make-class1" component={MakeClass1} />
                  <Route path="/make-class2" component={MakeClass2} />
                  <Route path="/make-class3" component={MakeClass3} />
                  <Route path="/profile-page-info" component={ProfilePageInfo}/>
                  <Route path="/profile-page-sessions&reviews" component={ProfilePageSession}/>
                  <Route path="/landing-page" component={LandingPage}/>
                  <Route path="/landing-page1" component={LandingPage1}/>
                  <Route path="/tutor1" component={Tutor1}/>
                  <Route path="/tutor2" component={Tutor2}/>
                  <Route path="/tutor3" component={Tutor3}/>
                  <Route path="/tutor4" component={Tutor4}/>
              </Switch>
            </AuthProvider>
          </Router>
              
        </div>
      </div>
        <div className="footer"> <Footer /> </div>
    </div>
  )
}