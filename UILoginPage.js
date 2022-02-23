import "../App.css";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { React, useState } from "react";
import usePage from "./usePage";
import { Link, useNavigate } from "react-router-dom";

const UILoginPage = ({ submitPage }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  let history = useNavigate();
  const customers =
    localStorage.getItem("CUSTOMERS") !== null
      ? JSON.parse(localStorage.getItem("CUSTOMERS"))
      : [];
  const { handleChange, names, uiErrors } = usePage(submitPage);
  return (
    <div className="uilogin">
      <div className="uiloginform">
        <b>Log In</b>
        <div>
          <div className="uiemail">
            <HiMail size={25} />
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={names.email}
              onChange={handleChange}
            />
            {uiErrors.username && <p>{uiErrors.username}</p>}
          </div>
          <div className="uipass">
            <RiLockPasswordFill size={25} />
            <input
              placeholder="Password"
              type={passwordShown ? "text" : "password"}
              name="password"
              value={names.password}
              onChange={handleChange}
            />
            {uiErrors.password && <p>{uiErrors.password}</p>}
            <button onClick={togglePassword} className="eye">
              {passwordShown ? (
                <AiFillEyeInvisible size={25} />
              ) : (
                <AiFillEye size={25} />
              )}
            </button>
          </div>
          <div className="remember">
            <input className="check" type="checkbox" />
            Remember Me
            <div className="forgot">
              <Link to="">Forgot Password?</Link>
            </div>
          </div>
          <div
            className="sign"
            onClick={() => {
              let nocustomer = true;
              Object.keys(customers).map((name) => {
                if (customers[name]["email"] === names.email) {
                  nocustomer = false;
                  console.log(customers[name]["password"], names.password);
                  if (customers[name]["password"] === names.password) {
                    alert("Log In Successful!");
                    history("/uisignedin");
                  } else alert("Wrong Password!");
                }
              });
              if (nocustomer) alert("User Does Not Exist!");
            }}
          >
            Sign In
          </div>
        </div>
      </div>
      <div className="kaylogin">
        <b>KAY VENTURES</b>
        <div className="paralogin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco loboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  );
};

export default UILoginPage;
