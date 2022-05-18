import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/home";
import Liked from "./pages/liked";
import axios from "axios";
import { characterActions } from "./store/index";
function App() {
  // const [characterData, setCharacterData] = useState(null);
  const [likedCharacterData, setLikedCharacterData] = useState(null);
  const characterData = useSelector((state) => state.characterData);
  const dispatch = useDispatch();
  console.log(characterData);
  function getLikedCharacterData(data) {
    setLikedCharacterData(data);
  }

  const dataURL = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    axios.get(dataURL).then((response) => {
      // setCharacterData(response.data.results);
      dispatch(characterActions.setCharData(response.data.results));
    });
  }, [dispatch]);
  // if (characterData && !("isOpen" in characterData[0])) {
  //   characterData.forEach((obj, index) => {
  //     characterData[index] = { ...obj, isOpen: false };
  //   }, characterData);
  // }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
          // characterData={characterData}
          // setCharacterData={setCharacterData}
          // likedCharacterData={likedCharacterData}
          />
        }
      />
      <Route
        path="/liked"
        element={
          <Liked
          // characterData={characterData}
          // setCharacterData={setCharacterData}
          // setLikedCharacterData={getLikedCharacterData}
          />
        }
      />
    </Routes>
  );
}

export default App;
