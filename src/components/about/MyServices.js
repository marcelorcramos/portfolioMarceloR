import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Backend Development & APIs"
        subTitle="One of the things I enjoy most in development is designing and building the core logic that powers applications. 
        Working with backend technologies like C#, Java, and Python to create robust and scalable systems is where I thrive. 
        I’m highly familiar with developing and consuming RESTful APIs, ensuring they are efficient, well-documented, and secure, enabling seamless communication between different parts of an application."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Full-Stack Web Development"
        subTitle="I truly enjoy bridging the gap between user interface and server logic. 
        Using React with TypeScript on the frontend allows me to build dynamic, type-safe interfaces, while my backend 
        expertise enables me to create the APIs and services that power them. This full-cycle perspective helps me build cohesive, 
          efficient, and maintainable web applications from start to finish."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Database Engineering"
        subTitle="I find great satisfaction in structuring and managing the data layer of applications.
         Whether it’s designing relational schemas for SQL Server or modeling flexible documents for MongoDB, 
         I focus on performance, scalability, and data integrity. I enjoy optimizing queries, ensuring efficient data 
         flow, and choosing the right database technology to fit the project's specific needs."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Mobile Solution Development"
        subTitle="Extending backend logic to create seamless user experiences on mobile devices is a challenging and rewarding 
        area for me. I appreciate the process of adapting application core services for mobile platforms, ensuring consistency, 
        performance, and a native-feeling experience. My ongoing studies in mobile development complement my backend skills, allowing
         me to think in terms of multi-platform solutions."
      />
    </div>
  );
};

export default MyServices;
