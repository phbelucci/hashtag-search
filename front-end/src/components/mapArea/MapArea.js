import React from "react";
import Maps from '../maps/Maps';
import { Title } from "../searchArea/recentlySearchedSection/style";
import { Container } from "./style";

const MapArea = () => {
  
  return (
    <Container>
      <h3>Where are they?</h3>
      <Maps></Maps>
    </Container>
  );
  
}

export default MapArea;