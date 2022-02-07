import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [listCharacters, setListCharacter] = useState();
  // console.log(listCharacters);
  const [selectedCharacter, setSelectedCharacter] = useState();
  // Fetch promises
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacter = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const personajes = data.results;
        setListCharacter(personajes);
      })
      .catch((err) => console.log(err));
  };
  //
  useEffect(() => {
    fetchCharacter(initialUrl);
  }, []);
  // Submit & filter
  const submitHandler = (e) => {
    e.preventDefault();
    const characterId = e.target.value;
    const selectedCharacter = listCharacters.filter(
      (character) => character.id === characterId
    )[0];
    setSelectedCharacter(selectedCharacter);
  };

  return (
    <div className="App">
      <h1>Rick and Morty App</h1>
      <select onChange={(e) => submitHandler(e)} name="select" id="select">
        <option value="">-- Select a Character --</option>
        {listCharacters &&
          listCharacters.map((personaje) => (
            <option key={personaje.id} value={personaje.id}>
              {personaje.name}
            </option>
          ))}
      </select>
      {selectedCharacter && (
        <div className="card">
          <img src={selectedCharacter.image} alt="Imagen" />
          <div className="info">
            <h3>{selectedCharacter.name}</h3>
            <p>
              Species: <strong>{selectedCharacter.species} </strong>
            </p>
            <p>
              Status: <strong>{selectedCharacter.status}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
