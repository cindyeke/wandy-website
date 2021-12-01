import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../scss/Login.scss";

function Login() {
  const host = ""; // use this to save the env host ip address

  const history = useHistory();

  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [errMessage, setErrMessage] = useState();
  const [isUserValid, setIsUserValid] = useState(true);

  const handleLogin = async () => {
    const path = `${host !== "" ? host : "http://localhost:5000"}/login`;
    try {
      const res = await fetch(path, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (data.length > 0) {
        history.push({
          pathname: "/dashboard",
          state: { token: data[0].token },
        });
      } else {
        setIsUserValid(false);
        setErrMessage("Provide valid login credentials");
        document.querySelector("input").value = "";
        document.querySelector("#password").value = "";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="loginContainer">
      <div className="formContainer">
        {!isUserValid && (
          <div className="errContainer">
            <i style={{ marginRight: "10px" }} className="fa fa-ban"></i>
            {errMessage}
          </div>
        )}
        <input
          autoComplete="off"
          type="text"
          name="username"
          onChange={(event) => setUsername(event.target.value)}
          placeholder="USERNAME"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="PASSWORD"
          required
        />

        <input type="submit" onClick={handleLogin} value="LOGIN" />
      </div>
    </section>
  );
}

export default Login;
