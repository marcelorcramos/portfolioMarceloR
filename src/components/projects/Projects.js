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
  ConsumoEnergia
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
            category="Android App (SQLITE & Firebase)"
            image={Crud}
            link="https://github.com/marcelorcramos/ContactList-CRUD"
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Finance Control"
            category="React.js Website"
            image={Finance}
            link="https://github.com/marcelorcramos/FinanceControl-React.Js"
          />
          <ProjectsCard
            title="Github Scraper"
            category="Gui Python"
            image={scraper}
            link="https://github.com/marcelorcramos/Github-Scraper-PY"
          />
          <ProjectsCard
            title="Projeto Centro De Saúde"
            category="Website"
            image={CentroSaude}
            link="https://github.com/marcelorcramos/ProjetoCentroDeSaude"
          />
          <ProjectsCard
            title="Consumo de Energia"
            category="Website Responsivo"
            image={ConsumoEnergia}
            link="https://github.com/marcelorcramos/ConsumoDeEnergia"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
