import React, { useEffect, useState } from "react";
import RecentlySearchedSection from "./recentlySearchedSection/RecentlySearchedSection";
import SearchSection from "./searchSection/SearchSection";
import { Container } from './style'

const SearchArea = () => {

  const [searchedHastags, setSearchedHashtags] = useState([])

  useEffect(() => {
    setSearchedHashtags([
      {
        hashTag: 'Hash_Um',
        felling: 'Enthusiasm',
        color: 'green',
        sentiment: 'positive'
      },
      {
        hashTag: 'Hash_Dois',
        felling: 'Enthusiasm',
        color: 'red',
        sentiment: 'negative'
      },
      {
        hashTag: 'Hash_Tres',
        felling: 'Enthusiasm',
        color: 'gray',
        sentiment: 'neutral'
      },{
        hashTag: 'Hash_Um',
        felling: 'Enthusiasm',
        color: 'green',
        sentiment: 'positive'
      },
      {
        hashTag: 'Hash_Dois',
        felling: 'Enthusiasm',
        color: 'red',
        sentiment: 'negative'
      },
      {
        hashTag: 'Hash_Tres',
        felling: 'Enthusiasm',
        color: 'gray',
        sentiment: 'neutral'
      },
      {
        hashTag: 'Hash_Um',
        felling: 'Enthusiasm',
        color: 'green',
        sentiment: 'positive'
      },
      {
        hashTag: 'Hash_Dois',
        felling: 'Enthusiasm',
        color: 'red',
        sentiment: 'negative'
      },
      {
        hashTag: 'Hash_Tres',
        felling: 'Enthusiasm',
        color: 'gray',
        sentiment: 'neutral'
      },
    ])
  }, [])

  return (
    <Container>
      <SearchSection/>
      <RecentlySearchedSection searchedHastags={searchedHastags}/>
    </Container>
  )
  
}

export default SearchArea;
