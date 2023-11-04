import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex scroll-smooth">
      {/* Gives the Sub Child According to Path */}
      <Outlet />
    </div>
  );
};

export default Body;
