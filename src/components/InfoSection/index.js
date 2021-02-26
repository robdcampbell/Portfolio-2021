import React from "react";
// import { Button } from "../ButtonElements";
import { ButtonE } from "../ButtonExternalElements";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Technologies,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  buttonLabel2,
  img,
  alt,
  codeUrl,
  projectUrl,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <h4>Built using:</h4>
                <Technologies>this is a test</Technologies>
                <BtnWrap>
                  {buttonLabel && (
                    <ButtonE
                      to="#"
                      offset={-80}
                      primary="true"
                      dark="true"
                      href={projectUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {buttonLabel}
                    </ButtonE>
                  )}
                  <ButtonE
                    to="#"
                    offset={-80}
                    primary="true"
                    dark="true"
                    href={codeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {buttonLabel2}
                  </ButtonE>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <a href={projectUrl} target="_blank" rel="noreferrer">
                  <Img src={img} alt={alt} />
                </a>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
