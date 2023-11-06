import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex scroll-smooth">
      <SideBar />
      {/* Gives the Sub Child According to Path */}
      <Outlet />
    </div>
  );
};

export default Body;
