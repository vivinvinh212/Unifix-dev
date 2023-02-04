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
import pic1 from "../../img/number1.png";
import pic2 from "../../img/number2.png";
import pic3 from "../../img/number3.png";
import line from "../../img/Line 1.png";

import Webinarbro from "../../img/Webinar-bro 1.png";

export default function MakeClass() {
    const { quill, quillRef } = useQuill();
    const [value,setValue]=useState();
   
    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
            console.log(quillRef.current.firstChild.innerHTML);
            setValue(quillRef.current.firstChild.innerHTML)
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
                                          height: "1820px",
                                          background: "rgba(189, 244, 249, 0.2)",
                                          border: "3px solid rgba(255, 255, 255, 0.28)",
                                          boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                                          backdropFilter: "blur(11px)",
                                          borderRadius: "61px"}}>
                                <div style ={{
                                    marginLeft:"33px",
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
                                          height: "1820px",
                                          background: "rgba(189, 244, 249, 0.2)",
                                          border: "3px solid rgba(255, 255, 255, 0.28)",
                                          boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                                          backdropFilter: "blur(11px)",
                                          borderRadius: "61px"}}>

                                    <Card.Body>
                                    <Form.Group id="name2">
                                        <Form.Label className="d-flex"
                                            style={{
                                                color: "var(--color-txt)",
                                                fontFamily: "var(--font-family)",
                                                fontSize: "var(--small-header-size)",
                                                paddingTop:"60px"}}>
                                            <p className="left mr-auto mb-0">Tiêu đề</p>
                                        </Form.Label>
                                    <Form.Control className="info2"
                                                  type="name2"
                                                  placeholder="Nhập môn học..."
                                                />
                                    </Form.Group>
                                    <div className="heading d-flex" style={{marginTop:"20px", marginLeft:"5px", fontSize:"14px"}}>
                                        <p className="left mr-auto d-flex align-items-center justify-content-center">Miêu tả môn học</p>
                                    </div>
                                        <div className="tutor-info">
                                            <Card style={{
                                                width: "728px",
                                                height: "260px",
                                                background: "rgba(255, 255, 255, 0.5)",
                                                boxShadow: "0px 2px 4px rgba(0, 187, 249, 0.25)",
                                                borderRadius: "32px", borderStyle:"none", marginBottom:"32px"}}>
                                                    <div className ="name text-editor"
                                                    ref ={quillRef} />
                                            </Card>
                                        <Form.Group id="name2">
                                            <Form.Label className="d-flex"
                                                style={{
                                                    color: "var(--color-txt)",
                                                    fontFamily: "var(--font-family)",
                                                    fontSize: "var(--small-header-size)",
                                                    paddingTop:"5px"
                                                    }}>
                                                <div className="left mr-auto mb-0">Lợi ích khi tham gia khóa học</div>                                 
                                            </Form.Label>
                                            <div className="left mr-auto mb-0" style ={{
                                                    fontSize:"12px",
                                                    color: "#A7A7A7",
                                                    paddingBottom:"10px",
                                                    paddingBottom:"10px",
                                                    }}>
                                                    Học sinh sẽ học được những gì khi tham gia lớp ?</div>
                                        <Form.Control className="info2"
                                            type="name2"
                                            placeholder="Ví dụ: Ứng dụng PowerPoint để thiết kế Slides chuyên nghiệp..."
                                        />
                                        <a className="d-flex askques" style={{
                                            marginRight:"10px",
                                            fontSize:"12px",
                                            paddingTop:"15px",
                                            }}>Thêm câu trả lời ?</a>
                                        </Form.Group>
                                        <Form.Group id="name">
                                            <Form.Label className=""
                                                        style={{
                                                            color: "var(--color-txt)",
                                                            fontFamily: "var(--font-family)",
                                                            fontSize: "var(--small-header-size)",
                                                            paddingTop:"5px"
                                                            }}>Thông tin cơ bản
                                            </Form.Label>
                                            <div className="d-flex">                   
                                                <div className="select form-control info d-flex column justify-content-center" 
                                                    style ={{
                                                    height: "50px",
                                                    }}>
                                                    <select id="standard-select">
                                                        <option value="Option 1">Chọn thể loại</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                        <option value="Option 4">Option 4</option>
                                                        <option value="Option 5">Option 5</option>
                                                    </select>
                                                    <a className="d-flex justify-content-center align-items-center pr-4">
                                                        <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                    </a>
                                                </div>
                                                <div className="d-flex" style={{marginRight:"40px"}}></div>
                                                <div className="select form-control info d-flex column justify-content-center" 
                                                        style ={{
                                                        height: "50px",
                                                    }}>
                                                    <select id="standard-select">
                                                        <option value="Option 1">Chọn đối tượng</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                        <option value="Option 4">Option 4</option>
                                                        <option value="Option 5">Option 5</option>
                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center pr-4">
                                                        <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                    </div>
                                                </div>
                                                <div className="d-flex" style={{marginRight:"40px"}}></div>
                                                <div className="select form-control info d-flex column justify-content-center" 
                                                        style ={{
                                                        height: "50px",
                                                    }}>
                                                    <select id="standard-select">
                                                        <option value="Option 1">Chọn độ khó</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                        <option value="Option 4">Option 4</option>
                                                        <option value="Option 5">Option 5</option>
                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center pr-4">
                                                        <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                    </div>
                                                </div>
                                            </div> 
                                        </Form.Group>
                                        <Form.Group id="name2">
                                            <Form.Label className="d-flex"
                                                style={{
                                                    color: "var(--color-txt)",
                                                    fontFamily: "var(--font-family)",
                                                    fontSize: "var(--small-header-size)",
                                                    paddingTop:"10px"
                                                    }}>
                                                <p className="left mr-auto mb-0">Yêu cầu tham gia lớp học (Có thể bỏ qua)</p>
                                            </Form.Label>
                                        <Form.Control className="info2"
                                            type="name2"
                                            placeholder="Ví dụ: Thành thạo Python cơ bản..."
                                        />
                                        <a className="d-flex askques" style={{
                                            marginRight:"10px",
                                            fontSize:"12px",
                                            paddingTop:"15px",
                                            }}>Thêm câu trả lời ?</a>
                                        </Form.Group>   
                                        <Form.Group id="name2">
                                            <Form.Label className="d-flex"
                                                style={{
                                                    color: "var(--color-txt)",
                                                    fontFamily: "var(--font-family)",
                                                    fontSize: "var(--small-header-size)",
                                                    paddingTop:"5px"
                                                    }}>
                                                <p className="left mr-auto mb-0">Giá thành</p>
                                            </Form.Label>
                                        <Form.Control className="info2"
                                            type="name2"
                                            placeholder="nhập giá thành..."
                                        />
                                        </Form.Group>
                                        <Form.Group id="name2">
                                            <Form.Label className="d-flex"
                                                style={{
                                                    color: "var(--color-txt)",
                                                    fontFamily: "var(--font-family)",
                                                    fontSize: "var(--small-header-size)",
                                                    paddingTop:"10px"
                                                    }}>
                                                <p className="left mr-auto mb-0">Ngày dự kiến bắt đầu</p>
                                            </Form.Label>
                                        <Form.Control className="info2"
                                            type="name2"
                                            placeholder="dd/mm/yy"
                                        />
                                        </Form.Group>
                                        <Form.Group id="name2">
                                            <Form.Label className="d-flex"
                                                style={{
                                                    color: "var(--color-txt)",
                                                    fontFamily: "var(--font-family)",
                                                    fontSize: "var(--small-header-size)",
                                                    paddingTop:"10px"
                                                    }}>
                                                <p className="left mr-auto mb-0">Thời lượng 1 buổi học</p>
                                            </Form.Label>
                                        <Form.Control className="info2"
                                              type="name2"
                                              placeholder="1 tiếng..."
                                        />
                                        </Form.Group>
                                        <Form.Group id="name">
                                            <Form.Label className=""
                                                        style={{
                                                            color: "var(--color-txt)",
                                                            fontFamily: "var(--font-family)",
                                                            fontSize: "var(--small-header-size)",
                                                            paddingTop:"10px"
                                                            }}>Lịch học
                                            </Form.Label>
                                            <div className="d-flex">                   
                                                <div className="select form-control info d-flex column justify-content-center" 
                                                    style ={{
                                                    height: "50px",
                                                    }}>
                                                    <select id="standard-select">
                                                        <option value="Option 1">Chọn thứ</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                        <option value="Option 4">Option 4</option>
                                                        <option value="Option 5">Option 5</option>
                                                    </select>
                                                    <a className="d-flex justify-content-center align-items-center pr-4">
                                                        <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                    </a>
                                                </div>
                                                <div className="d-flex" style={{marginRight:"30px"}}></div>
                                                <div className="select form-control info d-flex column justify-content-center" 
                                                        style ={{
                                                        height: "50px",
                                                    }}>
                                                    <select id="standard-select">
                                                        <option value="Option 1">Chọn giờ học</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                        <option value="Option 4">Option 4</option>
                                                        <option value="Option 5">Option 5</option>
                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center pr-4">
                                                        <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                    </div>
                                                </div>
                                                <div className="d-flex" style={{marginRight:"300px"}}></div>
                                            </div> 
                                        </Form.Group>
                                        <a className="d-flex askques" style={{
                                            marginRight:"10px",
                                            fontSize:"12px",
                                            }}>Thêm câu trả lời ?
                                        </a>


                                            <div className="d-flex flex-row">
                                                <img style={{width:"250px", height:"380px", marginRight:"20px", paddingTop:"50px",paddingBottom:"80px"}} src={codepic} alt=""/>
                                                <ul style={{
                                                    width:"279px",
                                                    fontSize:"12px",
                                                    fontWeight:"500",
                                                    padding:"0",
                                                    marginRight:"40px", color:"#5A5A5A"}}>
                                                   
                                                    <li style={{fontSize:"14px", fontWeight:"700", marginBottom:"8px",marginLeft:"20px", color:"#333333", listStyle:"none", marginTop:"55px"}}>Yêu cầu:</li>
                                                    <li style={{marginBottom:"8px",marginLeft:"40px"}}>Kích cỡ: 750x442px</li>
                                                    <li style={{marginBottom:"8px",marginLeft:"40px"}}>Định dạng: .jpg,.png,.jpeg </li>
                                                    <li style={{marginBottom:"8px",marginLeft:"40px"}}>Ảnh có nội dung đơn giản dễ nhìn</li>
                                                    <li style={{marginBottom:"34px",marginLeft:"40px"}}>Không có chữ trên ảnh</li>
                                                    <Button className=""
                                                        type="name3 justify-content-center align-items-center"
                                                        style={{
                                                            width: "460px",
                                                            height:"75px",
                                                            color: "#00BBF9",
                                                            border: "3px solid rgba(255, 255, 255, 0.28)",
                                                            boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                                                            borderRadius: "61px",
                                                            marginLeft: "10px",
                                                            backgroundColor:"rgba(189, 244, 249, 0.2)",
                                                            }}
                                                    >Tải ảnh lên</Button>   
                                                </ul>
                                            </div>           
                                            <Button href="/make-class2" className="w-100" type="submit"
                                                                style={{
                                                                    borderRadius: "40px",
                                                                    borderStyle: "var(--button-borderStyle)",
                                                                    margin: "var(--button-margin)",
                                                                    height: "60px",
                                                                    fontSize: "16px",
                                                                    fontWeight: "var(--button-fontWeight)",
                                                                    backgroundColor: "var(--button-backgroundColor)",
                                                                    fontFamily: "var(--font-family)",
                                                                    boxShadow: "var(--button-boxShadow)"}}>
                                                            Tiếp tục
                                            </Button>
                                        </div>
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