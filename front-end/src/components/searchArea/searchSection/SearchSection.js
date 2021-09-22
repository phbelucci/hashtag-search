import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextInput } from "carbon-components-react";
import { Container } from './style'
import apiNode from "../../../api/api-node";

const SearchSection = () => {

  const dispatch = useDispatch();
  const [hashtagToSearch, setHashtagToSearch] = useState('');

  function handleChange(e) {
    setHashtagToSearch(e.target.value.replaceAll(' ', ''))
  }

  async function handleClick() {
    const qtdTwitees = 1500;
    const getTwitees = await apiNode.get(`/tweets?hashtag=${hashtagToSearch}&count=${qtdTwitees}`);
    const twitees = getTwitees.data.statuses;

    const tweetWithText = twitees.filter( tweet => tweet.hasOwnProperty('text'));

    const locations = []
    
    twitees.map( tweet => {
      if(tweet.hasOwnProperty('geo') && (tweet.geo !== null || tweet.geo !== undefined)){
        locations.push({ lat: tweet.geo.coordinates[0], long: tweet.geo.coordinates[1] })
      }
      return tweet;
    })

    console.log(locations)
    if(tweetWithText === null) return;
    const sentiment = await apiNode.get(`/sentiment?tweet=${tweetWithText[0].text}`);

    let color;
    if(sentiment.data.sentiment.document.label === 'neutral') color = 'gray';
    if(sentiment.data.sentiment.document.label === 'positive') color = 'green';
    if(sentiment.data.sentiment.document.label === 'negative') color = 'red';

    dispatch({ 
      type: 'ADD_SEARCHED_HASHTAGS',
      searchedHashtag: {
        hashtag: hashtagToSearch,
        sentiment: sentiment.data.sentiment.document.label,
        color: color
      }
    })
  }

  return (
    <Container>
      <h3>Search for a #Hashtag</h3>
      <br/>
      <form onSubmit={e => { e.preventDefault(); }}>
        <TextInput
          id="inputHashtag"
          labelText="inputHashtag"
          type="text"
          placeholder="Which hashtag are you looking for?"
          helperText="Eg.: #thisIsAHashtag"
          onChange={handleChange}
        ></TextInput>
        <Button onClick={handleClick}>Search</Button>
      </form>
    </Container>
  )
  
}

export default SearchSection;