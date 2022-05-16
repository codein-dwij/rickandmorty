import Card from "../components/Card/Card";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBox from "../components/Search/Search";
import { Grid } from "@mui/material";
import useGetLikedCharacters from "../components/useGetLikedCharacters";

export default function Liked(props) {
  function gotClicked(data) {
    data.isOpen = !data.isOpen;
    const newCharacterData = [...props.characterData];
    props.setCharacterData(newCharacterData);
  }
  const [likedStatus, setLikedStatus] = useState(null);
  function getLikeStatus(status) {
    setLikedStatus(status);
  }
  const [option, setOption] = useState(null);
  const [value, setValue] = useState(null);
  function setSearchOptions(option, value) {
    setOption(option);
    setValue(value);
  }

  const [likedCharacters, keys] = useGetLikedCharacters(likedStatus);
  let mappedCharacters = likedCharacters;
  if (option && value) {
    mappedCharacters = likedCharacters.filter((character) => {
      return character[option].toLowerCase().includes(value.toLowerCase());
    });
  } else if (value === "") {
    mappedCharacters = likedCharacters;
  }

  return (
    <React.Fragment>
      <Navbar />
      <SearchBox setSearchOptions={setSearchOptions} />
      <Grid container>
        {mappedCharacters &&
          mappedCharacters.map((data) => {
            let show = null;
            if (keys) {
              keys.forEach((characterId) => {
                if (characterId == data.id) {
                  show = "Unlike";
                } else if (show != "Unlike") {
                  show = "Like";
                }
              });
            }
            return (
              <Grid
                item
                key={data.id + data.name}
                md={2.75}
                sm={2.75}
                xs={12}
                onClick={() => gotClicked(data)}
                m={1}
                sx={{ border: 1 }}
              >
                <Card data={data} show={show} getLikeStatus={getLikeStatus} />
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
}
