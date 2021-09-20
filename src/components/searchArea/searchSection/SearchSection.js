import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, TextInput } from "carbon-components-react";
import { Container } from './style'

const SearchSection = () => {

  return (
    <Container>
      <h3>Search for a #Hashtag</h3>
      <br/>
      <form>
        <TextInput
          placeholder="Which hashtag are you looking for?"
          helperText="Eg.: #thisIsAHashtag"
        ></TextInput>
        <Button>Search</Button>
      </form>
    </Container>
  )
  
}

export default SearchSection;