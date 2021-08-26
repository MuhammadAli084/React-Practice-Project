import React from "react";
import "./SignBtn.css";
import { Link } from "react-router-dom";

const SignBtn = ({title,link}) => {
  return (
    <>
      <div className="signup-btn">
        <span>New here? </span>
        <Link to={link}>{title}</Link>
      </div>
    </>
  );
};

export default SignBtn;
