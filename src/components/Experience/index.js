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
  AboutHeader,
  AboutBody,
  AboutH2,
  AboutH3,
  AboutH4,
  AboutP,
  AboutCard,
  A,
} from "./ExperienceElements";

const Experience = ({ darkMode }) => {
  return (
    <AboutContainer id="about">
      <AboutHeader>
        <AboutH2> Experience</AboutH2>
      </AboutHeader>
      <AboutBody>
        <AboutCard>
          <AboutH3>Systems Administrator</AboutH3>
          <AboutH4>2019-Present. School of Visual Arts: NYC, NEW YORK</AboutH4>
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
                className={darkMode ? " a__dark" : " a__light "}
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
            <AboutH3>Languages / Technologies:</AboutH3>
            <AboutP>
              <FaJsSquare style={{ fontSize: "2rem" }} />
              <strong>Javascript</strong>
            </AboutP>
            <AboutP>
              <FaReact style={{ fontSize: "2rem" }} />
              <strong> React.js/Redux</strong>
            </AboutP>
            <AboutP>
              <FaHtml5 style={{ fontSize: "2rem" }} />
              <strong> HTML</strong>
            </AboutP>
            <AboutP>
              <FaCss3Alt style={{ fontSize: "2rem" }} />
              <strong>CSS</strong>
            </AboutP>
            <AboutP>
              <FaNodeJs style={{ fontSize: "2rem" }} />{" "}
              <strong> Node.js</strong>
            </AboutP>
            <AboutP>
              <FaGitSquare style={{ fontSize: "2rem" }} />
              <strong>Git</strong>
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
          </AboutCard>
        </div>
        <A
          className={darkMode ? " a__dark" : " a__light "}
          href="../images/Campbell_Rob_resume_2021.pdf"
          style={{ marginTop: "5rem", fontSize: "1.5rem" }}
          target="_blank"
        >
          Resumé.(clickHere)
        </A>
      </AboutBody>
    </AboutContainer>
  );
};

export default Experience;
