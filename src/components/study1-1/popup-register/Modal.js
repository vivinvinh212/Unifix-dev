import React from "react";
import {Button, Form} from "react-bootstrap";
import dropdown from "../../../img/Dropdown.png";

const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
                <div className="d-flex align-content-center justify-content-center" style={{width:"100%"}}>
                    <div className="d-flex align-content-center justify-content-center">
                        <div>
                            <h2 style={{textAlign:"center", color:"#00BBF9", fontSize:"24px", marginBottom:"24px"}}>Đặt lớp học ngay</h2>
                            <p style={{fontSize:"20px", fontWeight:"600"}}>Môn học:</p>
                            <div className="d-flex" style={{gap:"10px"}}>
                                <div className="subject">Lập trình C++</div>
                                <div className="subject">Tiếng Anh giao tiếp</div>
                                <div className="subject">OOP</div>
                            </div>
                            <Form className="w-100">
                                <Form.Group id="name">
                                    <Form.Label className=""
                                                style={{
                                                    color: "var(--color-txt)",
                                                    fontFamily: "var(--font-family)",
                                                    fontSize: "var(--small-header-size)"}}>Số điện thoại</Form.Label>
                                    <Form.Control className="info mb-4" style={{height:"48px"}}
                                                  type="name"
                                                  placeholder="Nhập số điện thoại"
                                                  required
                                        /*defaultValue={currentUser.email}*/
                                    />
                                </Form.Group>
                                <Form.Group id="name">
                                    <Form.Label className=""
                                                style={{
                                                    color: "var(--color-txt)",
                                                    fontFamily: "var(--font-family)",
                                                    fontSize: "var(--small-header-size)"}}>Email</Form.Label>
                                    <Form.Control className="info mb-4" style={{height:"48px"}}
                                                  type="name"
                                                  placeholder="Nhập địa chỉ email"
                                                  required
                                        /*defaultValue={currentUser.email}*/
                                    />
                                </Form.Group>
                                <Form.Group id="name">
                                    <Form.Label className=""
                                                style={{
                                                    color: "var(--color-txt)",
                                                    fontFamily: "var(--font-family)",
                                                    fontSize: "var(--small-header-size)"}}>Bạn muốn học như thế nào?</Form.Label>
                                    <div className="select form-control info d-flex justify-content-center" style={{height:"48px"}}>
                                        <select id="standard-select">
                                            <option value="Option 1" style={{color:"red"}}>Tại địa chỉ giáo viên cung cấp</option>
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
                            </Form>
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
                                Đặt ngay!
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Popup;