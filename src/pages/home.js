import Card from "../components/Card/Card";
import React, { useState } from "react";
import useGetLikedCharacters from "../components/useGetLikedCharacters";
import Navbar from "../components/Navbar/Navbar";
import SearchBox from "../components/Search/Search";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

function Home(props) {
  // const childRef = useRef();
  const characterData = useSelector((state) => state.characterData);
  const [likedStatus, setLikedStatus] = useState(null);
  const [, keys] = useGetLikedCharacters(likedStatus);
  const [option, setOption] = useState(null);
  const [value, setValue] = useState(null);
  let unlikedCharacters = [];
  let mappedCharacters = unlikedCharacters;

  function setSearchOptions(option, value) {
    setOption(option);
    setValue(value);
  }
  function getLikeStatus(status) {
    setLikedStatus(status);
  }

  if (characterData) {
    unlikedCharacters = characterData.filter((character) => {
      if (!keys) {
        return false;
      }
      return !keys.includes(character.id);
    });
  }

  if (option && value) {
    mappedCharacters = unlikedCharacters.filter((character) => {
      return character[option].toLowerCase().includes(value.toLowerCase());
    });
  } else if (value === "") {
    mappedCharacters = unlikedCharacters;
  }
  return (
    <React.Fragment>
      <Navbar />
      <SearchBox setSearchOptions={setSearchOptions} />
      <Grid container>
        {mappedCharacters &&
          mappedCharacters.map((data) => {
            let show = "Like";
            if (keys) {
              keys.forEach((characterId) => {
                if (String(characterId) === String(data.id)) {
                  show = "Unlike";
                } else if (show !== "Unlike") {
                  show = "Like";
                }
              });
            }

            return (
              <Grid
                item
                key={data.id + data.name}
                md={2.85}
                sm={2.75}
                xs={12}
                m={1}
                sx={{
                  border: 1,
                  borderRadius: "5px",
                }}
              >
                <Card data={data} getLikeStatus={getLikeStatus} show={show} />
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
}

export default Home;
