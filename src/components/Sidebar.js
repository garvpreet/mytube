import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sideMenuIcons } from "../utils/SideMenuIcons";
import { closeMenu, setMenu } from "../utils/SideMenuSlice";

// Side Bar with Fixed Side Bar Items
const SideBar = () => {
  const dispatcher = useDispatch();
  // Subscribe to Store
  const isMenuOpen = useSelector((store) => store?.sideMenuSlice?.isMenuOpen);

  return !isMenuOpen ? (
    <></>
  ) : (
    <div className="p-5 pt-1 pr-3 shadow-lg  bg-white dark:bg-slate-800 dark:text-slate-300">
      <ul>
        {sideMenuIcons.map((icon, index) => (
          <Link
            key={icon.name + index}
            to={"/" + (icon.name != "Home" ? `search?q=${icon.name}` : "")}
          >
            <li className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600">
              {icon.key}
              <span className="px-4">{icon.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
