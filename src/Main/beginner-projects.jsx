/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github } from "@styled-icons/boxicons-logos";
import { ExternalLinkOutline } from "@styled-icons/evaicons-outline";
import TicTacToe from "../assets/tictaktoe.png";
import TaskListApp from "../assets/task-list.png";
import Covid19 from "../assets/covid19.png";
import Weather from "../assets/weather.png";
import Portfolio1 from "../assets/demo.png";
import Portfolio from "../assets/demo1.png";

const Container = styled(motion.div)`
  width: 100%;
  color: white;
  overflow: hidden;
  padding-top: 2em;
  font-family: "Asap", sans-serif;
  @media only screen and (max-width: 450px) {
    padding-top: 1em;
  }
`;

const CardRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 1em 0;
  @media only screen and (max-width: 450px) {
    display: block;
    padding: 0;
  }
`;

const Card = styled(motion.div)`
  position: relative;
  height: 380px;
  width: 400px;
  border-radius: 5px;
  padding: 15px;
  background: #ffffff14;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
  @media only screen and (max-width: 450px) {
    width: auto;
    margin: 2em 0;
    padding: 10px 15px;
    height: 400px;
  }
`;

const ImgContainer = styled.div`
  height: 210px;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding-right: 15px;
  padding-bottom: 15px;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Button = styled(motion.div)`
  padding: 0.5em;
  cursor: pointer;
  svg {
    width: 30px;
  }
`;

const Img = styled.img`
  border-radius: 5px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  padding-left: 1em;
  padding-top: 1em;
  @media only screen and (max-width: 450px) {
    padding: 0.7em 0;
  }
`;

const Title = styled.h4`
	font-size: 22px;
	margin: 0;
	padding: 0;
	color: #ffc200;
	font-family: 'Calibre', sans-serif;
	@media only screen and (max-width: 450px) {
	font-size: 20px;
`;

const Explanation = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
  margin: 0;
  padding: 0;
  padding: 10px 0;
  font-family: "Calibre", sans-serif;
  @media only screen and (max-width: 450px) {
    padding-bottom: 15px;
    font-size: 16px;
  }
`;

const Technology = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const TechItems = styled.span`
  padding-right: 5px;
  padding-top: 0px;
  font-size: 16px;
  color: #ffffffbf;
  @media only screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

const Hastag = styled.span`
  color: #ffc200;
`;

const Link = ({ githubLink, externalLink }) => {
  return (
    <LinkContainer>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <Button
          whileHover={{ y: [0, -8, 0], color: "#ffc200" }}
          transition={{ duration: 0.5 }}
        >
          <Github />
        </Button>
      </a>
      <a href={externalLink} target="_blank" rel="noopener noreferrer">
        <Button
          whileHover={{ y: [0, -8, 0], color: "#ffc200" }}
          transition={{ duration: 0.5 }}
        >
          <ExternalLinkOutline />
        </Button>
      </a>
    </LinkContainer>
  );
};

