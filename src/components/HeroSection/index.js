import React, { useState } from "react";
import Image from "../../images/sao_paulo.jpg";
import { Button } from "../ButtonElements";
import { animateScroll as scroll } from "react-scroll";
import {
  HeroContainer,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroH1>rob campbell</HeroH1>
      <HeroP>
        Web Developer & Creative Technologist based in NYC.
        <HeroBtnWrapper>
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
            Projects {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroP>
    </HeroContainer>
  );
};

export default HeroSection;
