import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

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
          <h2 className="text-center mb-4" style={{fontWeight: "var(--header-weight)", fontSize: "40px"}}>Welcome to Unifix!</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label className="required" style={{color: "var(--color-txt)", fontFamily: "var(--font-family)"}}>First name</Form.Label>
              <Form.Control className="info"
                type="name"
                ref={emailRef}
                required
                /*defaultValue={currentUser.email}*/
              />
            </Form.Group>
            <Form.Group id="name">
              <Form.Label style={{color: "var(--color-txt)", fontFamily: "var(--font-family)"}}>Middle name</Form.Label>
              <Form.Control className="info"
                type="name"
                ref={passwordRef}
              />
            </Form.Group>
            <Form.Group id="name">
              <Form.Label className="required" style={{color: "var(--color-txt)", fontFamily: "var(--font-family)"}}>Last name</Form.Label>
              <Form.Control className="info"
                type="name"
                ref={passwordConfirmRef}
              />
            </Form.Group>
            <Form.Group id="dob">
              <Form.Label className="required" style={{color: "var(--color-txt)", fontFamily: "var(--font-family)"}}>Date of birth</Form.Label>
              <Form.Control className="info"
                  type="date"
                  ref={passwordConfirmRef} style={{paddingTop: "20px", paddingBottom: "20px"}}
              />
            </Form.Group>
            <div className="w-100 text-center">
              <Button disabled={loading} className="w-50" type="submit"
                      style={{
                        borderRadius: "var(--button-borderRadius)",
                        borderStyle: "var(--button-borderStyle)",
                        margin: "var(--button-margin)",
                        width: "var(--button-width)",
                        fontSize: "var(--button-fontSize)",
                        fontWeight: "var(--button-fontWeight)",
                        backgroundColor: "var(--button-backgroundColor)",
                        fontFamily: "var(--font-family)"}}>
                Update
              </Button>
            </div>
          </Form>
        </div>
      <div className="w-100 text-center mt-2">
        <Link to="/" style={{color: "var(--color-theme)"}}>Cancel</Link>
      </div>
    </>
  )
}
