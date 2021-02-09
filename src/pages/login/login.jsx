import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/auth/auth.action";
import "./login.css";

function Login({ loginUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // if (
    //   localStorage.getItem("username") === username &&
    //   localStorage.getItem("password") === password
    // ) {
    //   alert("URAAAAAAAAAA");
    // } else {
    //   alert("noOk");
    // }
    loginUser(username, password);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="add-film-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

export default connect(null, { loginUser })(Login);
