import React from 'react'
import { Link } from 'react-router-dom';

import './menu.css';


const Menu: React.FC<{}> = () => {

  return (
      <div className="menu-container">
        <div className="header"></div>
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1"></div>
          <div className="spinner horizontal"></div>
          <div className="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
          <ul className="sidebarMenuInner">
          <li>Proposal Creator <span>Menu Options</span></li>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/settings">
            <li>Settings</li>
          </Link>
          <Link to="/calendar" >
            <li>Calendar</li>
          </Link>
          <Link to="/create-proposal" >
            <li>Create Proposal</li>
          </Link>
          </ul>
        </div>
      </div>
    )
}

export default Menu;