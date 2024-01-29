import React, { useState } from "react";
import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onSignup = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((registeredUser) => {
          console.log(registeredUser);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
        throw new Error("Both password dont match!");
        
    }
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
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={(event) => onSignup(event)}>Signup</button>
      </div>

      <Link to="/">Signin</Link>
    </>
  );
};

export default Signup;
