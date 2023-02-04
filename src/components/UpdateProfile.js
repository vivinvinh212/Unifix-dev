import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import dropdown from "../img/Dropdown.png";

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div>
          <h2 className="text-center mb-4" style={{
              fontWeight:"var(--header-weight)",
              fontSize:"var(--header-size)",
              marginTop: "var(--header-marginTop)"}}>Hoàn thành hồ sơ</h2>
          <div className="text-center" style={{marginBottom:"80px"}}>Chỉ còn 1 bước nữa thôi là bạn đã là thành viên của Unifix</div>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="d-flex align-items-center justify-content-center">
              <Card className="d-flex align-items-center"
                    style={{
                        width:'996px',
                        height:'987px',
                        background:"linear-gradient(111.68deg, rgba(255, 255, 255, 0.29) 7.59%, rgba(255, 255, 255, 0.39) 102.04%)",
                        border: "3px solid rgba(255, 255, 255, 0.28)",
                        boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                        backdropFilter:"blur(11px)",
                        borderRadius:"61px"}}>
                  <Card.Body className="d-flex align-items-center justify-content-center" style={{width:'588px'}}>
                      <Form className="w-100" onSubmit={handleSubmit}>
                          <Form.Group id="name">
                              <Form.Label className=""
                                          style={{
                                              color: "var(--color-txt)",
                                              fontFamily: "var(--font-family)",
                                              fontSize: "var(--small-header-size)"}}>Họ và tên</Form.Label>
                              <Form.Control className="info"
                                            type="name"
                                            ref={emailRef} placeholder="Nhập họ và tên"
                                            required
                                  /*defaultValue={currentUser.email}*/
                              />
                          </Form.Group>
                          <Form.Group id="name">
                              <Form.Label
                                  style={{
                                      color: "var(--color-txt)",
                                      fontFamily: "var(--font-family)",
                                      fontSize: "var(--small-header-size)"}}>Email</Form.Label>
                              <Form.Control className="info"
                                            type="name"
                                            ref={passwordRef} placeholder="Nhập địa chỉ email"
                              />
                          </Form.Group>
                          <Form.Group id="name">
                              <Form.Label className=""
                                          style={{
                                              color: "var(--color-txt)",
                                              fontFamily: "var(--font-family)",
                                              fontSize: "var(--small-header-size)"}}>Bạn hiện đang là</Form.Label>
                              <div className="select form-control info d-flex justify-content-center">
                                  <select id="standard-select">
                                      <option value="Option 1" style={{color:"red"}}>Option 1</option>
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
                          <Form.Group id="dob">
                              <Form.Label className=""
                                          style={{
                                              color: "var(--color-txt)",
                                              fontFamily: "var(--font-family)",
                                              fontSize: "var(--small-header-size)"}}>Nơi sinh sống hiện tại của bạn</Form.Label>
                              <div className="select form-control info d-flex justify-content-center">
                                  <select id="standard-select" style={{paddingRight:"0"}}>
                                      <option value="Option 1">Hà Nội</option>
                                      <option value="Option 2">TP. Hồ Chí Minh</option>
                                      <option value="Option 3">Hải Phòng</option>
                                      <option value="Option 4">Nha Trang</option>
                                      <option value="Option 5">Đà Nẵng</option>
                                  </select>
                                  <div className="d-flex justify-content-center align-items-center pr-4"><img src={dropdown} alt="" style={{width:"12px", height:"8px"}}/></div>
                              </div>
                          </Form.Group>
                          <Form.Group id="name">
                              <Form.Label className=""
                                          style={{
                                              color: "var(--color-txt)",
                                              fontFamily: "var(--font-family)",
                                              fontSize: "var(--small-header-size)"}}>Giới thiệu</Form.Label>
                              <textarea className="form-control info" placeholder="Hãy giới thiệu qua về bản thân bạn" rows="3"
                                        style={{
                                            height:"209px",
                                            paddingTop:"13px",
                                            fontSize:"var(--small-header-size)"}}></textarea>
                          </Form.Group>
                          <div className="w-100 text-center mb-3" style={{paddingTop:"43px"}}>
                              <Button disabled={loading} className="w-100" type="submit" href="landing-page"
                                      style={{
                                          borderRadius: "var(--button-borderRadius)",
                                          borderStyle: "var(--button-borderStyle)",
                                          margin: "var(--button-margin)",
                                          width: "var(--button-width)",
                                          fontSize: "var(--button-fontSize)",
                                          fontWeight: "var(--button-fontWeight)",
                                          backgroundColor: "var(--button-backgroundColor)",
                                          fontFamily: "var(--font-family)"}}>
                                  Lưu
                              </Button>
                          </div>
                          <div className="w-100 text-center mt-2">
                              <Link to="/" style={{color: "var(--color-theme)"}}>Bỏ qua</Link>
                          </div>
                      </Form>
                  </Card.Body>
              </Card>
          </div>

        </div>
    </>
  )
}
