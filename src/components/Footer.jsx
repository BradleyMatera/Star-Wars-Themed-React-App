import React from "react";
import { FooterContainer } from "../styles/FooterStyledComponents"; // Correct import
import "../tailwind.css";
import "../styles/FooterStyledComponents";
const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2023 Star Wars Themed React App. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
