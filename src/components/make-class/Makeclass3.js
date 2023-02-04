import React, { useState } from "react";
import "../theme.css";
import {Button, Card, Container, Form, FormControl, Row} from "react-bootstrap";
import dropdown from "../../img/Dropdown.png";
import "../../icon/css.gg-master/icons/all.css";
import ProfileAvatar2 from "../../img/Profile-avatar-2.png";
import banner1 from "../../img/banner1.png";
import codepic from "../../img/codepic.png";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import pic1 from "../../img/number1.png";
import pic2 from "../../img/number2.png";
import pic3 from "../../img/number6.png";
import line from "../../img/Line 1.png";
import upload from "../../img/uploadcloud.png";
import file from "../../img/file.png";
import Webinarbro from "../../img/Webinar-bro 1.png";

export default function MakeClass3() {
    
    return (
        <> 
            <div className="study1-1" style={{marginTop: "139px"}}>
                <div className="heading" style={{height:"200px"}}>
                    <div>
                        <h2 className="text-center mb-3"
                            style={{
                                fontWeight:"var(--header-weight)",
                                fontSize:"var(--header-size)",
                                color:"#00BBF9"}}>Tạo lớp học</h2>
                                <div className="App">
                </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <h2 className="text-center" 
                                style={{
                                    fontWeight:"var(--header-weight)",
                                    fontSize:"var(--header-size)", position:"absolute", zIndex:"100"}}>Qua một vài thao tác</h2>
                            <div style={{height:"20px", width:"345px", backgroundColor:"#FFB830", transform:"rotate(-180deg)", marginTop:"15px"}}></div>
                        </div>
                    </div>
                </div>
                <Container style={{maxWidth:"1800px", marginTop:"83px"}}>
                    <Row>
                        <div className="col-auto mb-4">
                            <Card style=
                                      {{
                                          width: "384px",
                                          height: "850px",
                                          background: "rgba(189, 244, 249, 0.2)",
                                          border: "3px solid rgba(255, 255, 255, 0.28)",
                                          boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                                          backdropFilter: "blur(11px)",
                                          borderRadius: "61px"}}>
                                <div style ={{
                                    marginLeft:"35px",
                                    paddingTop:"80px",
                                }}>
                                    <img src={pic1} alt=""/>
                                </div>
                                <div style ={{
                                    marginLeft:"73px",
                                    paddingTop:"7px",
                                }}>
                                    <img src={line} alt=""/>
                                </div>
                                <div style ={{
                                    marginLeft:"35px",
                                    paddingTop:"10px",
                                }}>
                                    <img src={pic2} alt=""/>
                                </div>
                                <div style ={{
                                    marginLeft:"73px",
                                    paddingTop:"10px",
                                }}>
                                    <img src={line} alt=""/>
                                </div>
                                <div style ={{
                                    marginLeft:"33px",
                                    paddingTop:"10px",
                                }}>
                                    <img src={pic3} alt=""/>
                                </div>                                     
                            </Card>
                        </div>


                        <div className="col-xl-6 mb-4">
                            <Card style=
                                      {{
                                          width: "792px",
                                          height: "850px",
                                          background: "rgba(189, 244, 249, 0.2)",
                                          border: "3px solid rgba(255, 255, 255, 0.28)",
                                          boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                                          backdropFilter: "blur(11px)",
                                          borderRadius: "61px"}}>
                                <Card.Body>
                                    <Form.Group id="name2">
                                        <div style={{
                                                color: "var(--color-txt)",
                                                fontFamily: "var(--font-family)",
                                                fontSize: "var(--small-header-size)",
                                                paddingTop:"60px",
                                                marginLeft:"90px",
                                                fontSize:"18px",}}>
                                            <p className="mr-auto justify-content-center mb-0">Hãy tải lên file hoặc đính kèm link miêu tả giáo trình của lớp học</p></div>
                                    </Form.Group>
                                    <Button className="upload" type="submit"
                                                                style={{
                                                                marginTop:"30px",
                                                                height:"60px",
                                                                color: "#00BBF9",
                                                                border: "3px dotted #00BBF9",
                                                                boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                                                                borderRadius: "61px",
                                                                width:"650px",
                                                                marginLeft: "50px",
                                                                backgroundColor:"rgba(189, 244, 249, 0.2)",}}>
                                                            <img src={upload}/>
                                                            Tải tệp lên
                                    </Button>
                                    <Form.Group id="name4">
                                            <Form.Label className="d-flex"
                                                style={{
                                                    color: "var(--color-txt)",
                                                    fontFamily: "var(--font-family)",
                                                    fontSize: "var(--small-header-size)",
                                                    paddingTop:"10px"
                                                    }}>
                                            </Form.Label>
                                        <Form.Control className="info4"
                                              type="name4"
                                              placeholder="Gắn link của bạn tại đây"
                                        />
                                        </Form.Group>
                                        <p style = {{marginLeft:"90px", marginTop:"50px"}}> Tệp đã tải lên </p>
                                        <img src = {file} style={{width:"95%",marginLeft:"30px"}}/>
                                        <p style = {{marginLeft:"50px", marginTop:"20px"}}> Chú ý: Giáo trình giúp học viên xác định được nội dung học để có thể</p>
                                        <p style = {{marginLeft:"50px", marginTop:"1px"}}>chuẩn bị tốt nhất cho buổi học. Giáo trình không cần quá chi tiết, cụ thể</p>
                                        <p style = {{marginLeft:"50px", marginTop:"1px"}}>nhưng cần phải rõ ràng.</p>
                                        <a style = {{marginLeft:"50px", marginTop:"20px",color:"#00BBF9"}} href="minhcute"> Ví dụ về giáo trình được chấp nhận</a>
                                        <Button className="w-50" type="submit" href="/course-registration"
                                                                style={{
                                                                    borderRadius: "40px",
                                                                    borderStyle: "var(--button-borderStyle)",
                                                                    margin: "var(--button-margin)",
                                                                    height: "60px",
                                                                    fontSize: "16px",
                                                                    marginLeft:"190px",
                                                                    marginTop:"30px",
                                                                    fontWeight: "var(--button-fontWeight)",
                                                                    backgroundColor: "var(--button-backgroundColor)",
                                                                    fontFamily: "var(--font-family)",
                                                                    boxShadow: "var(--button-boxShadow)"}}>
                                                            Hoàn tất
                                            </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </Container>
                <div className="d-flex align-items-center justify-content-center">
                    <img src={Webinarbro} alt=""/>
                </div>
            </div>
        </>
    )
}