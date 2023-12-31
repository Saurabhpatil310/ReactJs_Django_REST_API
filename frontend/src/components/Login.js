import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Error: " + response.statusText);
      }

      const result = await response.json();
      localStorage.setItem("token", result.token); // Store token in local storage
      setIsLoggedIn(true); // Update login status
      navigate('/ViewAllComplaints'); // Redirect using useNavigate
      alert("Logged in successfully!!!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:8000/api/logout/", {
        method: "POST",
        headers: {
          "Authorization": `Token ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error: " + response.statusText);
      }

      localStorage.removeItem("token"); // Remove token from local storage
      setIsLoggedIn(false); // Update login status
      navigate('/Login'); // Redirect using useNavigate
      alert("Logged out successfully!!!");

    } catch (error) {
      console.error("Error:", error);
    }
  };

  const redirectToRegister= () => {
    // Redirect to '/ViewAllComplaint' page
    window.location.href = '/Register';
  };

  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {!isLoggedIn ? (
            <div>
              <h1>Login</h1>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                <button className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
                <button className="btn btn-primary ms-2" onClick={redirectToRegister}>Register Here</button>
              </div>
            </div>
          ) : (
            <div>
              <h1>Logout</h1>
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
 