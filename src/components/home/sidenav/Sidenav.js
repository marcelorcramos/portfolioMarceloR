import React from 'react'
import SidenavTitle from './SidenavTitle';
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
        <SidenavTitle title="P" subTitle="rojects" />
      <ul>
      <li className="sidenavLi">
      <a href="https://github.com/marcelorcramos/VexApp" target="_blank" rel="noopener noreferrer">
        VEX APP
      </a>
      </li>
      <li className="sidenavLi">
      <a href="https://github.com/marcelorcramos/VexApp" target="_blank" rel="noopener noreferrer">
        Weather APP
      </a>
      </li>
      <li className="sidenavLi">
      <a href="https://github.com/marcelorcramos/VexApp" target="_blank" rel="noopener noreferrer">
        Finance Control
      </a>
      </li>
      <li className="sidenavLi">
      <a href="https://github.com/marcelorcramos/VexApp" target="_blank" rel="noopener noreferrer">
        VEX APP
      </a>
      </li>
      <li className="sidenavLi">
      <a href="https://github.com/marcelorcramos/VexApp" target="_blank" rel="noopener noreferrer">
        VEX APP
      </a>
      </li>
      <li className="sidenavLi">
      <a href="https://github.com/marcelorcramos/VexApp" target="_blank" rel="noopener noreferrer">
        VEX APP
      </a>
      </li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+351 *** *** ***</li>
        <li className="sidenavLi">marcelorcramos@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav