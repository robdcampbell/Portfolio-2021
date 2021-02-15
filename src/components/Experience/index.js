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
  ExperienceContainer,
  ExperienceHeader,
  ExperienceBody,
  ExperienceH2,
  ExperienceH3,
  ExperienceH4,
  ExperienceP,
  ExperienceCard,
  A,
  ExperienceInnerWrapper,
} from "./ExperienceElements";

const Experience = ({ darkMode }) => {
  return (
    <ExperienceContainer id="about">
      <ExperienceInnerWrapper>
        <ExperienceHeader>
          <ExperienceH2> Experience</ExperienceH2>
        </ExperienceHeader>
        <ExperienceBody>
          <ExperienceCard>
            <ExperienceH3>Systems Administrator</ExperienceH3>
            <ExperienceH4>
              2019-Present. School of Visual Arts: NYC, NEW YORK
            </ExperienceH4>
            <ExperienceP>
              I'm currently a Systems Administrator in the MFA Computer Arts
              program at the School of Visual Arts (SVA), working as part of a
              small team to oversee and maintain lab machines and servers, as
              well as the department's licensing of lab software.
            </ExperienceP>
            <ExperienceP>
              The role has meant using a wide-range of languages and
              technologies, routinely creating bash scripts, using MDM software
              (JAMF pro), and managing lab computers and peripheral equipment.
            </ExperienceP>
            <ExperienceP>
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
            </ExperienceP>
          </ExperienceCard>
          <div>
            <ExperienceCard>
              <ExperienceH3>Languages / Technologies:</ExperienceH3>
              <ExperienceP>
                <FaJsSquare style={{ fontSize: "2rem" }} />
                <strong>Javascript</strong>
              </ExperienceP>
              <ExperienceP>
                <FaReact style={{ fontSize: "2rem" }} />
                <strong> React.js/Redux</strong>
              </ExperienceP>
              <ExperienceP>
                <FaHtml5 style={{ fontSize: "2rem" }} />
                <strong> HTML</strong>
              </ExperienceP>
              <ExperienceP>
                <FaCss3Alt style={{ fontSize: "2rem" }} />
                <strong>CSS</strong>
              </ExperienceP>
              <ExperienceP>
                <FaNodeJs style={{ fontSize: "2rem" }} />{" "}
                <strong> Node.js</strong>
              </ExperienceP>
              <ExperienceP>
                <FaGitSquare style={{ fontSize: "2rem" }} />
                <strong>Git</strong>
              </ExperienceP>
              <ExperienceP>
                <SiFirebase style={{ fontSize: "1.5rem" }} />
                <strong> Firebase</strong>
              </ExperienceP>
              <ExperienceP>
                <DiMongodb style={{ fontSize: "1.5rem" }} />
                <strong> MongoDB</strong>
              </ExperienceP>
              <ExperienceP>
                <DiPostgresql style={{ fontSize: "1.5rem" }} />{" "}
                <strong> PostgreSQL</strong>
              </ExperienceP>
            </ExperienceCard>
          </div>
          <A
            className={darkMode ? " a__dark" : " a__light "}
            href="../images/Campbell_Rob_resume_2021.pdf"
            style={{ marginTop: "5rem", fontSize: "1.5rem" }}
            target="_blank"
          >
            Resumé.(clickHere)
          </A>
        </ExperienceBody>
      </ExperienceInnerWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
