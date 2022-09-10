import { useContext, useRef } from "react";
import { AuthContext } from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPassworInputdRef = useRef();
  const authContext = useContext(AuthContext);
  const submitHandler = async (event) => {
    event.preventDefault();
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAR54MHj_n9mqNId3bgV6EhgVGqsmahGC4",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          idToken: authContext.token,
          password: newPassworInputdRef.current.value,
          returnSecureToken: true,
        }),
      }
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);
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
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPassworInputdRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
