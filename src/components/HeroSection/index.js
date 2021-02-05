import React, { useState } from "react";
import Image from "../../images/sao_paulo.jpg";
import { Button } from "../ButtonElements";
import { animateScroll as scroll } from "react-scroll";
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
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
      <HeroBg>{/* <ImgBg src={Image} alt="gridBackground"></ImgBg> */}</HeroBg>
      <HeroContent>
        <HeroH1>rob campbell</HeroH1>
        <HeroP>
          web development & creative technology.
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
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
