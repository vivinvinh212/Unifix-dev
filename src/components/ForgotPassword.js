import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import "./theme.css"

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
      <div className="forgot-password">
        <h2 className="text-center mb-4" style={{fontWeight: "var(--header-weight)", fontSize: "var(--header-size)"}}>Password Reset</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Control className="email-info" type="email" placeholder="Enter your email" ref={emailRef} required />
          </Form.Group>
            <div className="container-below-input d-flex justify-content-between">
                <div className="d-flex justify-content-start">
                    <Link to="/login" style={{color: "var(--color-theme)"}}>Login</Link>
                </div>
                <div className="d-flex justify-content-end">
                    Need an account?&nbsp; <Link to="/signup" style={{color: "var(--color-theme)"}}>Sign Up</Link>
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
            Reset Password
          </Button>
        </Form>
      </div>
    </>
  )
}
