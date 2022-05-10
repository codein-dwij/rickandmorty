import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Liked from "./pages/liked";
import axios from "axios";

function App() {
  const [characterData, setCharacterData] = useState(null);
  const [likedCharacterData, setLikedCharacterData] = useState(null);

  function getLikedCharacterData(data) {
    setLikedCharacterData(data);
  }

  const dataURL = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    axios.get(dataURL).then((response) => {
      setCharacterData(response.data.results);
    });
  }, []);
  if (characterData && !("isOpen" in characterData[0])) {
    characterData.forEach((obj, index) => {
      characterData[index] = { ...obj, isOpen: false };
    }, characterData);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            characterData={characterData}
            setCharacterData={setCharacterData}
            likedCharacterData={likedCharacterData}
          />
        }
      />
      <Route
        path="/home"
        element={
          <Home
            characterData={characterData}
            setCharacterData={setCharacterData}
            likedCharacterData={likedCharacterData}
          />
        }
      />
      <Route
        path="/liked"
        element={
          <Liked
            characterData={characterData}
            setCharacterData={setCharacterData}
            setLikedCharacterData={getLikedCharacterData}
          />
        }
      />
    </Routes>
  );
}

export default App;
