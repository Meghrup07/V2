﻿/** @format */

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github } from "@styled-icons/boxicons-logos";
import { LinkedinSquare } from "@styled-icons/boxicons-logos";
import { Instagram } from "@styled-icons/boxicons-logos";
import { FilePdf } from "@styled-icons/boxicons-solid";

const SideContainer = styled.div`
  width: 40px;
  position: fixed;
  z-index: 10;
  text-align: center;
  color: white;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
const LeftSideContainer = styled(SideContainer)`
  bottom: 0px;
  left: 40px;
  right: auto;
  a:hover {
    color: #ffc200;
    text-decoration: none;
  }
`;
const RightSideContainer = styled(SideContainer)`
  bottom: 0px;
  left: auto;
  right: 40px;
`;
const SideText = styled.div`
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: #ffc200;
    text-decoration: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  margin: 10px auto;
  padding: 10px;
`;

const SideIcon = styled(motion.div)`
  padding: 0.5em 0;
  a {
    color: white;
    text-decoration: none;
  }
  svg {
    width: 22px;
    cursor: pointer;
  }
`;

const Line = styled.div`
  content: "";
  display: block;
  width: 1px;
  height: 60px;
  margin: 0px auto;
  background-color: white;
`;

const Sidebar = ({ handleToast }) => {
  // eslint-disable-next-line
  const handleClipboardClick = () => {
    navigator.clipboard.writeText("meghrup2519@gmail.com");
    handleToast(`Email copy to clipboard! 🥳`);
    return;
  };

  return (
    <>
      <LeftSideContainer>
        <SideIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}>
          <a
            href="https://drive.google.com/file/d/1d_c0JTeoInWbMv40BCZvsze-ej98WjAA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            <FilePdf />
          </a>
        </SideIcon>
        <SideIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}>
          <a
            href="https://github.com/Meghrup07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </SideIcon>
        <SideIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}>
          <a
            href="https://www.linkedin.com/in/meghshyam-wagh-134a9a179/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinSquare />
          </a>
        </SideIcon>
        <SideIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}>
          <a
            href="https://instagram.com/meghshyam.7?igshid=MjEwN2IyYWYwYw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </SideIcon>
        <Line />
      </LeftSideContainer>
      <RightSideContainer>
        <SideText>
          <a href="https://api.whatsapp.com/send?phone=8806520498">
            (+91)8806520498
          </a>
        </SideText>
        <Line />
        <SideText>
          <a href="mailto:meghrup2519@gmail.com">meghrup2519@gmail.com</a>
        </SideText>
        <Line />
      </RightSideContainer>
    </>
  );
};

export default Sidebar;
