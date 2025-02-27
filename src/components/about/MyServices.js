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
        title="Mobile Application"
        subTitle="With strong expertise in mobile programming, I master the three main languages in the field: Kotlin, Java, and Swift.
         My projects are complete and well-structured, demonstrating my ability to develop robust and functional applications, ensuring efficiency and innovation in every development. "
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Full-Stack Web Development"
        subTitle="I have been studying Full Stack Web Development for four years, gaining solid knowledge in JavaScript, React, and Python, always combined with HTML 
        and CSS to create complete and efficient web applications. My public projects showcase my ability to develop well-structured and functional solutions, both on the 
        front-end and back-end, ensuring high performance and a great user experience."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="DataBase Management"
        subTitle="I have extensive experience with databases, having worked with various technologies such as MySQL, SQL Server, 
        SQLite, Firebase, and MongoDB. All my large projects are structured with robust databases, ensuring efficiency and scalability. 
        Additionally, I have worked at a company where my role was heavily focused on database management and optimization, further 
        enhancing my skills in this area."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="API'S"
        subTitle="One of the things I enjoy most in development is connecting the front-end with the back-end, and using APIs 
        for that is simply amazing. I am highly familiar with APIs and have used them in several large-scale projects, ensuring 
        efficient and well-structured integrations to create dynamic and scalable applications."
      />
    </div>
  );
};

export default MyServices;
