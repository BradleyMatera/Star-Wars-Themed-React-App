import React from "react";
import "../styles/AdCardStyledComponents";
import { Card, Image, Title } from '../styles/AdCardStyledComponents'; // Correct imports

const AdCard = () => {
  return (
    <Card>
      <Image src="../src/img/c3PO.png" alt="Ad" /> {/* Ensure this path is correct */}
      <Title>Ad Title</Title>
      {/* Add other ad card elements here */}
    </Card>
  );
};

export default AdCard;
