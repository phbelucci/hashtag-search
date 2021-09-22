import React, { useEffect } from "react";
import { Tile, Tag } from "carbon-components-react";
import {Close32} from '@carbon/icons-react'

import { Container, Title, HashtagSection, HashtagAndFeeling} from './style'
import { useSelector } from "react-redux";

const RecentlySearchedSection = () => {

  const recentlySearchedHashtags = useSelector( state => state.searchedHashtags)

  useEffect(() => {
  },[recentlySearchedHashtags])

  function handleDeleteHashtag(index){
    //TODO - implementar a possibilidade de excluir uma hashtag pesquisada
    console.log('Apagar hashtag index: ', index)
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
          recentlySearchedHashtags.map( (searched, index) => (
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
                {searched.hashtag}
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
