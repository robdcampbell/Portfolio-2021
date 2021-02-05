import React from "react";
import { Button } from "../ButtonElements";
import { ButtonE } from "../ButtonExternalElements";
// HAVE TO IMPORT IMAGES THIS WAY
import Image1 from "../../images/svg-1.svg";
import Landing from "../../images/portfolio_landing.png";
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
  primary,
  dark,
  dark2,
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
                <BtnWrap>
                  {buttonLabel && (
                    <ButtonE
                      to="home"
                      smooth={true}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 0 : 1}
                      dark2={dark2 ? 0 : 1}
                      href={projectUrl}
                      target="_blank"
                    >
                      {buttonLabel}
                    </ButtonE>
                  )}
                  <ButtonE
                    to="home"
                    smooth={true}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 0 : 1}
                    dark2={dark2 ? 0 : 1}
                    href={codeUrl}
                    target="_blank"
                  >
                    {buttonLabel2}
                  </ButtonE>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <a href={projectUrl} target="_blank">
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
