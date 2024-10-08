/** @format */

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.section)`
  padding-top: 140px;
  padding-bottom: 100px;
  padding-left: 170px;
  padding-right: 170px;
  margin: 0px auto;
  max-width: 1600px;
  min-height: 70vh;
  color: white;
  overflow: hidden;
  font-family: "Asap", sans-serif;
  @media only screen and (max-width: 450px) {
    padding-left: 23px;
    padding-right: 23px;
    min-height: auto;
    max-width: auto;
    padding-top: 50px;
    padding-bottom: 100px;
  }
`;

const Title = styled(motion.div)`
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding-bottom: 0.5em;
  @media only screen and (max-width: 450px) {
    height: 35px;
  }
`;

const TitleText = styled.h1`
  font-size: 28px;
  padding-right: 0.7em;
  padding-left: 1em;
  color: white;
  font-family: "Calibre", sans-serif;
  @media only screen and (max-width: 450px) {
    font-size: 22px;
  }
`;

const Line = styled.div`
  content: "";
  display: block;
  width: 70%;
  height: 0px;
  border-bottom: 0.5px solid #ffffff5e;
  @media only screen and (max-width: 450px) {
    width: 45%;
  }
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4em;
  @media only screen and (max-width: 450px) {
    padding-top: 1em;
  }
`;

const TextContainer = styled.div`
  width: 90%;
  text-align: center;
  line-height: 30px;
  svg {
    color: none;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
    padding: 0 1em;
  }
`;

const Text = styled.p`
  font-family: ui-monospace;
  margin: 0;
  padding-bottom: ${(props) => (props.space ? "1em" : "0")};
  font-size: 18px;
  text-align: justify;
  padding-left: 1em;
  @media only screen and (max-width: 450px) {
    padding: 0em;
    margin: 0em;
    font-size: 15px;
    text-align: center;
    line-height: 25px;
    letter-spacing: 1px;
    word-spacing: 4px;
  }
`;

const TextDecoration = styled.p`
  font-family: fantasy;
  font-family: Noteworthy;
  margin: 0;
  font-size: 18px;
  text-align: center;
  color: #ffffff9e;
  font-style: italic;
  @media only screen and (max-width: 450px) {
    padding: 0em;
    margin: 0em;
    font-size: 15px;
    text-align: center;
    line-height: 25px;
    letter-spacing: 1px;
    word-spacing: 4px;
  }
`;

const ParragraphDecoration = styled(TextDecoration)`
  padding: 0;
  padding-top: 5px;
  text-align: justify;
  @media only screen and (max-width: 450px) {
  }
`;

const About = ({ aboutRef }) => {
  return (
    <Container ref={aboutRef}>
      <Title>
        <TitleText>About Me</TitleText>
        <Line />
      </Title>
      <Body>
        <TextContainer>
          <Text>
            I'm an Experienced Software Engineer. Skilled in technologies like Angular, ASP.NET Core, 
            React, HTML, CSS, SCSS, Bootstrap, JavaScript, jQuery and Git.
            And also I'm a Software Developer who loves to build
            website and web applications to solve other people's problems. Experience of leading a
            team of professionals for small to medium sized projects. Highly
            interested in Automation frontier in software development. Strong
            information technology professional with a Bachelor Of Computer
            Application.
          </Text>
          <br />
          <Text>
            I enjoy creating things that live both on the internet and in
            reality, whether that be websites, web applications or
            anything in between. My goal is to always build
            products that provide pixel-perfect, user-friendly, security
            efficient, performant experiences. Shortly after I graduated, I had
            been overly engrossed in the Software Development and the vast amount of
            knowledge it holds.
          </Text>
          <br />
          <br />
{/*           <Text>
            I started by learning the basic principles of how computers are
            made, how they work and followed a lot of DIYs by occasionally
            visiting websites such as XDA Developers, Wired, The Verge,
            TechCrunch and Instructables. I loved the open-source community so I
            got into Web development, C programming and embedded systems, a few
            stacks I also worked with later on when I got into college include
            HTML & CSS, Sass, Java, JavaScript, C#.Net, Angular and
            WordPress. I've also been able to work on a variety of other
            interesting and meaningful projects daily.
          </Text>
          <br />
          <br /> */}
          <Text>
            I'm currently looking for new opportunities and I'm always open to
            new projects, ideas, job opportunities and new connections. I love
            building new stuff so just send me a message or call me and I will
            reply 100%.
          </Text>
        </TextContainer>
      </Body>
    </Container>
  );
};

export default About;
