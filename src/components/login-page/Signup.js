import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "../theme.css"
import facebookIcon from "../../img/facebook.png";
import googleIcon from "../../img/google.png";

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup, googleLogin, facebookLogin } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

    async function googleHandle() {
        try{
            await googleLogin()
            history.push("/")
        } catch {
            console.log("Failed to login using google");
        }
    }
    async function facebookHandle() {
        try{
            await facebookLogin()
            history.push("/")
        } catch {
            console.log("Failed to login using facebook");
        }
    }

  return (
    <>
    <div className="signup-page">
        <h2 className="text-center mb-4"
            style={{
            fontWeight:"var(--header-weight)",
            fontSize:"var(--header-size)",
            marginTop: "var(--header-paddingTop)"}}>Đăng ký</h2>
        <div className="text-center" style={{marginBottom:"80px"}}>Đăng ký để trở thành thành viên mới của UniFix!</div>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="d-flex align-items-center justify-content-center">
          <Card className="d-flex align-items-center"
                style={{
                    width:'588px',
                    height:'718px',
                    background:"linear-gradient(111.68deg, rgba(255, 255, 255, 0.29) 7.59%, rgba(255, 255, 255, 0.39) 102.04%)",
                    border: "3px solid rgba(255, 255, 255, 0.28)",
                    boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
                    backdropFilter:"blur(11px)",
                    borderRadius:"61px"}}>
              <Card.Body className="d-flex align-items-center justify-content-center" style={{width:'384px'}}>
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id="email" style={{paddingBottom: "10px"}}>
                          <span className="first-icon"><i className="gg-user"></i></span>
                          <Form.Control className="email-info" type="email" placeholder="Email của bạn" ref={emailRef} required />
                      </Form.Group>
                      <Form.Group id="password" style={{paddingBottom: "10px"}}>
                          <span className="first-icon"><i className="gg-menu-boxed"></i></span>
                          <Form.Control className="password-info" type="password" placeholder="Mật khẩu" ref={passwordRef} required />
                      </Form.Group>
                      <Form.Group id="password-confirm" style={{paddingBottom: "24px"}}>
                          <span className="first-icon"><i className="gg-menu-boxed"></i></span>
                          <Form.Control className="password-confirm-info" type="password" placeholder="Nhập lại mật khẩu" ref={passwordConfirmRef} required />
                      </Form.Group>
                      <div className="d-flex justify-content-center mt-3 mb-3" style={{color:"#A7A7A7"}}>
                          Hoặc đăng ký với
                      </div>
                      <button className="btn-5 mb-4"><img src={googleIcon} alt=""/><span>Google</span></button>
                      <button className="btn-5"><img src={facebookIcon} alt=""/><span>Facebook</span></button>
                      <div className="w-100 text-center mt-5 mb-4" style={{color: "#A7A7A7"}}>
                          Bạn đã có tài khoản? <Link to="/login" style={{color: "#00BBF9"}}>Đăng nhập</Link>
                      </div>
                      <Button disabled={loading} className="w-100" type="submit"
                              style={{
                                  borderRadius: "var(--button-borderRadius)",
                                  borderStyle: "var(--button-borderStyle)",
                                  margin: "var(--button-margin)",
                                  width: "var(--button-width)", height: "var(--button-height)",
                                  fontSize: "var(--button-fontSize)",
                                  fontWeight: "var(--button-fontWeight)",
                                  backgroundColor: "var(--button-backgroundColor)",
                                  fontFamily: "var(--font-family)"}}>
                          hoàn tất
                      </Button>
                  </Form>
              </Card.Body>
          </Card>
      </div>
    </div>
    </>
  )
}