const BeginnerProjects = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <CardRow>
        <Card>
          <Link githubLink="" externalLink="" />

          <ImgContainer>
            <Img src={Portfolio} alt="portfolio" />
          </ImgContainer>
          <TextContainer>
            <Title>Portfolio</Title>
            <Explanation>
              My Portfolio website created using React and deployed on Netlify
            </Explanation>
            <Technology>
              <TechItems>
                <Hastag>#</Hastag>React
              </TechItems>
              <TechItems>
                <Hastag>#</Hastag>CSS
              </TechItems>
              <TechItems>
                <Hastag>#</Hastag>JavaScript
              </TechItems>
            </Technology>
            <Technology>
              <TechItems>
                <Hastag>#</Hastag>HTML
              </TechItems>
              <TechItems>
                <Hastag>#</Hastag>VSCode
              </TechItems>
            </Technology>
          </TextContainer>
        </Card>
        <Card>
          <Link
            githubLink="https://github.com/Meghrup07/meghshyam"
            externalLink="https://meghrup07.github.io/meghshyam/"
          />
          <ImgContainer>
            <Img src={Portfolio1} alt="Portfolio1" />
          </ImgContainer>
          <TextContainer>
            <Title>Simple Portfolio Website</Title>
            <Explanation>
              Created a simple Portfolio website using HTML and CSS.
            </Explanation>
            <Technology>
              <TechItems>
                <Hastag>#</Hastag>HTML
              </TechItems>
              <TechItems>
                <Hastag>#</Hastag>CSS
              </TechItems>
              <TechItems>
                <Hastag>#</Hastag>JavaScript
              </TechItems>
            </Technology>
          </TextContainer>
        </Card>
      </CardRow>
      <CardRow>
        <Card>
          <Link
            githubLink="https://github.com/Meghrup07/Task-List-App"
            externalLink="https://meghrup07.github.io/Task-List-App/"
          />
          <ImgContainer>
            <Img src={TaskListApp} alt="TaskListApp" />
          </ImgContainer>
          <TextContainer>
            <Title>Task-List App</Title>
            <Explanation>Simple TO-DO App using Angular</Explanation>
            <Technology>
              <TechItems>
                <Hastag>#</Hastag>HTML & CSS
              </TechItems>
              <TechItems>
                <Hastag>#</Hastag>Angular
              </TechItems>
            </Technology>
          </TextContainer>
        </Card>
        <Card>
          <Link
            githubLink="https://github.com/Meghrup07/WeatherApp"
            externalLink="https://meghrup07.github.io/WeatherApp/"
          />
          <ImgContainer>
            <Img src={Weather} alt="weather" />
          </ImgContainer>
          <TextContainer>
            <Title>Weather</Title>
            <Explanation>Weather App in Angular</Explanation>
            <Technology>
              <TechItems>
                <Hastag>#</Hastag>HTML
              </TechItems>
              <TechItems>
                <Hastag>#</Hastag>Angular
              </TechItems>
              <TechItems>
                <Hastag>#</Hastag>JavaScript
              </TechItems>
              <TechItems>
                <Hastag>#</Hastag>Api
              </TechItems>
            </Technology>
          </TextContainer>
        </Card>
      </CardRow>
      <CardRow>
        <Card>
          <Link
            githubLink="https://github.com/Meghrup07/Covid19-Cases-Track-Website"
            externalLink="https://meghrup07.github.io/Covid19-Cases-Track-Website/"
          />
          <ImgContainer>
            <Img src={Covid19} alt="Covid19-Cases" />
          </ImgContainer>
          <TextContainer>
            <Title>Covid19 Cases Track Website</Title>
            <Explanation>
              Created simple dashboard for tracking Covid19 cases using Angular
            </Explanation>
            <Technology>
              <TechItems>
                <Hastag>#</Hastag>HTML
              </TechItems>
              <TechItems>
                <Hastag>#</Hastag>JavaScript
              </TechItems>
              <TechItems>
                <Hastag>#</Hastag>Angular
              </TechItems>
            </Technology>
          </TextContainer>
        </Card>
        <Card>
          <Link
            githubLink="https://github.com/Meghrup07/angular-tic-tac-toe"
            externalLink="https://meghrup07.github.io/angular-tic-tac-toe/"
          />
          <ImgContainer>
            <Img src={TicTacToe} alt="TicTacToe" />
          </ImgContainer>
          <TextContainer>
            <Title>Tic-Tac-Toe</Title>
            <Explanation>Simple Tic-Tac-Toe Game</Explanation>
            <Technology>
              <TechItems>
                <Hastag>#</Hastag>HTML & CSS
              </TechItems>
              <TechItems>
                <Hastag>#</Hastag>JavaScript
              </TechItems>
              <TechItems>
                <Hastag>#</Hastag>Angular
              </TechItems>
            </Technology>
          </TextContainer>
        </Card>
      </CardRow>
    </Container>
  );
};

export default BeginnerProjects;
