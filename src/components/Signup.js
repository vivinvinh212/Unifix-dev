import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./theme.css"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
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

  return (
    <>
    <div className="signup-page">
      <h2 className="text-center mb-4" style={{fontWeight: "var(--header-weight)", fontSize: "var(--header-size)"}}>Sign Up</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group id="email">
          <Form.Control className="email-info" type="email" placeholder="Enter your email" ref={emailRef} required />
        </Form.Group>
        <Form.Group id="password">
          <Form.Control className="password-info" type="password" placeholder="Enter your password" ref={passwordRef} required />
        </Form.Group>
        <Form.Group id="password-confirm">
          <Form.Control className="password-confirm-info" type="password" placeholder="Confirm your password" ref={passwordConfirmRef} required />
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
          Sign Up
        </Button>
      </Form>
      <div className="w-100 text-center mt-2" style={{paddingTop: "10px"}}>
        Already have an account? <Link to="/login" style={{color: "var(--color-theme)"}}>Sign in</Link>
      </div>
    </div>
    </>
  )
}
