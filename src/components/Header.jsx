import React from "react";
import {NavLink } from "react-router-dom";
import './header.css'
function Header() {
  return (
    <div className="flex flex-row items-center w-full text-white justify-between p-3 bg-black fixed bg-transparent">
      <div>
        <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc142251c61c394c38cb19_Vancouver%20Logo.svg" alt="" />
      </div>
      <div className="text-xl hidden md:flex">
        <ul className="flex flex-row items-center p-4 gap-6">
          <li className="navlink">
            <NavLink className="navlinks" to="/home">Features</NavLink>
          </li>
          <li>
            <NavLink className="navlinks" to="/about">Pricing</NavLink>
          </li>
          <li>
            <NavLink className="navlinks" to="/help">Help</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-row gap-2 text-lg px-2 hidden md:flex">
        <button className="py-2 px-4 hover:text-slate-400">Sign in</button>
        <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-slate-400">Buy for $24</button>
      </div>
      <div className="md:hidden">
        menu
      </div>
    </div>
  );
}

export default Header;
