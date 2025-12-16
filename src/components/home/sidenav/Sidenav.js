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
      <a href="https://github.com/JoaoPiedade07/todoapp" target="_blank" rel="noopener noreferrer">
        Smart To Do App
      </a>
      </li>
      <li className="sidenavLi">
      <a href="https://github.com/marcelorcramos/TV-Show-Tracker" target="_blank" rel="noopener noreferrer">
        TV Show Tracker
      </a>
      </li>
      <li className="sidenavLi">
      <a href="https://github.com/marcelorcramos/VexApp" target="_blank" rel="noopener noreferrer">
        VEX APP
      </a>
      </li>
      <li className="sidenavLi">
      <a href="https://github.com/marcelorcramos/WeatherApp" target="_blank" rel="noopener noreferrer">
        Weather APP
      </a>
      </li>
      <li className="sidenavLi">
      <a href="https://github.com/marcelorcramos/FinanceControl-React.Js" target="_blank" rel="noopener noreferrer">
        Finance Control
      </a>
      </li>
      <li className="sidenavLi">
      <a href="https://github.com/marcelorcramos/ContactList-CRUD" target="_blank" rel="noopener noreferrer">
      Contact List (CRUD)
      </a>
      </li>
      <li className="sidenavLi">
      <a href="https://github.com/marcelorcramos/Github-Scraper-PY" target="_blank" rel="noopener noreferrer">
      Github Scraper
      </a>
      </li>
      <li className="sidenavLi">
      <a href="https://github.com/marcelorcramos/ProjetoCentroDeSaude" target="_blank" rel="noopener noreferrer">
      Health Center Project
      </a>
      </li>
      <li className="sidenavLi">
      <a href="https://github.com/marcelorcramos/ConsumoDeEnergia" target="_blank" rel="noopener noreferrer">
      Energy Consumption
      </a>
      </li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
      <li className="sidenavLi">
      <a href="https://www.marceloramos.pt" target="_blank" rel="noopener noreferrer">
      www.marceloramos.pt
      </a>
      </li>
        <li className="sidenavLi">+351 931 470 356</li>
        <li className="sidenavLi">marcelorcramos@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav