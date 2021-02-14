import React from "react";

import {
  AboutContainer,
  AboutHeader,
  AboutH2,
  AboutH3,
  AboutWrapper,
  AboutP,
  Img,
  ImgWrap,
  AboutCard,
} from "./AboutElements";

const About = () => {
  return (
    <AboutContainer id="about-me">
      <AboutHeader>
        <AboutH2> ABOUT ME </AboutH2>
      </AboutHeader>
      <AboutWrapper>
        <ImgWrap>
          <Img
            src="../../images/profilePic.jpg"
            alt="Rob Campbell Profile Pic"
          />
        </ImgWrap>
        <div>
          <AboutCard>
            <AboutH3>EDUCATION</AboutH3>
            <AboutP>
              <strong>MFA: School of Visual Arts</strong> _ New York, NY
            </AboutP>
            <AboutP>
              <strong> BFA: Northern Michigan University</strong> _ Marquette,
              MI
            </AboutP>
            <AboutP> Michigan / New York</AboutP>
            <AboutP>
              I'm a life-learner, and for the most part self-taught coder. Aside
              from technology, I love learning about languages and art.
            </AboutP>
            <AboutP>
              I spend most of my days running, playing Legos with my daughter,
              and biking through the streets of Brooklyn/NYC.
            </AboutP>
          </AboutCard>
        </div>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
