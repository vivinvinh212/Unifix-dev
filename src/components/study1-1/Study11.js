import React from "react";
import "../theme.css";
import {Button, Card, Container, Form, FormControl, Row} from "react-bootstrap";
import dropdown from "../../img/Dropdown.png";
import "../../icon/css.gg-master/icons/all.css";
import ProfileAvatar from "../../img/Profile-avatar.png";
import ProfileAvatar1 from "../../img/Profile-avatar-1.png";
import ProfileAvatar2 from "../../img/Profile-avatar-2.png";
import star from "../../img/star.png";
import banner1 from "../../img/banner1.png";
import banner from "../../img/banner.png";
import {Box, Slider, styled} from "@mui/material";

export default function Study11() {

    const PrettoSlider = styled(Slider)({
        color: '#00BBF9',
        height: 8,
        '& .MuiSlider-track': {
            border: 'none',
        },
        '& .MuiSlider-thumb': {
            height: 24,
            width: 24,
            backgroundColor: '#FF2442',
            border: '2px solid currentColor',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
            },
            '&:before': {
                display: 'none',
            },
        },
    })

    return (
        <>
            <div className="study1-1" style={{marginTop: "139px"}}>
                <div className="heading" style={{height:"200px"}}>
                    <div>
                        <h2 className="text-center mb-3"
                            style={{
                                fontWeight:"var(--header-weight)",
                                fontSize:"var(--header-size)",
                                color:"#00BBF9"}}>Đặt lịch với gia sư</h2>
                        <div className="d-flex align-items-center justify-content-center">
                            <h2 className="text-center"
                                style={{
                                    fontWeight:"var(--header-weight)",
                                    fontSize:"var(--header-size)", position:"absolute", zIndex:"100"}}>Qua một vài thao tác</h2>
                            <div style={{height:"20px", width:"345px", backgroundColor:"#FFB830", transform:"rotate(-180deg)", marginTop:"15px"}}></div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{marginTop:"83px"}}><img src={banner} alt=""/></div>
                <Container style={{maxWidth:"1200px", marginTop:"83px"}}>
                    <Row>
                        <div className="col-auto mb-4">
                            <Card style=
                                      {{
                                          width: "384px",
                                          height: "1001px",
                                          background: "rgba(189, 244, 249, 0.2)",
                                          border: "3px solid rgba(255, 255, 255, 0.28)",
                                          boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                                          backdropFilter: "blur(11px)",
                                          borderRadius: "61px"}}>

                                    <Card.Body style={{marginTop:"80px"}}>
                                        <Form>
                                            <Form.Group id="name">
                                                <Form.Label className=""
                                                            style={{
                                                                color: "var(--color-txt)",
                                                                fontFamily: "var(--font-family)",
                                                                fontSize: "var(--small-header-size)"}}>Chọn gia sư</Form.Label>
                                                <div className="select form-control info d-flex justify-content-center">
                                                    <select id="standard-select">
                                                        <option value="Option 1" style={{color:"red"}}>Chuyên gia</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                        <option value="Option 4">Option 4</option>
                                                        <option value="Option 5">Option 5</option>
                                                        <option value="Option length">
                                                            Option that has too long of a value to fit
                                                        </option>
                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center pr-4">
                                                        <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                            <Form.Group id="name">
                                                <Form.Label className="d-flex"
                                                    style={{
                                                        color: "var(--color-txt)",
                                                        fontFamily: "var(--font-family)",
                                                        fontSize: "var(--small-header-size)"}}>
                                                    <p className="left mr-auto mb-0">Môn học</p>
                                                    <p className="right mb-0" style={{color:"#FF2442"}}>Xem tất cả các môn học</p>
                                                </Form.Label>
                                                <Form.Control className="info"
                                                              type="name"
                                                              placeholder="Nhập môn học..."
                                                />
                                            </Form.Group>
                                            <Form.Group id="name">
                                                <Form.Label className=""
                                                            style={{
                                                                color: "var(--color-txt)",
                                                                fontFamily: "var(--font-family)",
                                                                fontSize: "var(--small-header-size)"}}>Trình độ</Form.Label>
                                                <div className="select form-control info d-flex justify-content-center">
                                                    <select id="standard-select">
                                                        <option value="Option 1">Nhập môn</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                        <option value="Option 4">Option 4</option>
                                                        <option value="Option 5">Option 5</option>
                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center pr-4">
                                                        <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                            <Form.Group id="name">
                                                <Form.Label
                                                            style={{
                                                                color: "var(--color-txt)",
                                                                fontFamily: "var(--font-family)",
                                                                fontSize: "var(--small-header-size)"}}>Giá tiền</Form.Label>
                                                <PrettoSlider
                                                    size="big"
                                                    defaultValue={1000000}
                                                    min={0}
                                                    max={1000000}
                                                    step={50000}
                                                    aria-label="Small"
                                                    valueLabelDisplay="auto"
                                                />
                                                <div className="d-flex" style={{fontSize:"14px", fontWeight:"500"}}>
                                                    <p className="left mr-auto">Miễn phí</p>
                                                    <p className="right">1.000.000 VNĐ</p>
                                                </div>
                                            </Form.Group>
                                            <Form.Group id="name">
                                                <Form.Label className=""
                                                            style={{
                                                                color: "var(--color-txt)",
                                                                fontFamily: "var(--font-family)",
                                                                fontSize: "var(--small-header-size)"}}>Hình thức dạy</Form.Label>
                                                <div className="select form-control info d-flex justify-content-center">
                                                    <select id="standard-select">
                                                        <option value="Option 1">Online</option>
                                                        <option value="Option 2">Offline</option>
                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center pr-4">
                                                        <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                            <Form.Group id="name">
                                                <Form.Label className=""
                                                            style={{
                                                                color: "var(--color-txt)",
                                                                fontFamily: "var(--font-family)",
                                                                fontSize: "var(--small-header-size)"}}>Giới tính gia sư</Form.Label>
                                                <div className="select form-control info d-flex justify-content-center">
                                                    <select id="standard-select">
                                                        <option value="Option 1">Nam</option>
                                                        <option value="Option 2">Nữ</option>
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
                                          background: "rgba(189, 244, 249, 0.2)",
                                          border: "3px solid rgba(255, 255, 255, 0.28)",
                                          boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                                          backdropFilter: "blur(11px)",
                                          borderRadius: "61px"}}>

                                    <Card.Body>
                                        <div className="heading d-flex" style={{marginTop:"10px", fontSize:"14px"}}>
                                            <p className="left mr-auto d-flex align-items-center justify-content-center">Hiển thị kết quả của  3 trong số 50 gia sư</p>
                                            <div className="right d-flex flex-row mb-0">
                                                <p className="d-flex align-items-center justify-content-center pr-3">Sắp xếp theo:</p>
                                                <Form.Group id="name" style={{width:"210px"}}>
                                                    <div className="select form-control info d-flex justify-content-center">
                                                        <select id="standard-select">
                                                            <option value="Option 1">Nam</option>
                                                            <option value="Option 2">Nữ</option>
                                                        </select>
                                                        <div className="d-flex justify-content-center align-items-center pr-4">
                                                            <img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="tutor-info">
                                            <Card style={{
                                                width: "728px",
                                                height: "260px",
                                                background: "rgba(255, 255, 255, 0.5)",
                                                boxShadow: "0px 2px 4px rgba(0, 187, 249, 0.25)",
                                                borderRadius: "32px", borderStyle:"none", marginBottom:"32px"}}>
                                                <Card.Body className="d-flex flex-row align-items-center justify-content-center">
                                                    <img style={{width:"151px", height:"151px", marginRight:"40px"}} src={ProfileAvatar} alt=""/>
                                                    <ul style={{
                                                        listStyle:"none",
                                                        width:"279px",
                                                        fontSize:"14px",
                                                        fontWeight:"500",
                                                        padding:"0",
                                                        marginRight:"43px", color:"#5A5A5A"}}>
                                                        <li style={{fontSize:"16px", fontWeight:"700", marginBottom:"8px", color:"#333333"}}>Edison Max</li>
                                                        <li style={{marginBottom:"8px"}}>Vin University</li>
                                                        <li style={{marginBottom:"8px"}}>Lập trình C++</li>
                                                        <li style={{marginBottom:"8px"}}>Hi, I Am Edison Max, a graduate student
                                                            from the Vin University...</li>
                                                    </ul>
                                                    <div style={{width:"151px"}}>
                                                        <p className="" style={{fontSize:"32px", color:"red", fontWeight:"600", textAlign:"center"}}>0$</p>
                                                        <Button href="/tutor-description" className="w-100" type="submit"
                                                                style={{
                                                                    borderRadius: "16px",
                                                                    borderStyle: "var(--button-borderStyle)",
                                                                    margin: "var(--button-margin)",
                                                                    height: "40px",
                                                                    fontSize: "14px",
                                                                    fontWeight: "var(--button-fontWeight)",
                                                                    backgroundColor: "var(--button-backgroundColor)",
                                                                    fontFamily: "var(--font-family)",
                                                                    boxShadow: "var(--button-boxShadow)"}}>
                                                            Xem gia sư
                                                        </Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card style={{
                                                width: "728px",
                                                height: "260px",
                                                background: "rgba(255, 255, 255, 0.5)",
                                                boxShadow: "0px 2px 4px rgba(0, 187, 249, 0.25)",
                                                borderRadius: "32px", borderStyle:"none", marginBottom:"32px"}}>
                                                <Card.Body className="d-flex flex-row align-items-center justify-content-center">
                                                    <img style={{width:"151px", height:"151px", marginRight:"40px"}} src={ProfileAvatar1} alt=""/>
                                                    <ul style={{
                                                        listStyle:"none",
                                                        width:"279px",
                                                        fontSize:"14px",
                                                        fontWeight:"500",
                                                        padding:"0",
                                                        marginRight:"43px", color:"#5A5A5A"}}>
                                                        <li style={{fontSize:"16px", fontWeight:"700", marginBottom:"8px", color:"#333333"}}>Tiffany</li>
                                                        <li style={{marginBottom:"8px"}}>Vin University</li>
                                                        <li style={{marginBottom:"8px"}}>Lập trình C++</li>
                                                        <li style={{marginBottom:"8px"}}>Hi, I Am Edison Max, a graduate student
                                                            from the Vin University...</li>
                                                    </ul>
                                                    <div style={{width:"151px"}}>
                                                        <p className="" style={{fontSize:"32px", color:"red", fontWeight:"600", textAlign:"center"}}>12$</p>
                                                        <Button href="/tutor-description" className="w-100" type="submit"
                                                                style={{
                                                                    borderRadius: "16px",
                                                                    borderStyle: "var(--button-borderStyle)",
                                                                    margin: "var(--button-margin)",
                                                                    height: "40px",
                                                                    fontSize: "14px",
                                                                    fontWeight: "var(--button-fontWeight)",
                                                                    backgroundColor: "var(--button-backgroundColor)",
                                                                    fontFamily: "var(--font-family)",
                                                                    boxShadow: "var(--button-boxShadow)"}}>
                                                            Xem gia sư
                                                        </Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card style={{
                                                width: "728px",
                                                height: "260px",
                                                background: "rgba(255, 255, 255, 0.5)",
                                                boxShadow: "0px 2px 4px rgba(0, 187, 249, 0.25)",
                                                borderRadius: "32px", borderStyle:"none"}}>
                                                <Card.Body className="d-flex flex-row align-items-center justify-content-center">
                                                    <img style={{width:"151px", height:"151px", marginRight:"40px"}} src={ProfileAvatar2} alt=""/>
                                                    <ul style={{
                                                        listStyle:"none",
                                                        width:"279px",
                                                        fontSize:"14px",
                                                        fontWeight:"500",
                                                        padding:"0",
                                                        marginRight:"43px", color:"#5A5A5A"}}>
                                                        <li style={{fontSize:"16px", fontWeight:"700", marginBottom:"8px", color:"#333333"}}>Casemiro</li>
                                                        <li style={{marginBottom:"8px"}}>Vin University</li>
                                                        <li style={{marginBottom:"8px"}}>Lập trình C++</li>
                                                        <li style={{marginBottom:"8px"}}>Hi, I Am Edison Max, a graduate student
                                                            from the Vin University...</li>
                                                    </ul>
                                                    <div style={{width:"151px"}}>
                                                        <p style={{fontSize:"32px", color:"red", fontWeight:"600", textAlign:"center"}}>12$</p>
                                                        <div className="d-flex align-items-center justify-content-center mb-4"><img src={star} alt=""/></div>
                                                        <Button  href="/tutor-description" className="w-100" type="submit"
                                                                style={{
                                                                    borderRadius: "16px",
                                                                    borderStyle: "var(--button-borderStyle)",
                                                                    margin: "var(--button-margin)",
                                                                    height: "40px",
                                                                    fontSize: "14px",
                                                                    fontWeight: "var(--button-fontWeight)",
                                                                    backgroundColor: "var(--button-backgroundColor)",
                                                                    fontFamily: "var(--font-family)",
                                                                    boxShadow: "var(--button-boxShadow)"}}>
                                                            Xem gia sư
                                                        </Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </Container>
                <div className="d-flex align-items-center justify-content-center">
                    <img src={banner1} alt=""/>
                </div>
            </div>
        </>
    )
}