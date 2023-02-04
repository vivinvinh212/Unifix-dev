import React from "react";
import "./navbar.css"
import logo from "../../img/Unifix-removebg.png";
import announcement from "../../img/announcement.png";
import class1 from "../../img/class.png";
import ava from "../../img/ava.png";
import "../../icon/themify-icons/themify-icons.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div id="navbar">
            <div className="logo"><a href="/landing-page"><img src={logo} alt=""/></a></div>
            <ul className="left-navbar-content">
                <li><a href="#">Môn học</a></li>
                <li><a href="/course-registration">Lớp học</a></li>
                <li><a href="/study1-1">Học 1-1</a></li>
                <li><a href="#">Tự học</a></li>
                <li><a href="#">Về UniFix</a></li>
            </ul>
            <ul className="right-navbar-content">
                <li></li>
                <li><img src={announcement} alt="" />
                <img src={class1} alt="" style={{marginLeft: "20px"}}/>
                <a href="/make-class1" style={{marginLeft: "20px"}}>Tạo lớp học</a>
                </li>
                <li>
                <a href="/profile-page-info"><img src={ava} alt=""/></a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar