import React from "react";
import "./footer.css"
import "../../icon/themify-icons/themify-icons.css"
import logo from "../../img/Unifix-removebg.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div id="footer">
            <ul>
                <li className="logo">
                    <img src={logo} alt=""/>
                    <p style={{textAlign:"center", color:"black", fontSize:"17px"}}>Nâng cao kỹ năng và kiến thức chuyên ngành với Giảng viên chất lượng!</p>
                </li>
                <li className="subjects">
                    <ul>
                        <li className="heading">Các môn</li>
                        <li><a href="#">Lập trình C++</a></li>
                        <li><a href="#">Lập trình OOP</a></li>
                        <li><a href="#">Tiếng Anh</a></li>
                    </ul>
                </li>
                <li className="path">
                    <ul>
                        <li className="heading">Đường dẫn</li>
                        <li><a href="#">Môn học</a></li>
                        <li><a href="#">Lớp học</a></li>
                        <li><a href="#">Học 1-1</a></li>
                        <li><a href="#">Tự học</a></li>
                        <li><a href="#">Về UniFix</a></li>
                    </ul>
                </li>
                <li className="contact">
                    <ul>
                        <li style={{color:"#00BBF9"}}>
                            <FontAwesomeIcon icon={faLocationDot} style={{paddingRight:"17px"}} />
                            Địa chỉ:
                            <p style={{margin:"0", color:"black"}}>400 Điện Biên Phủ, Phường 3, Quận 3,
                            Thành phố Hồ Chí Minh</p>
                        </li>
                        <li><FontAwesomeIcon icon={faPhone} style={{color:"#00BBF9", paddingRight:"17px"}}/>Điện thoại :+9229341037</li>
                        <li><FontAwesomeIcon icon={faClock} style={{color:"#00BBF9", paddingRight:"17px"}}/>Giờ mở cửa: 8 to 20</li>
                        <li><FontAwesomeIcon icon={faEnvelope} style={{color:"#00BBF9", paddingRight:"17px"}}/>Email: info@unifix.com</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Footer