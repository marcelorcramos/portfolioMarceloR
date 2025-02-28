import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import RoundOne from "./components/roundDesigns/RoundOne";
import RoundTwo from "./components/roundDesigns/RoundTwo";
import RoundThree from "./components/roundDesigns/RoundThree";
import RoundFour from "./components/roundDesigns/RoundFour";
import RoundFive from "./components/roundDesigns/RoundFive";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="w-full lgl:h-screen font-bodyfont overflow-hidden text-textColor bg-black relative">
        <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-10">
          <RoundOne />
          <RoundTwo />
          <RoundThree />
          <RoundFour />
          <RoundFive />
        </div>
      </div>
    </Router>
  );
}

export default App;