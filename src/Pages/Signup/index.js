import React, { useState } from "react";
import "../../baseStyles.css";
import { useNavigate } from "react-router-dom";
import { SignupService } from "../../Services/APIServices/AuthService";
export const SignupComponent = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: "",
    role: "",
  });

  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/");
  };

  const userSignUp = () => {
    console.log("the sign up data", userData);
    SignupService(userData).then((res) => {
      if (res.status === 200) {
        setUserData({
          username: "",
          email: "",
          password: "",
          phonenumber: "",
          role: "",
        });
        navigate("/");
        console.log("user successfully registered", res);
      } else {
        console.log("error registering the user", res);
      }
    });
  };

  return (
    <>
      <div className="container">
        <h3>Sign Up User</h3>
        <div className="card p-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="inp"
            name=""
            id=""
            placeholder="enter the username"
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="inp"
            name=""
            id=""
            placeholder="enter the email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="inp"
            name=""
            id=""
            placeholder="enter the password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="text"
            className="inp"
            name=""
            id=""
            placeholder="Enter the phone number"
            onChange={(e) =>
              setUserData({ ...userData, phonenumber: e.target.value })
            }
          />
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name=""
            id=""
            className="inp"
            placeholder="Enter the role"
            onChange={(e) => setUserData({ ...userData, role: e.target.value })}
          />

          <button className="btn btn-danger my-2" onClick={userSignUp}>
            Sign Up
          </button>
          <button className="btn btn-secondary my-2" onClick={gotoLogin}>
            Already have an account?
          </button>
        </div>
      </div>
    </>
  );
};
