import React from 'react'
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css';

function Siderbar() {
    return (
        <Menu>
      <a className="menu-item" href="/">Google search</a>
      <a className="menu-item" href="/salads">Youtube Search</a>
      <a className="menu-item" href="/pizzas">Bing Search</a>
      <a className="menu-item" href="/desserts">SoundCloud</a>
    </Menu>
    )
}

export default Siderbar
