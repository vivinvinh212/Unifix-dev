import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import "../theme.css"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="forgot-password" style={{marginTop: "var(--header-marginTop)", marginBottom:"20%"}}>
        <h2 className="text-center mb-4"
            style={{
                fontWeight: "var(--header-weight)",
                fontSize: "var(--header-size)"}}>Thay đổi mật khẩu</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
          <div className="d-flex align-items-center justify-content-center">
              <Card className="d-flex align-items-center"
                    style={{
                        width:'588px',
                        height:'330px',
                        background:"linear-gradient(111.68deg, rgba(255, 255, 255, 0.29) 7.59%, rgba(255, 255, 255, 0.39) 102.04%)",
                        border: "3px solid rgba(255, 255, 255, 0.28)",
                        boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                        backdropFilter:"blur(11px)",
                        borderRadius:"61px"}}>
                  <Card.Body className="d-flex align-items-center justify-content-center" style={{width:'384px', paddingLeft:"0", paddingRight:"0"}}>
                      <Form className="w-100" onSubmit={handleSubmit}>
                          <Form.Group id="email" style={{paddingBottom: "24px"}}>
                              <span className="first-icon"><i className="gg-user"></i></span>
                              <Form.Control className="email-info" type="email" placeholder="Email của bạn" ref={emailRef} required />
                          </Form.Group>
                          <Button disabled={loading} className="w-100" type="submit"
                                  style={{
                                      borderRadius: "var(--button-borderRadius)",
                                      borderStyle: "var(--button-borderStyle)",
                                      margin: "var(--button-margin)",
                                      width: "var(--button-width)",
                                      height: "var(--button-height)",
                                      fontSize: "var(--button-fontSize)",
                                      fontWeight: "var(--button-fontWeight)",
                                      backgroundColor: "var(--button-backgroundColor)",
                                      fontFamily: "var(--font-family)"}}>
                              Đổi mật khẩu
                          </Button>
                          <div className="container-below-input d-flex justify-content-between" style={{paddingTop:"30px"}}>
                              <div className="d-flex justify-content-start">
                                  <Link to="/login" style={{color: "var(--color-theme)"}}>Đăng nhập</Link>
                              </div>
                              <div className="d-flex justify-content-end" style={{color: "#A7A7A7"}}>
                                  Thành viên mới?&nbsp; <Link to="/signup" style={{color: "var(--color-theme)"}}>Đăng ký</Link>
                              </div>
                          </div>
                      </Form>
                  </Card.Body>
              </Card>
          </div>
      </div>
    </>
  )
}
