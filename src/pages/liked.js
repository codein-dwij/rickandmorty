import Card from "../components/Card/Card";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
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
  const [likedCharacters, keys] = useGetLikedCharacters(likedStatus);
  return (
    <React.Fragment>
      <Navbar />
      <Grid container>
        {likedCharacters &&
          likedCharacters.map((data) => {
            let show = null;
            if (keys) {
              keys.forEach((characterId) => {
                if (characterId == data.id) {
                  show = "Unlike";
                  console.log(characterId, data.id);
                } else if (show != "Unlike") {
                  show = "Like";
                  console.log(characterId, data.id);
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
