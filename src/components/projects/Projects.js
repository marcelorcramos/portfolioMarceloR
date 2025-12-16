import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
  VexApp,
  WeatherApp,
  FinanceControl,
  Finance,
  Weather,
  chargerapp,
  Crud,
  Scraper,
  scraper,
  CentroSaude,
  ConsumoEnergia,
  tvshowtracker,
  smarttodoapp
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
        <ProjectsCard
            title="Smart To Do App"
            category="Typescript + React.js Kanban Board"
            image={smarttodoapp}
            link="https://github.com/JoaoPiedade07/todoapp"
          />
        <ProjectsCard
            title="TV Show Tracker"
            category="API builded with .NET + Fullstack WebApp"
            image={tvshowtracker}
            link="https://github.com/marcelorcramos/TV-Show-Tracker"
          />
          <ProjectsCard
            title="VEX APP"
            category="Kotloin Android App (GoogleMaps API)"
            image={chargerapp}
            link="https://github.com/marcelorcramos/VexApp"
          />
          <ProjectsCard
            title="Weather App"
            category="iOS App (OpenWeatherApi)"
            image={Weather}
            link="https://github.com/marcelorcramos/WeatherApp"
          />
          <ProjectsCard
            title="Contact List (CRUD)"
            category="Java Android App"
            image={Crud}
            link="https://github.com/marcelorcramos/ContactList-CRUD"
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Finance Control"
            category="React.js Web App"
            image={Finance}
            link="https://github.com/marcelorcramos/FinanceControl-React.Js"
          />
          <ProjectsCard
            title="Github Scraper"
            category="Gui + Python"
            image={scraper}
            link="https://github.com/marcelorcramos/Github-Scraper-PY"
          />
          <ProjectsCard
            title="Health Center Project"
            category="LocalStorage Js Website"
            image={CentroSaude}
            link="https://github.com/marcelorcramos/ProjetoCentroDeSaude"
          />
          <ProjectsCard
            title="Energy Consumption"
            category="Web App"
            image={ConsumoEnergia}
            link="https://github.com/marcelorcramos/ConsumoDeEnergia"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
