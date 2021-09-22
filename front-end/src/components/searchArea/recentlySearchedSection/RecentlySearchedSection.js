import React from "react";
import { Tile, Tag } from "carbon-components-react";
import {Close32} from '@carbon/icons-react'

import { Container, Title, HashtagSection, HashtagAndFeeling} from './style'

const RecentlySearchedSection = ({ searchedHastags }) => {

  function handleDeleteHashtag(index){
    console.log('clicou no index...', index)
  }

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
            <HashtagAndFeeling key={index}>
              
              <Tile 
                light={index % 2 === 0 ? true : false}
              >
                <Close32 
                  fill="red"
                  id={index} 
                  height="16" 
                  width="16" 
                  style={{marginRight: "8px"}} 
                  onClick={(e) => handleDeleteHashtag(index)}
                />
                {searched.hashTag}
              </Tile>
              
              <Tag 
                type={searched.color} 
                title="Clear Filter" 
                style={{minWidth: "100px"}}
              >
                {searched.sentiment}
              </Tag>
            </HashtagAndFeeling>
          ))
        }
      </HashtagSection>
    </Container>
  )
  
}

export default RecentlySearchedSection;
