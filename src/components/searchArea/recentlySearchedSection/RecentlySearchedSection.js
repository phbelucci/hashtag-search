import React, { useEffect, useState } from "react";
import { Tile, Tag } from "carbon-components-react";
import Close32 from 'carbon-icons'

import { Container, Title, HashtagSection, HashtagAndFeeling} from './style'

const RecentlySearchedSection = ({ searchedHastags }) => {

  return (
    <Container>
      <Title>
          <h3>Recently searched</h3>
          <h3>Feeling</h3>
      </Title>
      <br/>
      <HashtagSection>
        {
          searchedHastags.map( (searched, index) => (
            <HashtagAndFeeling>
              <Tile 
                light={index % 2 == 0 ? true : false}
              >{searched.hashTag}
              </Tile>
              <Tag type={searched.color} title="Clear Filter">{searched.feeling}</Tag>
            </HashtagAndFeeling>
          ))
        }
      </HashtagSection>
    </Container>
  )
  
}

export default RecentlySearchedSection;
