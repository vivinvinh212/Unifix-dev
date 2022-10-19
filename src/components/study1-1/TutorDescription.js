import React, {useRef, useState} from "react";
import {Button, Card} from "react-bootstrap";
import "../theme.css";
import ProfileAvatar3 from "../../img/Profile-avatar-3.png";
import star from "../../img/star.png";
import singleStar from "../../img/single-star.png";
import locationIcon from "../../img/location_icon.png";
import infoIcon from "../../img/info_icon.png";
import skillIcon from "../../img/skill_icon.png";
import programIcon from "../../img/program_icon.png";
import Modal from "./popup-register/Modal";
import banner4 from "../../img/banner4.png";

export default function TutorDescription() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="tutor-description">
                <main>
                    <div className="d-flex align-content-center justify-content-center">
                        <Card style={{
                            width: "83.3%",
                            height: "440px",
                            background: "rgba(189, 244, 249, 0.2)",
                            WebkitBackdropFilter: "blur(11px)",
                            boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                            borderRadius: "32px", borderStyle:"none", marginBottom:"32px", marginTop:"120px", border: "3px solid rgba(255, 255, 255, 0.28)"}}>
                            <Card.Body className="d-flex flex-row align-items-center justify-content-center">
                                <img style={{width:"280px", height:"280px", marginRight:"20%"}} src={ProfileAvatar3} alt=""/>
                                <div style={{width:"551px"}}>
                                    <div className="tutor-description-heading d-flex align-items-center">
                                        <p style={{fontSize:"32px", fontWeight:"600", margin:"0", marginRight:"65px"}}>Edison Max</p>
                                        <img src={star} alt="" style={{height:"20px"}}/>
                                        <p className="ml-3" style={{fontSize:"14px", color:"#818181", margin:"0"}}>378 Lượt đánh giá</p>
                                    </div>
                                    <div className="mb-3 mt-4" style={{
                                        width:"fit-content",
                                        height:"fit-content",
                                        lineHeight:"40px",
                                        padding:"10px 24px",
                                        fontSize:"16px",
                                        background:"rgba(0, 187, 249, 0.1)",
                                        borderRadius:"16px"}}>Giảng viên: Tiếng Anh , Lập trình C++</div>
                                    <div style={{
                                        width:"fit-content",
                                        height:"fit-content",
                                        lineHeight:"40px",
                                        padding:"10px 24px",
                                        fontSize:"16px",
                                        background:"rgba(0, 187, 249, 0.1)",
                                        borderRadius:"16px", marginBottom:"40px"}}>Quốc tịch: Vương Quốc Anh</div>
                                    <Button onClick={togglePopup} style={{
                                                borderRadius: "32px",
                                                borderStyle: "var(--button-borderStyle)",
                                                margin: "var(--button-margin)",
                                                height: "56px", width:"223px",
                                                fontSize: "14px",
                                                fontWeight: "var(--button-fontWeight)",
                                                backgroundColor: "var(--button-backgroundColor)",
                                                fontFamily: "var(--font-family)",
                                                boxShadow: "var(--button-boxShadow)"}}>
                                        Đặt lịch học ngay
                                    </Button>
                                    {isOpen && <Modal
                                        content={<>
                                        </>}
                                        handleClose={togglePopup}
                                    />}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-content-center justify-content-center" style={{}}>
                        <Card className="d-flex align-items-center" style={{
                            width: "83.3%",
                            background: "rgba(189, 244, 249, 0.2)",
                            WebkitBackdropFilter: "blur(11px)",
                            boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                            borderRadius: "32px", borderStyle:"none", marginBottom:"32px", border: "3px solid rgba(255, 255, 255, 0.28)"}}>
                            <Card.Body className="d-flex align-content-center justify-content-center" style={{width:"66.6%"}}>
                                <div>
                                    <div className="overview d-flex align-items-center justify-content-center" style={{gap:"80px", fontSize:"20px", color:"#5A5A5A", marginTop:"40px"}}>
                                        <div>Tổng quan</div>
                                        <div>Đánh giá</div>
                                        <div>Kinh nghiệm</div>
                                    </div>
                                    <h2 style={{textAlign:"center", fontSize:"24px", marginTop:"69px", marginBottom:"34px"}}>Về Edison Max</h2>
                                    <div style={{color:"#5A5A5A", fontSize:"20px"}}>
                                        <div className="d-flex">
                                            <img src={locationIcon} alt="" style={{height:"32px"}}/>
                                            <p className="ml-3" style={{lineHeight:"32px", fontWeight:"600"}}>Locations</p>
                                        </div>
                                        <p style={{lineHeight:"40px"}}>I teach out of small studio as well sas travel to students for in home lessons.
                                            I also offer lessons online where my availability is most flexible</p>
                                        <div className="d-flex" style={{marginTop:"32px"}}>
                                            <img src={infoIcon} alt="" style={{height:"32px"}}/>
                                            <p className="ml-3" style={{lineHeight:"32px", fontWeight:"600"}}>About</p>
                                        </div>
                                        <p style={{lineHeight:"40px"}}>I love pop and classic rock/metal. I have a BM in performance, but also spent most
                                            of my life before that playing without a book techer. I am a music theory junkie
                                            and production nerd. Most of my free time is spent playing piano and writting/ producting
                                            songs for relase. I have studied classical compositions and although i sing promarily pop now.
                                            I am classically trained</p>
                                    </div>
                                    <div className="d-flex" style={{fontSize:"20px", marginTop:"32px"}}>
                                        <img src={programIcon} alt="" style={{height:"32px"}}/>
                                        <p className="ml-3" style={{lineHeight:"32px", fontWeight:"500", marginRight:"32px"}}>BM Vcal Performance</p>
                                        <img src={skillIcon} alt="" style={{height:"32px"}}/>
                                        <p className="ml-3" style={{lineHeight:"32px", fontWeight:"500"}}>Teaches all skill levels</p>
                                    </div>
                                    <div>
                                        <p style={{fontSize:"20px", fontWeight:"600", marginTop:"40px"}}>Subjects & Courses</p>
                                        <div className="d-flex" style={{gap:"10px"}}>
                                            <div className="subject">Lập trình C++</div>
                                            <div className="subject">Tiếng Anh giao tiếp</div>
                                            <div className="subject">OOP</div>
                                            <div className="subject">Lập trình C++</div>
                                            <div className="subject">Tiếng Anh giao tiếp</div>
                                            <div className="subject">OOP</div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 style={{fontSize:"24px", fontWeight:"600", marginTop:"64px", textAlign:"center", marginBottom:"64px"}}>Đánh giá</h2>
                                        <div className="rating d-flex align-items-center justify-content-center" style={{marginBottom:"127px"}}>
                                            <div>
                                                <p style={{fontSize:"48px", marginBottom:"10px", marginRight:"134px"}}>4.0</p>
                                                <img src={star} alt="" style={{height:"20px"}}/>
                                                <p style={{marginTop:"18px"}}>378 lượt đánh giá</p>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center justify-content-start" style={{width:"240px", gap:"8px"}}>
                                                    <p style={{margin:"0"}}>5</p>
                                                    <img src={singleStar} alt=""/>
                                                    <div className="rating-bar">
                                                        <div style={{width:"131px", height:"4px", background:"#00BBF9", borderRadius:"16px", position:"absolute", zIndex:"1"}} />
                                                        <div style={{width:"152px", height:"4px", background:"#D9D9D9", borderRadius:"16px"}} />
                                                    </div>
                                                    <p style={{margin:"0"}}>85%</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-start" style={{width:"240px", gap:"8px"}}>
                                                    <p style={{margin:"0"}}>4</p>
                                                    <img src={singleStar} alt=""/>
                                                    <div className="rating-bar">
                                                        <div style={{width:"26px", height:"4px", background:"#00BBF9", borderRadius:"16px", position:"absolute", zIndex:"1"}} />
                                                        <div style={{width:"152px", height:"4px", background:"#D9D9D9", borderRadius:"16px"}} />
                                                    </div>
                                                    <p style={{margin:"0"}}>10%</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-start" style={{width:"240px", gap:"8px"}}>
                                                    <p style={{margin:"0"}}>3</p>
                                                    <img src={singleStar} alt=""/>
                                                    <div className="rating-bar">
                                                        <div style={{width:"12px", height:"4px", background:"#00BBF9", borderRadius:"16px", position:"absolute", zIndex:"1"}} />
                                                        <div style={{width:"152px", height:"4px", background:"#D9D9D9", borderRadius:"16px"}} />

                                                    </div>
                                                    <p style={{margin:"0"}}>5%</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-start" style={{width:"240px", gap:"8px"}}>
                                                    <p style={{margin:"0"}}>2</p>
                                                    <img src={singleStar} alt=""/>
                                                    <div className="rating-bar">
                                                        <div style={{width:"0px", height:"0", background:"#00BBF9", borderRadius:"16px", position:"absolute", zIndex:"1"}} />
                                                        <div style={{width:"152px", height:"4px", background:"#D9D9D9", borderRadius:"16px"}} />
                                                    </div>
                                                    <p style={{margin:"0"}}>0%</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-start" style={{width:"240px", gap:"8px", paddingLeft:"3.5px"}}>
                                                    <p style={{margin:"0"}}>1</p>
                                                    <img src={singleStar} alt=""/>
                                                    <div className="rating-bar">
                                                        <div style={{width:"0", height:"0", background:"#00BBF9", borderRadius:"16px", position:"absolute", zIndex:"1"}}>
                                                            {isOpen && <Modal
                                                                content={<>
                                                                </>}
                                                                handleClose={togglePopup}
                                                            />}
                                                        </div>
                                                        <div style={{width:"152px", height:"4px", background:"#D9D9D9", borderRadius:"16px"}} />
                                                    </div>
                                                    <p style={{margin:"0"}}>0%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <div style={{marginBottom:"68px"}}>
                                                <img src={star} alt=""/>
                                                <div className="d-flex flex-row mt-3">
                                                    <div className="left mr-auto">Anthony</div>
                                                    <div className="right" style={{color:"#5A5A5A"}}>Teacher's Studio</div>
                                                </div>
                                                <p className="mt-4" style={{color:"#5A5A5A"}}>More patience then i’d even give myself</p>
                                                <p className="mt-3" style={{color:"#818181"}}>Posted Sep 7, 2022</p>
                                            </div>
                                            <div style={{marginBottom:"68px"}}>
                                                <img src={star} alt=""/>
                                                <div className="d-flex flex-row mt-3">
                                                    <div className="left mr-auto">Cristiano Ronaldo</div>
                                                    <div className="right" style={{color:"#5A5A5A"}}>Teacher's Studio</div>
                                                </div>
                                                <p className="mt-4" style={{color:"#5A5A5A"}}>More patience then i’d even give myself More patience then i’d even give myself</p>
                                                <p className="mt-3" style={{color:"#818181"}}>Posted Sep 7, 2022</p>
                                            </div>
                                            <div style={{marginBottom:"68px"}}>
                                                <img src={star} alt=""/>
                                                <div className="d-flex flex-row mt-3">
                                                    <div className="left mr-auto">Casemiro</div>
                                                    <div className="right" style={{color:"#5A5A5A"}}>Teacher's Studio</div>
                                                </div>
                                                <p className="mt-4" style={{color:"#5A5A5A"}}>More patience then i’d even give myself More patience then i’d even give myself</p>
                                                <p className="mt-3" style={{color:"#818181"}}>Posted Sep 7, 2022</p>
                                            </div>
                                            <div>
                                                <img src={star} alt=""/>
                                                <div className="d-flex flex-row mt-3">
                                                    <div className="left mr-auto">Neymar Jr</div>
                                                    <div className="right" style={{color:"#5A5A5A"}}>Teacher's Studio</div>
                                                </div>
                                                <p className="mt-4" style={{color:"#5A5A5A"}}>More patience then i’d even give myself</p>
                                                <p className="mt-3" style={{color:"#818181"}}>Posted Sep 7, 2022</p>
                                            </div>
                                        </div>
                                        <div className="experience" style={{marginTop:"64px"}}>
                                            <h2 style={{fontSize:"24px", fontWeight:"600", marginTop:"64px", textAlign:"center", marginBottom:"64px"}}>
                                                Kinh nghiệm
                                            </h2>
                                            <div className="d-flex flex-row">
                                                <div className="left mr-auto d-flex">
                                                    <img src={infoIcon} alt="" style={{height:"32px"}}/>
                                                    <p className="ml-3" style={{fontSize:"20px" ,lineHeight:"32px", fontWeight:"600", color:"#5A5A5A"}}>Owner</p>
                                                </div>
                                                <div className="right">
                                                    Oct 2015 - Present
                                                </div>
                                            </div>
                                            <p style={{marginTop:"40px", marginBottom:"242px"}}>Black Phantom Records</p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{marginTop:"46px"}}>
                        <img src={banner4} alt=""/>
                    </div>
                </main>
            </div>
        </>
    )
}