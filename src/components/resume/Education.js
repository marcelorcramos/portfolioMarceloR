import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Programming Teacher"
          subTitle="Happy Code"
          des="I currently work as a programming teacher for young talents. It's a part-time job."
        />
        <ResumeCard
          badge="2023"
          title="Store Manager"
          subTitle="MicroCaos"
          des="I was at MicroCaos as a store manager, where I learned a lot about Database."
        />
        <ResumeCard
          badge="2022 - 2023"
          title="Monday.com operator"
          subTitle="Goal Prime"
          des="I was responsible for introducing the Monday.com platform to the company Goal Prime, I worked with them for a year as a Free Lancer."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2024 - 2026"
          title="Instituto Superior de Tecnologias Avançadas de Lisboa"
          subTitle="CTeSP APP Development"
          des="I'm currently at ISTEC, on the App Development course."
        />
        
        <ResumeCard
          badge="2021 - 2023"
          title="Escola Secundária Rainha Dona Leonor"
          subTitle="Secondary vocational education, IT technician and systems"
          des="I finished my secondary education at AERDL, on the technical professional course in IT and systems"
        />
        <ResumeCard
          badge="2012 - 2020"
          title="CNA BRAZIL"
          subTitle="English Course"
          des="After 8 years I finished the English language course at CNA BRAZIL"
        />
      </div>
    </div>
  );
};

export default Education;
