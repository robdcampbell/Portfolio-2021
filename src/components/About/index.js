import React from "react";

import {
  AboutContainer,
  AboutInnerWrapper,
  AboutHeader,
  AboutH2,
  AboutH3,
  AboutBody,
  AboutP,
  Img,
  ImgWrap,
  AboutCard,
} from "./AboutElements";

const About = () => {
  return (
    <AboutContainer id="about-me">
      <AboutInnerWrapper>
        <AboutHeader>
          <AboutH2> ABOUT ME </AboutH2>
        </AboutHeader>
        <AboutBody>
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
                <strong>MFA: School of Visual Arts.</strong> New York, NY
              </AboutP>
              <AboutP style={{ paddingBottom: ".5rem" }}>
                <strong> BFA: Northern Michigan University.</strong> Marquette,
                MI
              </AboutP>
              <AboutH3>BEYOND</AboutH3>
              <AboutP style={{ paddingBottom: ".5rem" }}>
                After studying fine art and design in undergraduate and graduate
                school, I combined my interest and knowledge of technology &
                design into creative technology web development.
              </AboutP>
              <AboutP style={{ paddingBottom: ".5rem" }}>
                I'm a life-learner, and for the most part self-taught coder.
                Aside from technology, I love learning about languages and art.
              </AboutP>
              <AboutP>
                Natively I speak English, I'm fluent in Portuguese (Brazilian)
                and speak basic conversational Spanish. I spend most of my days
                running, playing Legos with my daughter, and biking through the
                streets of Brooklyn/NYC.
              </AboutP>
              <AboutP style={{ paddingBottom: ".5rem" }}></AboutP>
            </AboutCard>
          </div>
        </AboutBody>
      </AboutInnerWrapper>
    </AboutContainer>
  );
};

export default About;
