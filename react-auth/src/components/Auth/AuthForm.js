import { useContext, useRef, useState } from "react";

import classes from "./AuthForm.module.css";
import { AuthContext } from "../../store/auth-context";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const authContext = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    console.log("submit");
    event.preventDefault();
    let url = "";
    // https://firebase.google.com/docs/reference/rest/auth
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAR54MHj_n9mqNId3bgV6EhgVGqsmahGC4";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAR54MHj_n9mqNId3bgV6EhgVGqsmahGC4";
    }
    console.log(url);
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
        returnSecureToken: true,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      authContext.login(data.idToken);
    } else {
      const err = await res.json();
      let errMessage = "Authentication failed";
      if (err && err.error && err.error.message) {
        errMessage = err.error.message;
      }
      alert(errMessage);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
