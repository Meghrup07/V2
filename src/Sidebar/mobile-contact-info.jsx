/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github } from "@styled-icons/boxicons-logos";
import { LinkedinSquare } from "@styled-icons/boxicons-logos";
import { Whatsapp } from "@styled-icons/boxicons-logos";
import { FilePdf } from "@styled-icons/boxicons-solid";
import { MailSend } from "styled-icons/boxicons-regular";
import { Instagram } from "@styled-icons/boxicons-logos";
import { MoreHorizontal } from "@styled-icons/evaicons-solid/";

const SideContainer = styled.div`
  display: none;
  @media only screen and (max-width: 450px) {
    /* overflow: hidden; */
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    bottom: 45px;
    left: 10px;
    z-index: 10;
    text-align: center;
    color: white;
  }
`;

const SideIcon = styled(motion.div)`
  padding: 0.5em 0;
  a {
    color: white;
    text-decoration: none;
  }
  svg {
    width: 30px;
    cursor: pointer;
  }
`;

const ExpandIcon = styled(SideIcon)`
  border: 0px solid white;
  padding: 0;
  border-radius: 50%;
  background: #ffc200;
  padding: 10px;
  z-index: 11;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
  svg {
    width: 30px;
    color: #1f1f1f;
  }
`;

const MobileContactInfo = ({ handleToast }) => {
  const [expandIcons, setExpandIcons] = useState(false);

  const variants = {
    hidden1: { opacity: 0, x: -150 },
    hidden2: { opacity: 0, x: -300 },
    hidden3: { opacity: 0, x: -550 },
    hidden4: { opacity: 0, x: -750 },
    show: { opacity: 1, x: 0 },
  };

  const bounceTransition = {
    type: "spring",
    stiffness: 100,
  };

  const handleExpandIcons = () => setExpandIcons(!expandIcons);

  return (
    <>
      <SideContainer>
        <ExpandIcon whileTap={{ scale: 0.85 }} onClick={handleExpandIcons}>
          <MoreHorizontal />
        </ExpandIcon>
        <SideIcon
          initial={{ opacity: 0, x: -150 }}
          variants={variants}
          transition={bounceTransition}
          animate={expandIcons ? "show" : "hidden1"}
          whileTap={{ scale: 0.85 }}
        >
          <a
            href="https://drive.google.com/file/d/1N_YhqlIWaCVMe4FWQV-t9AhfGi-j_I65/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            <FilePdf />
          </a>
        </SideIcon>
        <SideIcon
          initial={{ opacity: 0, x: -300 }}
          variants={variants}
          transition={bounceTransition}
          animate={expandIcons ? "show" : "hidden2"}
          whileTap={{ scale: 0.85 }}
        >
          <a
            href="https://github.com/Meghrup07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </SideIcon>
        <SideIcon
          initial={{ opacity: 0, x: -150 }}
          variants={variants}
          transition={bounceTransition}
          animate={expandIcons ? "show" : "hidden4"}
          whileTap={{ scale: 0.85 }}
        >
          <a
            href="https://www.linkedin.com/in/meghshyam-wagh-134a9a179/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinSquare />
          </a>
        </SideIcon>
        <SideIcon
          initial={{ opacity: 0, x: -150 }}
          variants={variants}
          transition={bounceTransition}
          animate={expandIcons ? "show" : "hidden4"}
          whileTap={{ scale: 0.85 }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=(+91)8806520498"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Whatsapp />
          </a>
        </SideIcon>
        <SideIcon
          initial={{ opacity: 0, x: -150 }}
          variants={variants}
          transition={bounceTransition}
          animate={expandIcons ? "show" : "hidden4"}
          whileTap={{ scale: 0.85 }}
        >
          <a
            href="mailto:meghrup2519@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailSend />
          </a>
        </SideIcon>
        <SideIcon
          initial={{ opacity: 0, x: -150 }}
          variants={variants}
          transition={bounceTransition}
          animate={expandIcons ? "show" : "hidden4"}
          whileTap={{ scale: 0.85 }}
        >
          <a
            href="https://instagram.com/meghshyam.7?igshid=MjEwN2IyYWYwYw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </SideIcon>
      </SideContainer>
    </>
  );
};

export default MobileContactInfo;
