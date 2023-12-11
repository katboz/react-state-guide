import React, { useState } from 'react';
import { useEffect } from 'react';
import { Character, fetchCharacter } from './api';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { Wrapper } from './App.styles';

function App() {

  // here we will have character it will hold character from api
  // and it's going to be an onject
  // type of state of character cannot be empty object, it needs to be specified
  //we will specify the empty object as Character, it is empty object but we say its actually a Character object 
  const [character, setCharacter] = useState<Character>({} as Character);
  //we can alwys specify type in <> 
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [characterId, setCharacterId] = useState(1);

  // everytime we change the state of characterID it will trigger
  //this useeffect, it will load data from API
useEffect(() => {
  const fetchFromAPi = async()=>{
    setIsLoading(true);
    const result = await fetchCharacter(characterId);
    setIsLoading(false);
    setCharacter(result);
  };
  fetchFromAPi();
},[characterId])
  return (
    //if it's loading it will write Is loading otherwise card element
    <Wrapper>
      {isLoading ? (
        <p>Is loading ...</p>
      ) : (
        <>
         <Card name={character.name} imgUrl={character.img_url}/>
    
         <button onClick={()=> setCharacterId(Math.floor(Math.random()*10)+1)}>
          Random Character
         </button>
         
        </>
        // button onClick has an inline function, setCharacterId is our state
        // generate number between 1 and 10
      )}

    </Wrapper>
  );
};

export default App;
