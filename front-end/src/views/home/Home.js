import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SearchArea from "../../components/searchArea/SearchArea";
import MapArea from "../../components/mapArea/MapArea";
import { LogoTwitter32 } from '@carbon/icons-react'
import { Container } from './style'

const Home = () => {

  const {
    isAuthenticated,
  } = useAuth0();

  return (
    <Container>
      {
      isAuthenticated && (
        <>
          <SearchArea/>
          <hr/>
          <MapArea></MapArea>
        </>
      )
      }
      {
        !isAuthenticated && (
          <h5>Log in with your <LogoTwitter32 fill="#1DA1F2"/> account to use the application!</h5>
        )
      }
    </Container>
  )
    
};

export default Home;