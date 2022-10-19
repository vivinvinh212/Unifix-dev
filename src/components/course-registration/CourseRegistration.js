import React from "react";
import "../theme.css";
import {Button, Card, Container, Form, FormControl, Row} from "react-bootstrap";
import dropdown from "../../img/Dropdown.png";
import "../../icon/css.gg-master/icons/all.css";
import search from "../../img/search.png";
import courseRegistration1 from "../../img/course-registration-1.png";
import courseRegistration2 from "../../img/course-registration-2.png";
import courseRegistration3 from "../../img/course-registration-3.png";
import banner2 from "../../img/banner2.png";

export default function CourseRegistration () {
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
                <div className="container-fluid d-flex align-items-center justify-content-center" style={{minWidth:"1200px", width:"83.3%", marginTop:"80px"}}>
                    <Row>
                        <div className="col-auto mb-4">
                            <Card style=
                                      {{
                                          width: "384px",
                                          height: "1001px",
                                          background: "linear-gradient(111.68deg, rgba(255, 255, 255, 0.29) 7.59%, rgba(255, 255, 255, 0.39) 102.04%)",
                                          border: "3px solid rgba(255, 255, 255, 0.28)",
                                          boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                                          WebkitBackdropFilter: "blur(20px)",
                                          borderRadius: "61px"}}>
                                <img className="card-img-top" src="" alt="" />

                                <Card.Body style={{marginTop:"80px"}}>
                                    <Form>
                                        <Form.Group id="name" className="mb-4">
                                            <div className="select form-control info d-flex justify-content-center">
                                                <select id="standard-select">
                                                    <optgroup label="Môn học">
                                                        <option value="Option 1" style={{color:"red"}}>Môn học</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                        <option value="Option 4">Option 4</option>
                                                        <option value="Option 5">Option 5</option>
                                                    </optgroup>
                                                </select>
                                                <div className="d-flex justify-content-center align-items-center pr-4">
                                                    <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                </div>
                                            </div>
                                        </Form.Group>
                                        <Form.Group id="name" className="mb-4">
                                            <div className="select form-control info d-flex justify-content-center">
                                                <select name="car" id="standard-select">
                                                    <optgroup label="Cấp học">
                                                        <option value="Option 1" style={{color:"red"}}>Cấp học</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                        <option value="Option 4">Option 4</option>
                                                        <option value="Option 5">Option 5</option>
                                                    </optgroup>
                                                </select>
                                                <div className="d-flex justify-content-center align-items-center pr-4">
                                                    <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                </div>
                                            </div>
                                        </Form.Group>
                                        <Form.Group id="name" className="mb-4">
                                            <div className="select form-control info d-flex justify-content-center">
                                                <select id="standard-select">
                                                    <optgroup label="Thời lượng lớp học">
                                                        <option value="Option 1" style={{color:"red"}}>Thời lượng lớp học</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                        <option value="Option 4">Option 4</option>
                                                        <option value="Option 5">Option 5</option>
                                                    </optgroup>
                                                </select>
                                                <div className="d-flex justify-content-center align-items-center pr-4">
                                                    <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                </div>
                                            </div>
                                        </Form.Group>
                                        <Form.Group id="name" className="mb-4">
                                            <div className="select form-control info d-flex justify-content-center">
                                                <select id="standard-select">
                                                    <optgroup label="Thời gian bắt đầu">
                                                        <option value="Option 1">Thời gian bắt đầu</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                        <option value="Option 4">Option 4</option>
                                                        <option value="Option 5">Option 5</option>
                                                    </optgroup>
                                                </select>
                                                <div className="d-flex justify-content-center align-items-center pr-4">
                                                    <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                </div>
                                            </div>
                                        </Form.Group>
                                        <Form.Group id="name" className="mb-4">
                                            <div className="select form-control info d-flex justify-content-center">
                                                <select id="standard-select">
                                                    <optgroup label="Lịch học">
                                                        <option value="Option 1">Lịch học</option>
                                                        <option value="Option 2">Option 2</option>
                                                    </optgroup>
                                                </select>
                                                <div className="d-flex justify-content-center align-items-center pr-4">
                                                    <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                </div>
                                            </div>
                                        </Form.Group>
                                        <Form.Group id="name">
                                            <div className="select form-control info d-flex justify-content-center">
                                                <select id="standard-select">
                                                    <optgroup label="Số lượng học viên">
                                                        <option value="Option 1">Số lượng học viên</option>
                                                        <option value="Option 2">Option 2</option>
                                                    </optgroup>
                                                </select>
                                                <div className="d-flex justify-content-center align-items-center pr-4">
                                                    <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-xl-6 mb-4">
                            <Card style=
                                      {{
                                          width: "792px",
                                          height: "1001px",
                                          background: "linear-gradient(111.68deg, rgba(255, 255, 255, 0.29) 7.59%, rgba(255, 255, 255, 0.39) 102.04%)",
                                          border: "3px solid rgba(255, 255, 255, 0.28)",
                                          boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                                          WebkitBackdropFilter: "blur(20px)",
                                          borderRadius: "61px"}}>

                                <Card.Body>
                                    <div className="heading d-flex" style={{marginBottom:"24px", fontSize:"14px", width:"728px"}}>
                                            <Form.Group className="w-100 d-flex justify-content-center" id="name" style={{}}>
                                                <Form.Control className="info"
                                                              type="name"
                                                              placeholder="Tìm kiếm tất cả lớp học..." style={{height:"48px"}}
                                                />
                                                <div className="d-flex justify-content-end align-items-center" style={{position:"absolute", marginLeft:"704px", zIndex:"1", height:"48px", paddingTop:"2px", paddingRight:"24px"}}>
                                                    <img src={search} alt="" style={{width:"24px", height:"24px"}}/>
                                                </div>
                                            </Form.Group>
                                    </div>
                                    <div className="tutor-info">
                                        <Card style={{
                                            width: "728px",
                                            height: "237px",
                                            background: "rgba(0, 187, 249, 0.1)",
                                            boxShadow: "0px 2px 4px rgba(0, 187, 249, 0.25)",
                                            borderRadius: "32px", borderStyle:"none", marginBottom:"24px"}}>
                                            <Card.Body className="d-flex flex-row align-items-center justify-content-center">
                                                <a href="/course-detail"><img style={{width:"244px", height:"189px", marginRight:"40px"}} src={courseRegistration1} alt=""/></a>
                                                <ul style={{
                                                    listStyle:"none",
                                                    width:"407px", height:"189px",
                                                    fontSize:"14px",
                                                    fontWeight:"500",
                                                    padding:"0",
                                                    color:"#5A5A5A",
                                                    marginBottom:"0px", marginTop:"10px"}}>
                                                    <li style={{fontSize:"16px", fontWeight:"700", marginBottom:"8px", color:"#333333"}}>Lập trình C++</li>
                                                    <li style={{fontSize:"16px", color:"#FF2442", marginBottom:"8px"}}>0$</li>
                                                    <li style={{fontSize:"14px", color:"#818181", marginBottom:"17px"}}>C++ là ngôn ngữ lập trình được phát triển trên nên tảng của ngôn ngữ lập trình C</li>
                                                    <li style={{marginBottom:"8px"}}><p>Ngày bắt đầu: <strong>Th5 29 thg 9</strong></p></li>
                                                    <li className="d-flex" style={{fontWeight:"600", color:"#00BBF9"}}>
                                                        <p className="left mr-auto" style={{fontSize:"14px"}}>1 tuần, 1 buổi/tuần, 45phút</p>
                                                        <p className="right">Số lượng: 2-6 người</p>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                        <Card style={{
                                            width: "728px",
                                            height: "237px",
                                            background: "rgba(0, 187, 249, 0.1)",
                                            boxShadow: "0px 2px 4px rgba(0, 187, 249, 0.25)",
                                            borderRadius: "32px", borderStyle:"none", marginBottom:"24px"}}>
                                            <Card.Body className="d-flex flex-row align-items-center justify-content-center">
                                                <a href="/course-detail"><img style={{width:"244px", height:"189px", marginRight:"40px"}} src={courseRegistration2} alt=""/></a>
                                                <ul style={{
                                                    listStyle:"none",
                                                    width:"407px", height:"189px",
                                                    fontSize:"14px",
                                                    fontWeight:"500",
                                                    padding:"0",
                                                    color:"#5A5A5A",
                                                    marginBottom:"0px", marginTop:"10px"}}>
                                                    <li style={{fontSize:"16px", fontWeight:"700", marginBottom:"8px", color:"#333333"}}>Lập trình OOP</li>
                                                    <li style={{fontSize:"16px", color:"#FF2442", marginBottom:"8px"}}>15$</li>
                                                    <li style={{fontSize:"14px", color:"#818181", marginBottom:"17px"}}>C++ là ngôn ngữ lập trình được phát triển trên nên tảng của ngôn ngữ lập trình C</li>
                                                    <li style={{marginBottom:"8px"}}><p>Ngày bắt đầu: <strong>Th5 29 thg 9</strong></p></li>
                                                    <li className="d-flex" style={{fontWeight:"600", color:"#00BBF9"}}>
                                                        <p className="left mr-auto" style={{fontSize:"14px"}}>1 tuần, 1 buổi/tuần, 45phút</p>
                                                        <p className="right">Số lượng: 2-6 người</p>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                        <Card style={{
                                            width: "728px",
                                            height: "237px",
                                            background: "rgba(0, 187, 249, 0.1)",
                                            boxShadow: "0px 2px 4px rgba(0, 187, 249, 0.25)",
                                            borderRadius: "32px", borderStyle:"none"}}>
                                            <Card.Body className="d-flex flex-row align-items-center justify-content-center">
                                                <a href="/course-detail"><img style={{width:"244px", height:"189px", marginRight:"40px"}} src={courseRegistration3} alt=""/></a>
                                                <ul style={{
                                                    listStyle:"none",
                                                    width:"407px", height:"189px",
                                                    fontSize:"14px",
                                                    fontWeight:"500",
                                                    padding:"0",
                                                    color:"#5A5A5A",
                                                    marginBottom:"0px", marginTop:"10px"}}>
                                                    <li style={{fontSize:"16px", fontWeight:"700", marginBottom:"8px", color:"#333333"}}>Tiếng Anh giao tiếp</li>
                                                    <li style={{fontSize:"16px", color:"#FF2442", marginBottom:"8px"}}>25$</li>
                                                    <li style={{fontSize:"14px", color:"#818181", marginBottom:"17px"}}>C++ là ngôn ngữ lập trình được phát triển trên nên tảng của ngôn ngữ lập trình C</li>
                                                    <li style={{marginBottom:"8px"}}><p>Ngày bắt đầu: <strong>Th5 29 thg 9</strong></p></li>
                                                    <li className="d-flex" style={{fontWeight:"600", color:"#00BBF9"}}>
                                                        <p className="left mr-auto" style={{fontSize:"14px"}}>1 tuần, 1 buổi/tuần, 45phút</p>
                                                        <p className="right">Số lượng: 2-6 người</p>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="w-100 d-flex align-items-center justify-content-center">
                                        <Button type="submit"
                                                style={{
                                                    borderRadius: "16px",
                                                    borderStyle: "var(--button-borderStyle)",
                                                    marginTop:"46px",
                                                    width:"146px",
                                                    height: "40px",
                                                    fontSize: "14px",
                                                    fontWeight: "var(--button-fontWeight)",
                                                    backgroundColor: "var(--button-backgroundColor)",
                                                    fontFamily: "var(--font-family)",
                                                    boxShadow: "var(--button-boxShadow)"}}>
                                            Xem thêm
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{marginTop:"46px"}}>
                    <img src={banner2} alt=""/>
                </div>
            </div>
        </>
    )
}