import React from "react";
//Add styling for active state with NavLink
import { NavLink, BrowserRouter } from "react-router";

const NavBar: React.FC<{}> = () => {
  return (
    <div className="mt-5 border-b-2 border-[#a08af7] text-[#d7e6fb] flex justify-between">
      <div className="p-2 flex border-[#a08af7]">
        <div className=" bg-[#a08af7] rounded-full h-3 w-3 m-1"></div>
        <div className=" bg-[#a08af7] rounded-full h-3 w-3 m-1"></div>
        <div className=" bg-[#a08af7] rounded-full h-3 w-3 m-1"></div>
      </div>
      <div className="p-2">
        <BrowserRouter>
          <NavLink className="p-2" to={"/about"}>
            About
          </NavLink>
          <NavLink className="p-2" to={"/experience"}>
            Experience
          </NavLink>
          <NavLink className="p-2" to={"/projects"}>
            Projects
          </NavLink>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default NavBar;
