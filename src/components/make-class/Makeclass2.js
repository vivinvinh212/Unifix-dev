import React from "react";
import "../theme.css";
import {Button, Card, Container, Form, FormControl, Row} from "react-bootstrap";
import dropdown from "../../img/Dropdown.png";
import "../../icon/css.gg-master/icons/all.css";
import ProfileAvatar2 from "../../img/Profile-avatar-2.png";
import banner1 from "../../img/banner1.png";
import codepic from "../../img/codepic.png";
import { useQuill } from 'react-quilljs';
import { useState } from "react";
import 'quill/dist/quill.snow.css';
import pic1 from "../../img/number4.png";
import pic2 from "../../img/number5.png";
import pic3 from "../../img/number3.png";
import line from "../../img/Line 1.png";
import Webinarbro from "../../img/Webinar-bro 1.png";

export default function MakeClass2(){
    const { quill, quillRef } = useQuill();
    const [value,setValue]=useState();
    const [text, setText] = useState("Cô Thắng tốt nghiệp thạc sĩ Tiếng Anh sư phạm tại trường ĐH Ngoại Ngữ, ĐH Quốc Gia Hà Nội. Hiện cô đang tiếp tục làm Nghiên cứu sinh tại trường. Cô là giảng viên Đại học nhiều năm, có nhiều kinh nghiệm giảng dạy và luyện thi IELTS, luyện Ngữ pháp tiếng Anh.");
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
        if (isOpen != false){
            setText(value);
        }
    }
    
    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
            setValue(quillRef.current.firstChild.innerText)
            });
        }
    }, [quill]);
    console.log(value,"this is quill editor")

    return (
        <>
        <div className="study1-1" style={{marginTop: "139px", marginLeft: "109px"}}>
                <div className="heading" style={{height:"200px"}}>
                    <div>
                        <h2 className="text-center mb-3"
                            style={{
                                fontWeight:"var(--header-weight)",
                                fontSize:"var(--header-size)",
                                color:"#00BBF9"}}>Tạo lớp học</h2>
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
                                          height: "900px",
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
                                    marginLeft:"33px",
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
                                    marginLeft:"35px",
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
                                          height: "900px",
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
                                                marginLeft:"320px"}}>
                                            <p className="mr-auto justify-content-center mb-0">Về giảng viên</p></div>
                                        <div style={{
                                                color: "var(--color-txt)",
                                                fontFamily: "var(--font-family)",
                                                fontSize: "var(--small-header-size)",
                                                paddingTop:"30px"}}>{text}</div>
                                        <a onClick={togglePopup} className="d-flex askques" style={{
                                            marginRight:"10px", 
                                            fontSize:"12px",
                                            paddingTop:"15px",
                                            }}>Chỉnh sửa</a>
                                    </Form.Group>
                                    {isOpen && <Form.Group>
                                        <Form.Label className="d-flex"
                                            style={{
                                                color: "var(--color-txt)",
                                                fontFamily: "var(--font-family)",
                                                fontSize: "var(--small-header-size)",
                                                paddingTop:"30px"}}>
                                            <p className="mr-auto justify-content-center mb-0">Về giảng viên</p>
                                        </Form.Label>
                                            <Card style={{
                                                width: "728px",
                                                height: "260px",
                                                background: "rgba(255, 255, 255, 0.5)",
                                                boxShadow: "0px 2px 4px rgba(0, 187, 249, 0.25)",
                                                borderRadius: "32px", borderStyle:"none", marginBottom:"32px"}}>
                                                    <div className ="name text-editor"
                                                    ref ={quillRef} />
                                            </Card>
                                            <div style={{marginLeft : "650px"}}>
                                            <Button onClick={togglePopup} className="w-100" type="submit"
                                                                style={{
                                                                    borderRadius: "40px",
                                                                    borderStyle: "var(--button-borderStyle)",
                                                                    margin: "var(--button-margin)",
                                                                    height: "60px",
                                                                    fontSize: "16px",
                                                                    fontWeight: "var(--button-fontWeight)",
                                                                    backgroundColor: "var(--button-backgroundColor)",
                                                                    fontFamily: "var(--font-family)",
                                                                    boxShadow: "var(--button-boxShadow)"}}
                                        
                                                                >
                                                            Lưu
                                            </Button>
                                            </div>
                                            </Form.Group>}
                                            
                                        <Form.Group id="name2">
                                            <Form.Label className="d-flex"
                                                style={{
                                                    color: "var(--color-txt)",
                                                    fontFamily: "var(--font-family)",
                                                    fontSize: "var(--small-header-size)",
                                                    paddingTop:"10px"
                                                    }}>
                                                <p className="left mr-auto mb-0">Một vài thành tích nổi bật (Có thể bỏ qua)</p>
                                            </Form.Label>
                                        <Form.Control className="info2"
                                            type="name2"
                                            placeholder="Ví dụ: Giải nhất cuộc thi Tiếng Anh toàn quốc"
                                        />
                                        <a className="d-flex askques" style={{
                                            marginRight:"10px", 
                                            fontSize:"12px",
                                            paddingTop:"15px",
                                            }}>Thêm câu trả lời ?</a>
                                        </Form.Group> 
                                    </Card.Body>
                                    <div className="d-flex flex-row">
                                    <Button className="w-100" type="submit"
                                                                style={{
                                                                    borderRadius: "40px",
                                                                    borderStyle: "var(--button-borderStyle)",
                                                                    margin: "var(--button-margin)",
                                                                    height: "60px",
                                                                    fontSize: "20px",
                                                                    fontWeight: "var(--button-fontWeight)",
                                                                    backgroundColor: "var(--button-backgroundColor)",
                                                                    fontFamily: "var(--font-family)",
                                                                    boxShadow: "var(--button-boxShadow)"}}
                                                                href="make-class3">
                                                            Tiếp tục
                                            </Button>
                                    </div>
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