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
            title="VEX APP"
            category="Android App (GoogleMaps API)"
            image={chargerapp}
          />
          <ProjectsCard
            title="Weather App"
            category="iOS App (OpenWeatherApi)"
            image={Weather}
          />
          <ProjectsCard
            title="Contact List (CRUD)"
            category="Android App (SQLITE & Firebase)"
            image={Crud}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Finance Control"
            category="React.js Website"
            image={Finance}
          />
          <ProjectsCard
            title="Github Scraper"
            category="Gui Python"
            image={scraper}
          />
          <ProjectsCard
            title="Projeto Centro De Saúde"
            category="Website"
            image={workImgEight}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
