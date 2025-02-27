import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="More than 7 code languages." />
      <FunFactCard icon={<SiAntdesign />} des="10 Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="APP/Web/
      API/DataBase" />
      <FunFactCard icon={<IoLogoYoutube />} des="" />
    </div>
  );
};

export default FunFact;
