import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      navigate("/dashboard", { state: { username } });
    } else if (username === "doctor" && password === "1234") {
      navigate("/patientform", { state: { username } });
    } else if (username === "nurse" && password === "1234") {
      navigate("/patientform", { state: { username } });
    } else if (username === "user1" && password === "1234") {
      navigate("/patientform", { state: { username } });
    } else if (username === "user2" && password === "1234") {
      navigate("/patientform", { state: { username } });
    } else {
      alert("Invalid username or password");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>MepZ Camp Login</h1>
        <form onSubmit={handleLogin} autoComplete="off">
          <div className="input-username">
            <span className="input-icon">
              <FaUser />
            </span>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              id="uname"
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-password">
            <span className="input-icon">
              <FaLock />
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="pwd"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="submit-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
