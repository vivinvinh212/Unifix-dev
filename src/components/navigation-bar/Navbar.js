import React from "react";
import "./navbar.css"
import logo from "../../img/Unifix-removebg.png";
import "../../icon/themify-icons/themify-icons.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div id="navbar">
            <div className="logo"><a href="/"><img src={logo} alt=""/></a></div>
            <ul className="left-navbar-content">
                <li><a href="#">Môn học</a></li>
                <li><a href="#">Lớp học</a></li>
                <li><a href="/study1-1">Học 1-1</a></li>
                <li><a href="#">Tự học</a></li>
                <li><a href="#">Về UniFix</a></li>
            </ul>
            <ul className="right-navbar-content">
                <li><a href="#">Giảng viên</a></li>
                <li>
                    <a className="login-button" href="/" style={{color:"#00BBF9"}}>
                    <FontAwesomeIcon icon={faRightToBracket} style={{paddingRight:"12.5px"}}/>
                        Đăng nhập</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar