import Card from "../components/Card/Card";
import React, { useState } from "react";
import useGetLikedCharacters from "../components/useGetLikedCharacters";
import Navbar from "../components/Navbar/Navbar";

import { Grid } from "@mui/material";

function Home(props) {
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
  console.log(keys);

  return (
    <React.Fragment>
      <Navbar />
      <Grid container>
        {props.characterData &&
          props.characterData.map((data) => {
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
            console.log(show);
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
                <Card data={data} getLikeStatus={getLikeStatus} show={show} />
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
}

export default Home;
