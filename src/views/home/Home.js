import React from "react";

import SearchArea from "../../components/searchArea/SearchArea";
import MapArea from "../../components/mapArea/MapArea";
import { Container } from './style'

const Home = () => (
  <Container>
    <SearchArea />
    <hr/>
    <MapArea></MapArea>
  </Container>
);

export default Home;