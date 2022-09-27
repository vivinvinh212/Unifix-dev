import React, { useRef, useState } from "react"
import {Form, Button, Card, Alert, FormGroup, InputGroup, FormControl} from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import "../../icon/themify-icons/themify-icons.css";
import "../theme.css";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, googleLogin, facebookLogin } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
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
      <div id="login-page">
          <h2 className="text-center mb-4" style={{fontWeight:"var(--header-weight)", fontSize:"var(--header-size)"}}>Đăng nhập</h2>
          <div className="text-center" style={{marginBottom:"80px"}}>Hãy đăng nhập tài khoản của bạn để tham gia ngay!</div>
          {error && <Alert variant="danger">{error}</Alert>}
          <Card className="d-flex align-items-center"
                style={{
                    width:'588px',
                    height:'499px',
                    background:"linear-gradient(111.68deg, rgba(255, 255, 255, 0.29) 7.59%, rgba(255, 255, 255, 0.39) 102.04%)",
                    border: "3px solid rgba(255, 255, 255, 0.28)",
                    boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2",
                    backdropFilter:"blur(11px)",
                    borderRadius:"61px"}}>
              <Card.Body className="d-flex align-items-center justify-content-center" style={{width:'384px'}}>
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id="email" style={{paddingBottom: "10px"}}>
                          <FormControl className="form-control email-info" type="email" placeholder="Tài khoản" style={{fontSize:'16px', fontWeight:'500'}} ref={emailRef} required />
                      </Form.Group>
                      <Form.Group id="password" style={{paddingBottom: "24px"}}>
                          <FormControl className="password-info" type="password" placeholder="Mật khẩu" style={{fontSize:'16px', fontWeight:'500'}} ref={passwordRef} required />
                      </Form.Group>
                      <Button disabled={loading} className="w-100" type="submit"
                              style={{
                                  borderRadius: "var(--button-borderRadius)",
                                  borderStyle: "var(--button-borderStyle)",
                                  margin: "var(--button-margin)",
                                  width: "var(--button-width)",
                                  fontSize: "var(--button-fontSize)",
                                  fontWeight: "var(--button-fontWeight)",
                                  backgroundColor: "var(--button-backgroundColor)",
                                  fontFamily: "var(--font-family)"}}>
                          Đăng nhập
                      </Button>
                      <div className="forgot-password text-center" style={{paddingTop:'50px'}}>
                          <Link to="/forgot-password" style={{color: "#FFB830", textDecorationLine:'underline'}}>Bạn quên mật khẩu?</Link>
                      </div>
                      <div className="sign-up text-center" style={{paddingTop:"44px", color: "#A7A7A7"}}>
                          Bạn chưa có tài khoản? <Link to="/signup" style={{color:"#00BBF9"}}>Đăng ký</Link>
                      </div>
                  </Form>
              </Card.Body>
          </Card>
      </div>
    </>
  )
}
