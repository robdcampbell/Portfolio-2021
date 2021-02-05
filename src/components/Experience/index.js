import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaGitSquare,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";

import { SiFirebase } from "react-icons/si";
import { DiPostgresql, DiMongodb } from "react-icons/di";
import {
  AboutContainer,
  AboutH1,
  AboutH2,
  AboutH3,
  AboutH4,
  AboutWrapper,
  AboutP,
  Img,
  ImgWrap,
  AboutCard,
  A,
} from "./ExperienceElements";

const Experience = () => {
  return (
    <AboutContainer id="about">
      <AboutH1> Experience</AboutH1>
      <AboutWrapper>
        <AboutCard>
          <AboutH2>Systems Administrator</AboutH2>
          <AboutH4>
            <strong> Currently:</strong>
          </AboutH4>
          <AboutP>
            <strong>2019-Present.</strong>
            SVA New York, NY
          </AboutP>

          <AboutP>
            I'm currently a Systems Administrator in the MFA Computer Arts
            program at the School of Visual Arts (SVA), working as part of a
            small team to oversee and maintain lab machines and servers, as well
            as the department's licensing of lab software.
          </AboutP>
          <AboutP>
            The role has meant using a wide-range of languages and technologies,
            routinely creating bash scripts, using MDM software (JAMF pro), and
            managing lab computers and peripheral equipment.
          </AboutP>
          <AboutP>
            See more of my professional experience on:
            <strong>
              <A
                href="https://www.linkedin.com/in/rob-campbell-a6354a75/"
                target="_blank"
              >
                LinkedIn.
              </A>
            </strong>
          </AboutP>
        </AboutCard>
        <div>
          <AboutCard>
            <AboutH2>Languages / Technologies:</AboutH2>
            <AboutP>
              <FaJsSquare style={{ fontSize: "2rem" }} />
              <strong>Javascript</strong>
            </AboutP>
            <AboutP>
              <FaReact style={{ fontSize: "2rem" }} />
              <strong> React.js/Redux</strong>
            </AboutP>
            <AboutP>
              <FaNodeJs style={{ fontSize: "2rem" }} />{" "}
              <strong> Node.js</strong>
            </AboutP>
            <AboutP>
              <SiFirebase style={{ fontSize: "1.5rem" }} />
              <strong> Firebase</strong>
            </AboutP>
            <AboutP>
              <DiMongodb style={{ fontSize: "1.5rem" }} />
              <strong> MongoDB</strong>
            </AboutP>
            <AboutP>
              <DiPostgresql style={{ fontSize: "1.5rem" }} />{" "}
              <strong> PostgreSQL</strong>
            </AboutP>
            <AboutP>
              <FaGitSquare style={{ fontSize: "2rem" }} />
              <strong>Git</strong>
            </AboutP>
            <AboutP>
              <FaHtml5 style={{ fontSize: "2rem" }} />
              <strong> HTML</strong>
            </AboutP>
            <AboutP>
              <FaCss3Alt style={{ fontSize: "2rem" }} />
              <strong>CSS</strong>
            </AboutP>
          </AboutCard>
        </div>
        <A
          href="../images/Campbell_Rob_resume_2021.pdf"
          style={{ marginTop: "5rem", fontSize: "1.5rem" }}
          target="_blank"
        >
          Click here for my Resumé.
        </A>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default Experience;
