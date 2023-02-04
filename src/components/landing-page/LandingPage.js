import React from "react";
import {Form, Button, Card, Alert, FormGroup, InputGroup, FormControl} from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import "../../icon/themify-icons/themify-icons.css";
import "../theme.css";
import "../../icon/css.gg-master/icons/all.css";
import googleIcon from "../../img/google.png";
import facebookIcon from "../../img/facebook.png";
import search from "../../img/Vector.png";
import "./LandingPage.css";
import "../../";
import { width } from "@mui/system";
import blue from "../../img/blue.png"
import coding from "../../img/Coding_workshop_amico.png"
export default function LandingPage() {
    return(
        <div className="landing-page">
            <div className="container">
                <div style={{float: "left", width: "50%"}}>
                <div className="text" style={{ float: "left", width: "50%"}}>
                            <h2
                                style={{
                                    fontWeight:"var(--header-weight)",
                                    fontSize:"var(--header-size)", position:"absolute", zIndex:"100", marginTop: "80px"}}>Nâng cao kỹ năng và kiến thức</h2>
                            <div style={{height:"20px", width:"145px", backgroundColor:"#FFB830", transform:"rotate(-180deg)", marginTop:"100px", marginLeft: "330px"}}></div>
                                
                            <h2
                                style={{
                                    fontWeight:"var(--header-weight)",
                                    fontSize:"var(--header-size)", position:"absolute", zIndex:"100", marginTop:"20px"}}>chuyên ngành để thăng tiến</h2>
                            <div style={{height:"20px", width:"145px", backgroundColor:"#FFB830", transform:"rotate(-180deg)", marginTop:"40px", marginLeft: "90px"}}></div>
                            <h2
                                style={{
                                    fontWeight:"var(--header-weight)",
                                    fontSize:"var(--header-size)", position:"absolute", zIndex:"100", marginTop:"20px"}}>trong sự nghiệp</h2>
                            <div style={{height:"20px", width:"145px", backgroundColor:"#FFB830", transform:"rotate(-180deg)", marginTop:"40px", marginLeft: "90px"}}></div>
                            </div>

                    <div className="heading d-flex" style={{ fontSize:"14px", width:"728px"}}>
                                            <Form.Group  id="name" style={{}}>
                                                <Form.Control className="info" 
                                                              type="name"
                                                              placeholder="Tìm kiếm tất cả lớp học..." style={{marginTop:"60px", height:"48px", opacity: "0.5",  filter: "alpha(opacity=80)", width: "500px"}}
                                                />
                            
                                            </Form.Group>
                    </div>
                            <div>
                                <div style={{}}>
                    
                                        <div className="d-flex" style={{gap:"10px"}}>
                                            <h5 style={{marginTop: "10px"}}>Phổ biến:</h5>
                                            <div className="subject">OOP</div>
                                            <div className="subject">Lập trình C++</div>
                                            <div className="subject">Tiếng Anh giao tiếp</div>
                                        
                                        </div>
                                        <div className="d-flex" style={{gap:"10px"}}>
                                            <div className="subject">Lập trình C++</div>
                                            <div className="subject">Tiếng Anh giao tiếp</div>
                                            <div className="subject">OOP</div>
                                        </div>
                                </div>
                            </div>
                    
                </div>
                          
                
            <div style={{float: "right", width: "50%"}}>
                <img src={coding} alt=""/>
            </div>          
            </div>
        
        </div>
        
    )
}