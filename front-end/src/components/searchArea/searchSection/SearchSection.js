import React, { useState } from "react";
import { Button, TextInput } from "carbon-components-react";
import { Container } from './style'
import api from "../../../api/api";

const SearchSection = () => {

  const [hashtagToSearch, setHashtagToSearch] = useState('');

  function handleChange(e) {
    setHashtagToSearch(e.target.value.replace(' ', ''))
  }

  async function handleClick() {
    const qtdTwitees = 10;
    const getTwitees = await api.get(`/tweets?hashtag=${hashtagToSearch}&count=${qtdTwitees}`);
    const twitees = getTwitees.data.statuses;

    const tweet = 'Não consigo viver sem você!'
    const sentiment = await api.get(`/sentiment?tweet=${tweet}`);

    console.log(sentiment.data.sentiment.document.label)

    // const withGeo = twitees.filter( twt => {
    //   console.log(twt.geo)
    //   return twt.geo !== 'null'
    // })

    console.log(twitees)
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