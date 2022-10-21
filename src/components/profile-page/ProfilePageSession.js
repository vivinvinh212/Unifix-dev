import {Card, Form} from "react-bootstrap";
import banner6 from "../../img/banner6.png";
import React from "react";
import {Link} from "react-router-dom";
import cautionIcon from "../../img/caution_icon.png";

export default function ProfilePageSession() {
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
                        <Link to="/profile-page-info" style={{color:"#5A5A5A", textDecoration:"none"}}>Thông tin</Link></p>
                    <div style={{width:"132px", height:"3px"}}></div>
                </div>
                <div>
                    <p className="text-center" style={{color:"#00BBF9", marginBottom:"12px"}}>
                        <Link to="#" style={{color:"#00BBF9", textDecoration:"none"}}>Sessions & Reviews</Link></p>
                    <div style={{width:"232px", height:"3px", background:"#00BBF9"}}></div>
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
                            <Card.Body className="d-flex align-content-center justify-content-center">
                                <div>
                                    <div className="heading d-flex" style={{marginBottom:"24px", fontSize:"14px", width:"728px"}}>
                                        <Form.Group className="w-100" id="session" style={{}}>
                                            <Form.Label
                                                        style={{
                                                            color: "var(--color-txt)",
                                                            fontFamily: "var(--form-label-font-family)",
                                                            fontSize: "var(--small-header-size)"}}>Upcoming Sessions</Form.Label>
                                            <div className="d-flex justify-content-center">
                                                <Form.Control className="session-info form-control"
                                                              type="name"
                                                              placeholder="No upcoming sessions" style={{height:"48px"}} disabled
                                                />
                                                <div className="d-flex justify-content-end align-items-center" style={{position:"absolute", marginLeft:"704px", zIndex:"1", height:"48px", paddingTop:"2px", paddingRight:"24px"}}>
                                                    <img src={cautionIcon} alt="" style={{width:"24px", height:"24px"}}/>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="heading d-flex" style={{marginBottom:"24px", fontSize:"14px", width:"728px"}}>
                                        <Form.Group className="w-100" id="session" style={{}}>
                                            <Form.Label
                                                        style={{
                                                            color: "var(--color-txt)",
                                                            fontFamily: "var(--form-label-font-family)",
                                                            fontSize: "var(--small-header-size)"}}>Previous Sessions</Form.Label>
                                            <div className="d-flex justify-content-center">
                                                <Form.Control className="session-info form-control"
                                                              type="name"
                                                              placeholder="No previous sessions" style={{height:"48px"}} disabled
                                                />
                                                <div className="d-flex justify-content-end align-items-center" style={{position:"absolute", marginLeft:"704px", zIndex:"1", height:"48px", paddingTop:"2px", paddingRight:"24px"}}>
                                                    <img src={cautionIcon} alt="" style={{width:"24px", height:"24px"}}/>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center" style={{marginTop:"100px"}}>
                                        <img src={banner6} alt=""/>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </main>
            </div>
        </>
    )
}