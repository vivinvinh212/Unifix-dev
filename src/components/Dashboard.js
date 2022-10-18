import React, { useEffect, useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from "firebase/app";
import "./styles.css";
import "./theme.css";

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const [name, setName] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [email, setEmail] = useState(null);
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  useEffect(() => {
    var user = firebase.auth().currentUser;
    if (user != null) {
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
      console.log(currentUser.displayName);
      console.log(currentUser.email);
      console.log(currentUser.photoURL);
    }
  }, []);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center" style={{height:"500px"}}>
        <Card className="d-flex align-items-center" style={{
          width:'588px',
          height:'250px',
          background:"linear-gradient(111.68deg, rgba(255, 255, 255, 0.29) 7.59%, rgba(255, 255, 255, 0.39) 102.04%)",
          border: "3px solid rgba(255, 255, 255, 0.28)",
          boxShadow: "0px 4px 40px rgba(0, 187, 249, 0.2)",
          backdropFilter:"blur(11px)",
          borderRadius:"61px", marginTop: "var(--header-paddingTop)"}}>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <div style={{textAlign: "center"}}>
              <div style={{marginBottom: "1rem"}}>
                {currentUser.photoURL ? <img className="card-image" src={currentUser.photoURL} /> : null}
              </div>
              <strong>Email:</strong> {currentUser.email} <br />
              {currentUser.displayName ? <p><strong>Name: </strong>{currentUser.displayName}</p>  : null}
            </div>
            <div className="text-center">
              {!currentUser.displayName ? <Link to="/update-profile" className="btn btn-primary mt-3" style={{
                borderRadius: "var(--button-borderRadius)",
                borderStyle: "var(--button-borderStyle)",
                margin: "var(--button-margin)",
                width: "384px",
                height: "var(--button-height)",
                lineHeight: "50px",
                fontSize: "var(--button-fontSize)",
                fontWeight: "var(--button-fontWeight)",
                backgroundColor: "var(--button-backgroundColor)",
                fontFamily: "var(--font-family)"}}>
                <span>Update Profile</span>
              </Link> : null}
            </div>
            <div className="w-100 text-center mt-2">
              <Button variant="link" onClick={handleLogout} style={{color:"#00BBF9"}}>
                Log Out
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
