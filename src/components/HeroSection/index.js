import React, { useState } from "react";
import { Button } from "../ButtonElements";
import {
  HeroWrapper,
  HeroContainer,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
} from "./HeroElements";

const HeroSection = ({ setColorMode, darkMode }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroH1>rob campbell</HeroH1>
        <HeroP>
          Software Engineer & Creative Technologist based in NYC.
          <HeroBtnWrapper>
            <Button to="#" primary="true" dark="true" onClick={setColorMode}>
              {darkMode ? "LightMode" : "DarkMode"}
            </Button>
            <Button
              to="project-1"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Projects <ArrowForward />
            </Button>
          </HeroBtnWrapper>
        </HeroP>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroSection;
