import React, { useState } from "react";
import "../../baseStyles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginService } from "../../Services/APIServices/AuthService";
import { adduser, setIsAuth } from "../../features/kemps/kempsSlice";

export const LoginComponent = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const gotosignup = () => {
    navigate("/signup");
  };

  const loginuser = () => {
    console.log("userdata", email, password);
    let payload = {
      email: email,
      password: password,
    };

    LoginService(payload).then((res) => {
      if (!res.status === 401) {
        console.log("error loggin in user");
      } else if (res.status === 200) {
        dispatch(adduser(res.data.user));
        dispatch(setIsAuth(true));
        console.log("user logged in successfully", res);
      }
    });
  };

  return (
    <>
      <div className="container">
        <div>LoginComponent</div>

        <div className="card p-3 my-3">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="inp"
            placeholder="Enter your email Id"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="email"
            id="email"
            className="inp"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button className="btn btn-primary my-2" onClick={loginuser}>
            Login
          </button>
          <button className="btn btn-danger my-2" onClick={gotosignup}>
            Signup
          </button>
        </div>
      </div>
    </>
  );
};
