import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subcomponents/LogoComponent";
import SocialIcons from "../subcomponents/Socialicons";
import PowerButton from "../subcomponents/PowerButton";
import ParticleComponent from "../subcomponents/ParticleComponent";
import BigTitle from "../subcomponents/BigTitle";

import astronut from "../assets/Images/spaceman.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1rem);
  backdrop-filter: blur(4px);
  position : absolute;
  left : calc(5rem + 5vw);
  top:10rem;
  font-family:'Ubuntu Mono', monospace;
  font-style: italic;
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronut} alt="Spaceman" />
        </Spaceman>
        <Main>
        I'am 3rd year engineering student pursuing bachelor's degree in Computer Science at Manglore Institution of Technology and Engineering.<br/><br/> I'am passionate about Web Developement and Cloud services and I am quiet good at data structures and algorithms and want to provide eficient software solutions to real life problems
          <br /> <br />I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
