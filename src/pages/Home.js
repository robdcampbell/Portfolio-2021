import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import "./../App.css";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Services from "../components/About";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const setColorMode = () => {
    setDarkMode((current) => !current);
  };

  return (
    <div className={darkMode ? "global dark__mode" : "global light__mode"}>
      <div className="wrapper">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar
          toggle={toggle}
          darkMode={darkMode}
          setColorMode={setColorMode}
        />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjFour} />
        <InfoSection {...homeObjFive} />
        <Experience />
        <Services />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
