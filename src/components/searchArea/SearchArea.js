import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, TextInput } from "carbon-components-react";
import { DataTable } from "carbon-components-react";
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
        color: 'blue',
        feeling: 'calm'
      },
      {
        hashTag: 'Hash_Dois',
        felling: 'Enthusiasm',
        color: 'red',
        feeling: 'angry'
      },
      {
        hashTag: 'Hash_Tres',
        felling: 'Enthusiasm',
        color: 'green',
        feeling: 'peace'
      },
      {
        hashTag: 'Hash_Quatro',
        felling: 'Enthusiasm',
        color: 'purple',
        feeling: 'stress'
      },{
        hashTag: 'Hash_Quatro',
        felling: 'Enthusiasm',
        color: 'purple',
        feeling: 'stress'
      },{
        hashTag: 'Hash_Quatro',
        felling: 'Enthusiasm',
        color: 'purple',
        feeling: 'stress'
      },{
        hashTag: 'Hash_Quatro',
        felling: 'Enthusiasm',
        color: 'purple',
        feeling: 'stress'
      },{
        hashTag: 'Hash_Quatro',
        felling: 'Enthusiasm',
        color: 'purple',
        feeling: 'stress'
      },{
        hashTag: 'Hash_Quatro',
        felling: 'Enthusiasm',
        color: 'purple',
        feeling: 'stress'
      },{
        hashTag: 'Hash_Quatro',
        felling: 'Enthusiasm',
        color: 'purple',
        feeling: 'stress'
      },{
        hashTag: 'Hash_Quatro',
        felling: 'Enthusiasm',
        color: 'purple',
        feeling: 'stress'
      },{
        hashTag: 'Hash_Quatro',
        felling: 'Enthusiasm',
        color: 'purple',
        feeling: 'stress'
      },{
        hashTag: 'Hash_Quatro',
        felling: 'Enthusiasm',
        color: 'purple',
        feeling: 'stress'
      },{
        hashTag: 'Hash_Quatro',
        felling: 'Enthusiasm',
        color: 'purple',
        feeling: 'stress'
      },{
        hashTag: 'Hash_Quatro',
        felling: 'Enthusiasm',
        color: 'purple',
        feeling: 'stress'
      },{
        hashTag: 'Hash_Quatro',
        felling: 'Enthusiasm',
        color: 'purple',
        feeling: 'stress'
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
