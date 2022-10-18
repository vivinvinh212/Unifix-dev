import React from "react";
import "../theme.css";
import {Button, Card, Container, Form, FormControl, Row} from "react-bootstrap";
import "../../icon/css.gg-master/icons/all.css";
import courseImg from "../../img/course-img.png";
import banner3 from "../../img/banner3.png";
import calendarIcon from "../../img/calendar_icon.png";
import clockIcon from "../../img/clock_icon.png";
import levelIcon from "../../img/level_icon.png";

export default function CourseRegistrationDetail () {
    return (
        <>
            <div className="course-registration" style={{marginTop: "139px"}}>
                <div className="heading" style={{height:"200px"}}>
                    <div>
                        <h2 className="text-center mb-3"
                            style={{
                                fontWeight:"var(--header-weight)",
                                fontSize:"var(--header-size)",
                                color:"#00BBF9"}}>Đăng ký lớp học</h2>
                        <div className="d-flex align-items-center justify-content-center">
                            <h2 className="text-center"
                                style={{
                                    fontWeight:"var(--header-weight)",
                                    fontSize:"var(--header-size)", position:"absolute", zIndex:"100"}}>Theo nhu cầu của bạn</h2>
                            <div style={{height:"20px", width:"345px", backgroundColor:"#FFB830", transform:"rotate(-180deg)", marginTop:"15px"}}></div>
                        </div>
                    </div>
                </div>
                <Container className="d-flex align-items-center justify-content-center" style={{marginTop:"80px"}}>
                    <div style={{width:"1200px"}}>
                        <Card style=
                                  {{
                                      width: "1200px",
                                      height: "1400px",
                                      background: "linear-gradient(111.68deg, rgba(255, 255, 255, 0.162) 7.59%, rgba(255, 255, 255, 0.054) 102.04%)",
                                      border: "3px solid rgba(255, 255, 255, 0.28)",
                                      boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                                      WebkitBackdropFilter: "blur(20px)",
                                      borderRadius: "61px"}}>
                            <Card.Body>
                                <Container style={{marginTop:"40px", marginLeft:"30px"}}>
                                    <Row>
                                        <div className="col d-flex align-items-center justify-content-center">
                                            <div style={{width:"600px"}}>
                                                <div className="course-general d-flex align-items-center justify-content-center" style={{height:"214px"}}>
                                                    <ul style={{listStyle:"none", padding:"0"}}>
                                                        <li style={{fontSize:"32px", fontWeight:"600", width:"620px"}}>Members-Only Event: Behind the Scenes of Brave Wilderness Studios</li>
                                                        <li style={{fontSize:"14px"}}>Grades 1-6</li>
                                                    </ul>
                                                </div>
                                                <div className="about-this-class">
                                                    <h2 style={{fontSize:"20px", marginTop:"68px"}}>About this class</h2>
                                                    <p style={{
                                                        marginTop:"26px",
                                                        fontSize:"14px",
                                                        fontWeight:"500",
                                                        color:"#5A5A5A"}}>The Emmy Award-winning host of YouTube’s Brave Wilderness and Animal
                                                        Planet’s Brave the Wild, Coyote is an animal expert and advocate who
                                                        turned his passion for nature into a thrilling career. Known for his
                                                        close encounters with the world’s fiercest stingers and biters, Coyote
                                                        shares his fascination with the animal kingdom with learners of all ages.
                                                    </p>
                                                </div>
                                                <div className="course-syllabus">
                                                    <h2 style={{fontSize:"20px", marginTop:"34px"}}>Syllabus</h2>
                                                    <div className="d-flex flex-row" style={{fontSize:"16px", fontWeight:"500", marginTop:"26px"}}>
                                                        <div className="d-flex" style={{marginRight:"26px", width:"122px"}}>
                                                            <img src={calendarIcon} alt="" style={{height:"32px", paddingRight:"14px"}}/>
                                                            <div>
                                                                <p style={{lineHeight:"32px", margin:"0"}}>1 section</p>
                                                                <p style={{fontSize:"12px", color:"#818181"}}>1x per week</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex" style={{marginRight:"26px", width:"218px"}}>
                                                            <img src={clockIcon} alt="" style={{height:"32px", paddingRight:"14px"}}/>
                                                            <p style={{lineHeight:"32px"}}>Class length: 45 min</p>
                                                        </div>
                                                        <div className="d-flex" style={{width:"208px"}}>
                                                            <img src={levelIcon} alt="" style={{height:"32px", paddingRight:"14px"}}/>
                                                            <p style={{lineHeight:"32px"}}>Level: Fundamental</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="course-condition">
                                                    <h2 style={{fontSize:"20px", marginTop:"34px", marginBottom:"26px"}}>Điều kiện tham gia lớp học</h2>
                                                    <ul type="1" style={{listStyle:"none", padding:"0", fontSize:"14px", color:"#5A5A5A"}}>
                                                        <li className="mb-3">1. Là sinh viên</li>
                                                        <li className="mb-3">2. Là sinh viên</li>
                                                        <li>3. Là sinh viên</li>
                                                    </ul>
                                                </div>
                                                <div className="tutor-description" style={{marginTop:"34px"}}>
                                                    <h2 style={{fontSize:"20px"}}>About Misti S.</h2>
                                                    <p style={{
                                                        marginTop:"26px",
                                                        fontSize:"14px",
                                                        fontWeight:"500",
                                                        color:"#5A5A5A"}}>
                                                        I am a graduate of the University of Phoenix and USF with an education
                                                        degree and a communications degree. I am passionate about learning. I
                                                        believe the most important skill for success is to become and remain a
                                                        life- long learner. I have hands on teaching experience from Pre- K through adult learners.
                                                    </p>
                                                </div>
                                                <div className="course-participation">
                                                    <h2 style={{fontSize:"20px", marginTop:"34px"}}>How to participate</h2>
                                                    <div className="d-flex flex-row" style={{fontSize:"14px", fontWeight:"400", marginTop:"26px"}}>
                                                        <div style={{marginRight:"58px", width:"146px"}}>
                                                            <p style={{fontSize:"20px"}}>1</p>
                                                            <p style={{color:"#5A5A5A"}}>Download the Zoom app for free on your laptop or mobile device</p>
                                                        </div>
                                                        <div style={{marginRight:"58px", width:"146px"}}>
                                                            <p style={{fontSize:"20px"}}>2</p>
                                                            <p style={{color:"#5A5A5A"}}>Download the Zoom app for free on your laptop or mobile device</p>
                                                        </div>
                                                        <div style={{width:"146px"}}>
                                                            <p style={{fontSize:"20px"}}>3</p>
                                                            <p style={{color:"#5A5A5A"}}>Download the Zoom app for free on your laptop or mobile device</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <img src={courseImg} alt="" style={{width:"384px", marginBottom:"329px"}}/>
                                            <Card className="d-flex align-items-center justify-content-center" style={{
                                                    width: "450px",
                                                    height: "564px",
                                                    background: "linear-gradient(111.68deg, rgba(255, 255, 255, 0.162) 7.59%, rgba(255, 255, 255, 0.054) 102.04%)",
                                                    border: "3px solid rgba(255, 255, 255, 0.28)",
                                                    boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                                                    WebkitBackdropFilter: "blur(20px)",
                                                    borderRadius: "61px"}}>
                                                <Card.Title style={{width:"380px", fontSize:"24px", marginTop:"40px"}}>
                                                    Members-Only Event: Behind the Scenes of Brave Wilderness Studios
                                                </Card.Title>
                                                <Card.Body className="mt-3" style={{width:"384px", padding:"0"}}>
                                                    <h2 style={{fontSize:"16px", padding:"0"}}>Small group Class</h2>
                                                    <ul className="w-100" style={{fontSize:"14px", color:"#5A5A5A"}}>
                                                        <li className="mt-4 mb-2">Typically 6-9 students per class</li>
                                                        <li className="mb-2">Students get personalized help and attention</li>
                                                        <li className="mb-2">Opportunities to collaborate and engage in discussion</li>
                                                        <li className="mb-2">Unlimited access to this class and more free with <span style={{textDecoration:"underline", color:"#00BBF9"}}>Learning Membership</span></li>
                                                    </ul>
                                                    <div className="mt-4" style={{width:"384px", border: "1px solid #A7A7A7"}}></div>
                                                    <div className="d-flex course-recap" style={{marginTop:"30px"}}>
                                                        <div className="left-course-recap" style={{fontSize:"14px", color:"#333333", width:"190px", height:"90px"}}>
                                                            <p>Wed, Sep 7 - Wed, Sep 7</p>
                                                            <p>Thu @ 3:30 AM (GMT +7)</p>
                                                            <p>View detail</p>
                                                        </div>
                                                        <div className="right-course-recap" style={{width:"179px"}}>
                                                            <p style={{fontSize:"32px", float:"right", margin:"0", color:"#FF2442"}}>15$<span style={{fontSize:"14px", color:"#333"}}>/mo</span></p>
                                                            <Button type="submit"
                                                                    style={{
                                                                        borderRadius: "16px",
                                                                        borderStyle: "var(--button-borderStyle)",
                                                                        marginTop:"10px",
                                                                        width:"179px",
                                                                        height: "40px",
                                                                        fontSize: "14px",
                                                                        fontWeight: "var(--button-fontWeight)",
                                                                        backgroundColor: "var(--button-backgroundColor)",
                                                                        fontFamily: "var(--font-family)",
                                                                        boxShadow: "var(--button-boxShadow)", float:"right"}}>
                                                                Tham gia ngay
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
                <div className="d-flex align-items-center justify-content-center" style={{marginTop:"46px"}}>
                    <img src={banner3} alt=""/>
                </div>
            </div>
        </>
    )
}