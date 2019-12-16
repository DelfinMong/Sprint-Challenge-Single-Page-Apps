import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  
  //const [characters, setCharacters] = useState([]);
  const [foundValue, setFoundValue] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const searchOnChange = e => {
    setSearchTerm(e.target.value);
  }
  
  
   useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
     .then(res => {
      // setCharacters(res.data.results);
      console.log(res.data.results);
      setFoundValue(res.data.results);
      setSearchResults(res.data.results)
    })
    .catch(e => {
      console.log(e);
      }); 

}, []);

useEffect(() => {
  const results = foundValue.filter(character => {
    return character.name.toLowerCase().includes(searchTerm.toLowerCase());
     });
 
 
 setSearchResults(results)

},[searchTerm])
// end comment
  return (
    <div>
      <form>
        <input
          name='name' 
          className='search-form'
          placeholder='Search by First or Last Name'
          onChange={searchOnChange}
          value={searchTerm}
        />
        {searchResults.map(character => (  // comment
          <CharacterCard
          id={character.id}
          name={character.name}
          species={character.species}
          status={character.status}
          image={character.image}
          />   
          ))
      }
     </form>
      
      
      <section className="character-list">

     
      </section>
    </div>
  );
    }
