import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../redux/auth/auth.action";

import "./register.css";

function Registration({ registerUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleregistration = (e) => {
    e.preventDefault();
    registerUser(username, password);
  };
  return (
    <div className="registration">
      <h1>Registration</h1>
      <form className="add-film-form" onSubmit={handleregistration}>
        {/* <input type='file' required/> */}
        <input
          type="text"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <input type="submit" value="registration" />
      </form>
    </div>
  );
}

export default connect(null, { registerUser })(Registration);
