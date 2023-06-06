/** @format */
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ExternalLinkOutline } from "@styled-icons/evaicons-outline";
import Git from "../assets/Git.png";
import Angular from "../assets/Angular.png";
import JavaScript from "../assets/javascript.png";
import Java from "../assets/java.png";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import React1 from "../assets/React.png";
import Front from "../assets/project.jpg";

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
  font-family: "Calibre", sans-serif;
  @media only screen and (max-width: 450px) {
    font-size: 20px;
  }
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
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonShow = styled(motion.button)`
  margin-top: 2em;
  padding: 0.7em 1em;
  font-size: 14px;
  font-weight: 600;
  color: #1f1f1f;
  font-family: "Calibre", sans-serif;
  cursor: pointer;
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

const Link = ({ externalLink }) => {
  return (
    <LinkContainer>
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
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => setShowMore(true);
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <CardRow>
        <Card>
          <Link externalLink="https://www.coursera.org/account/accomplishments/certificate/ZJX94PAS25GK" />
          <ImgContainer>
            <Img src={HTML} alt="HTML" />
          </ImgContainer>
          <TextContainer>
            <Title>Introduction to HTML5</Title>
            <Explanation>issued by Coursera</Explanation>
          </TextContainer>
        </Card>
        <Card>
          <Link externalLink="https://www.coursera.org/account/accomplishments/certificate/JVWEWT8MFQQ2" />
          <ImgContainer>
            <Img src={CSS} alt="CSS" />
          </ImgContainer>
          <TextContainer>
            <Title>Introduction to CSS3</Title>
            <Explanation>issued by Coursera</Explanation>
          </TextContainer>
        </Card>
      </CardRow>
      <CardRow>
       <Card>
              <Link externalLink="https://drive.google.com/file/d/1J_Q3adcxIaN4UoGCJB5ffK-MC5gRb2hg/view" />
              <ImgContainer>
                <Img src={Angular} alt="Angular" />
              </ImgContainer>
              <TextContainer>
                <Title>Angular Essential Training</Title>
                <Explanation>issued by LinkedIn Learning</Explanation>
              </TextContainer>
            </Card>
          <Card>
          <Link externalLink="https://www.coursera.org/account/accomplishments/certificate/6G95CRS8HSW9" />
          <ImgContainer>
            <Img src={Front} alt="WebDevelopment" />
          </ImgContainer>
          <TextContainer>
            <Title>Front-End JavaScript Frameworks: Angular</Title>
            <Explanation>issued by Coursera</Explanation>
          </TextContainer>
        </Card>
      
      </CardRow>
      <CardRow>
        <Card>
          <Link externalLink="https://meghshyam.netlify.app/" />
          <ImgContainer>
            <Img src={Front} alt="WebDevelopment" />
          </ImgContainer>
          <TextContainer>
            <Title>The Complete 2021 Web Development Bootcamp</Title>
            <Explanation>issued by Udemy</Explanation>
          </TextContainer>
        </Card>
        <Card>
          <Link externalLink="https://www.udemy.com/certificate/UC-7f419f22-ae4d-48e2-80d2-bdd4c9a1e6ed/" />
          <ImgContainer>
            <Img src={JavaScript} alt="Angular" />
          </ImgContainer>
          <TextContainer>
            <Title>
              Complete Javascript Course for Beginners with jQuery & AJAX
            </Title>
            <Explanation>issued by Udemy</Explanation>
          </TextContainer>
        </Card>
      </CardRow>
      {!showMore && (
        <ButtonContainer>
          <ButtonShow
            whileHover={{ y: [0, -8, 0] }}
            transition={{ duration: 0.5 }}
            onClick={handleShowMore}
          >
            Show more
          </ButtonShow>
        </ButtonContainer>
      )}
      {showMore && (
        <>
          <CardRow>
            <Card>
              <Link externalLink="https://www.coursera.org/account/accomplishments/certificate/BC2SDRU458HP" />
              <ImgContainer>
                <Img src={Java} alt="Java" />
              </ImgContainer>
              <TextContainer>
                <Title>Object Oriented Programming in Java</Title>
                <Explanation>issued by Coursera</Explanation>
              </TextContainer>
            </Card>
            <Card>
          <Link externalLink="https://drive.google.com/file/d/1BKXZcYz4tjkgocnlPiWcVoo9Q1xAFnay/view" />
          <ImgContainer>
            <Img src={Git} alt="Git" />
          </ImgContainer>
          <TextContainer>
            <Title>GitHub Essential Training</Title>
            <Explanation>issued by Lynda.com</Explanation>
          </TextContainer>
        </Card>

          </CardRow>
        </>
      )}
    </Container>
  );
};

export default BeginnerProjects;
