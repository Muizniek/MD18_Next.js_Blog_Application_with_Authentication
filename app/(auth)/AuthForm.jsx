"use client";

import { useState } from "react";
import css from "./auth.module.css";

const AuthForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className={css.form_wrapper}>
        <form
          className={css.AuthForm}
          onSubmit={(e) => handleSubmit(e, email, password)}
        >
          <label>
            <span>Email:</span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </label>
          <button className={css.auth_form_submit}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
