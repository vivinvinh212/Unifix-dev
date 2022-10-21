import {Button, Card, Form} from "react-bootstrap";
import ProfileAvatar3 from "../../img/Profile-avatar-3.png";
import cameraIcon from "../../img/camera_icon.png";
import banner5 from "../../img/banner5.png";
import React from "react";
import {Link} from "react-router-dom";

export default function ProfilePageInfo() {
    return (
        <>
            <div className="heading" style={{height:"200px", marginTop:"139px"}}>
                <div>
                    <h2 className="text-center mb-3"
                        style={{
                            fontWeight:"var(--header-weight)",
                            fontSize:"var(--header-size)",
                            color:"#00BBF9"}}>Thông tin</h2>
                    <div className="d-flex align-items-center justify-content-center">
                        <h2 className="text-center"
                            style={{
                                fontWeight:"var(--header-weight)",
                                fontSize:"var(--header-size)", position:"absolute", zIndex:"100"}}>Cá nhân</h2>
                        <div style={{height:"20px", width:"101px", backgroundColor:"#FFB830", transform:"rotate(-180deg)", marginTop:"15px"}}></div>
                    </div>
                </div>
            </div>
            <div className="overview d-flex justify-content-center" style={{gap:"80px", fontSize:"20px", color:"#5A5A5A", fontWeight:"600"}}>
                <div>
                    <p className="text-center" style={{color:"#00BBF9", marginBottom:"12px"}}>
                        <Link to="#" style={{color:"#00BBF9", textDecoration:"none"}}>Thông tin</Link></p>
                    <div style={{width:"132px", height:"3px", background:"#00BBF9"}}></div>
                </div>
                <div>
                    <p className="text-center" style={{color:"#333333", marginBottom:"12px"}}>
                        <Link to="/profile-page-sessions&reviews" style={{color:"#333333", textDecoration:"none"}}>Sessions & Reviews</Link></p>
                    <div style={{width:"232px", height:"3px"}}></div>
                </div>
            </div>
            <div className="tutor-description">
                <main>
                    <div className="d-flex align-content-center justify-content-center">
                        <Card style={{
                            width: "83.3%",
                            height: "fit-content", paddingTop:"82px",
                            background: "rgba(189, 244, 249, 0.2)",
                            WebkitBackdropFilter: "blur(11px)",
                            boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                            borderRadius: "32px", borderStyle:"none", marginBottom:"357px", marginTop:"45px", border: "3px solid rgba(255, 255, 255, 0.28)"}}>
                            <Card.Body className="d-flex flex-row justify-content-center">
                                <div className="left-row" style={{marginRight:"10%"}}>
                                    <div className="profile-avatar">
                                        <div className="profile-frame d-flex align-items-end justify-content-center"
                                             style={{
                                                 position:"absolute",
                                                 margin:"0",
                                                 padding:"0",
                                                 zIndex:"1",
                                                 width:"384px",
                                                 height:"384px",
                                                 border: "1px solid #00BBF9",
                                                 borderRadius:"50%",
                                                 background: "linear-gradient(0deg, rgba(0, 187, 249, 0.343) 0%, rgba(0, 187, 249, 0.231) 28.93%, rgba(0, 187, 249, 0) 100%)"}}>
                                            <a href="#" className="text-center">
                                                <img src={cameraIcon} alt=""/>
                                                <p style={{color:"#A7A7A7"}}>Tải hình ảnh lên</p>
                                            </a>
                                        </div>
                                        <img style={{height:"384px", width:"384px"}} src={ProfileAvatar3} alt=""/>
                                    </div>
                                    <img style={{marginTop:"100px"}} src={banner5} alt=""/>
                                </div>
                                <div style={{width:"486px"}}>
                                    <div className="d-flex" style={{gap:"16px"}}>
                                        <Form.Group id="profile">
                                            <Form.Label className=""
                                                        style={{
                                                            color: "var(--color-txt)",
                                                            fontFamily: "var(--form-label-font-family)",
                                                            fontSize: "var(--small-header-size)"}}>First name</Form.Label>
                                            <Form.Control className="info"
                                                          type="name"
                                                          placeholder="First Name" style={{width:"235px"}}
                                                          required
                                            />
                                        </Form.Group>
                                        <Form.Group id="profile">
                                            <Form.Label className=""
                                                        style={{
                                                            color: "var(--color-txt)",
                                                            fontFamily: "var(--form-label-font-family)",
                                                            fontSize: "var(--small-header-size)"}}>Last name</Form.Label>
                                            <Form.Control className="info"
                                                          type="name"
                                                          placeholder="Last Name" style={{width:"235px"}}
                                                          required
                                            />
                                        </Form.Group>
                                    </div>
                                    <Form.Group id="profile">
                                        <Form.Label className=""
                                                    style={{
                                                        color: "var(--color-txt)",
                                                        fontFamily: "var(--form-label-font-family)",
                                                        fontSize: "var(--small-header-size)"}}>Email Address</Form.Label>
                                        <Form.Control className="info"
                                                      type="name"
                                                      placeholder="Email Address"
                                                      required
                                        />
                                    </Form.Group>
                                    <Form.Group id="profile">
                                        <Form.Label className=""
                                                    style={{
                                                        color: "var(--color-txt)",
                                                        fontFamily: "var(--form-label-font-family)",
                                                        fontSize: "var(--small-header-size)"}}>Phone number</Form.Label>
                                        <Form.Control className="info"
                                                      type="name"
                                                      placeholder="Phone number"
                                                      required
                                        />
                                    </Form.Group>
                                    <Form.Group id="profile">
                                        <Form.Label className=""
                                                    style={{
                                                        color: "var(--color-txt)",
                                                        fontFamily: "var(--form-label-font-family)",
                                                        fontSize: "var(--small-header-size)"}}>Time Zone</Form.Label>
                                        <Form.Control className="info"
                                                      type="name"
                                                      placeholder="Time Zone"
                                                      required
                                        />
                                    </Form.Group>
                                    <Form.Group id="profile">
                                        <Form.Label className=""
                                                    style={{
                                                        color: "var(--color-txt)",
                                                        fontFamily: "var(--form-label-font-family)",
                                                        fontSize: "var(--small-header-size)"}}>Student School</Form.Label>
                                        <Form.Control className="info"
                                                      type="name"
                                                      placeholder="Student School"
                                                      required
                                        />
                                    </Form.Group>
                                    <Button className="w-100" type="submit"
                                            style={{
                                                borderRadius: "var(--button-borderRadius)",
                                                borderStyle: "var(--button-borderStyle)",
                                                margin: "var(--button-margin)",
                                                marginTop:"59px",
                                                width: "var(--button-width)",
                                                height: "var(--button-height)",
                                                fontSize: "var(--button-fontSize)",
                                                fontWeight: "var(--button-fontWeight)",
                                                backgroundColor: "var(--button-backgroundColor)",
                                                fontFamily: "var(--font-family)"}}>
                                        Lưu
                                    </Button>
                                    <p className="mt-4"
                                       style={{
                                        textAlign:"center", color:"#FFB830", textDecoration:"underline"}}>
                                        Thay đổi mật khẩu
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </main>
            </div>
        </>
    )
}