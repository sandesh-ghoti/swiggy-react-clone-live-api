import React from "react";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="font-bold">
      <img
        src={logo}
        alt="logo"
        className="h-16 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      ></img>
      Header
    </div>
  );
};

export default Header;
