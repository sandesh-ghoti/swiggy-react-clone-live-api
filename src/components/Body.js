import React from "react";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div>
      Body
      <Outlet />
    </div>
  );
};

export default Body;
