import Card from "../components/Card/Card";
import React, { useState, useRef } from "react";
import useGetLikedCharacters from "../components/useGetLikedCharacters";
import Navbar from "../components/Navbar/Navbar";
import SearchBox from "../components/Search/Search";
import { Grid, Typography } from "@mui/material";

function Home(props) {
  const childRef = useRef();
  function gotClicked(data) {
    data.isOpen = !data.isOpen;
    const newCharacterData = [...props.characterData];
    props.setCharacterData(newCharacterData);
    console.log("here");
    // childRef.current.flipCard();
  }

  const [likedStatus, setLikedStatus] = useState(null);

  function getLikeStatus(status) {
    setLikedStatus(status);
  }
  const [likedCharacters, keys] = useGetLikedCharacters(likedStatus);
  const [option, setOption] = useState(null);
  const [value, setValue] = useState(null);
  function setSearchOptions(option, value) {
    setOption(option);
    setValue(value);
  }
  let unlikedCharacters = [];
  if (props.characterData) {
    unlikedCharacters = props.characterData.filter((character) => {
      if (!keys) {
        return false;
      }
      return !keys.includes(character.id);
    });
  }
  let mappedCharacters = unlikedCharacters;
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
      {/* <Typography
        variant="h4"
        component="div"
        sx={{
          marginTop: "20px",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          // backgroundColor:"primary.light"
        }}
      >
        Rick And Morty Characters
      </Typography> */}
      <Grid container>
        {mappedCharacters &&
          mappedCharacters.map((data) => {
            let show = "Like";
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
                md={2.85}
                sm={2.75}
                xs={12}
                onClick={() => gotClicked(data)}
                m={1}
                sx={{
                  border: 1,
                  borderRadius: "5px",
                }}
              >
                <Card
                  // ref={childRef}
                  data={data}
                  getLikeStatus={getLikeStatus}
                  show={show}
                />
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
}

export default Home;
