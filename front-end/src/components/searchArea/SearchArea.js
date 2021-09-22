import React from "react";
import RecentlySearchedSection from "./recentlySearchedSection/RecentlySearchedSection";
import SearchSection from "./searchSection/SearchSection";
import { Container } from './style'

const SearchArea = () => {
  return (
    <Container>
      <SearchSection/>
      <RecentlySearchedSection/>
    </Container>
  )
  
}

export default SearchArea;
