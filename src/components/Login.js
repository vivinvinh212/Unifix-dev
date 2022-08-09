import React, { useRef, useState } from "react"
import {Form, Button, Card, Alert, FormGroup, InputGroup, FormControl} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import "../icon/themify-icons/themify-icons.css";
import "./theme.css"

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
          <h2 className="text-center mb-4" style={{fontWeight: "var(--header-weight)", fontSize: "var(--header-size)"}}>Sign in</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" style={{paddingBottom: "10px"}}>
              <FormControl className="email-info" type="email" placeholder="Enter your email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <FormControl className="password-info" type="password" placeholder="Enter your password" ref={passwordRef} required />
            </Form.Group>
              <div className="container-below-input d-flex justify-content-between">
                  <div className="d-flex justify-content-start">
                      <Link to="/forgot-password" style={{color: "var(--color-theme)"}}>Forgot Password?</Link>
                  </div>
                  <div className="d-flex justify-content-end" >
                      <Link to="/signup" style={{color: "var(--color-theme)"}}>Sign Up</Link>
                  </div>
              </div>
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
              Sign in
            </Button>
          </Form>
          <div className="horizontal-line">
              &nbsp;&nbsp;or&nbsp;&nbsp;
          </div>
      </div>

      <div style={{marginTop: "1rem", marginBottom: "1rem"}}>
        <FacebookLoginButton onClick={facebookHandle} className="d-flex justify-content-center" style={{borderRadius: "16px", fontFamily: "var(--font-family)"}}/>
      </div>
      <div style={{marginTop: "1rem", marginBottom: "1rem"}}>
        <GoogleLoginButton onClick={googleHandle} className="d-flex justify-content-center" style={{borderRadius: "16px", fontFamily: "var(--font-family)"}} />
      </div>
    </>
  )
}
