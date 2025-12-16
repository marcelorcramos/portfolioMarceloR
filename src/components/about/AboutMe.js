import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm  Marcelo Ramos</h2>
          <p className="text-base leading-6 ">
          Brazilian-Portuguese Software Developer currently based in Lisbon. With a background in backend, I am proficient in technologies such as C#, Python, and Java, and on the frontend, I have a strong affinity for React and TypeScript. My experience spans various databases, both relational (SQL Server, SQLite) and NoSQL (MongoDB, Firebase). I am currently complementing my industry work with specialized studies in Mobile Device Development at ISTEC Lisbon.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            21
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Portugal
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Lisbon, PT
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
