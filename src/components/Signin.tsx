import React, { useState } from "react";
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCreds) => {
        console.log(userCreds);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(event) => onLogin(event)}>Login</button>
      </div>

      <Link to='signup'>Signup</Link>
    </>
  );
};

export default Signin;
