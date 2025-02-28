import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">VEX APP</li>
        <li className="sidenavLi">Weather App</li>
        <li className="sidenavLi">Contact List</li>
        <li className="sidenavLi">Github Scraper</li>
        <li className="sidenavLi">Finance Control</li>
        <li className="sidenavLi">Projeto Centro De Saúde</li>
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