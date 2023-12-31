import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Error: " + response.statusText);
      }

      const result = await response.json();
      alert("Registered successfully!!!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const redirectToLogin= () => {
    // Redirect to '/ViewAllComplaint' page
    window.location.href = '/';
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Register</h1>

          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button className="btn btn-primary" onClick={handleRegister}>
              Register
            </button>
            <button className="btn btn-primary ms-2" onClick={redirectToLogin}>Login Here</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
