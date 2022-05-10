import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, CardActionArea, CardActions } from "@mui/material";
import useGetLikedCharacters from "../useGetLikedCharacters";

export default function MultiActionAreaCard(props) {
  const [like, setLike] = useState(false);
  const [likedCharacters, keys] = useGetLikedCharacters(like);
  function buttonClicked(e) {
    e.stopPropagation();

    setLike(true);
    if (props.getLikeStatus) {
      props.getLikeStatus(like);
    }
  }
  useEffect(() => {
    if (like) {
      let likeCheck = false;
      keys.forEach((key) => {
        if (key == props.data.id) {
          likeCheck = true;
        }
      });
      if (!likeCheck) {
        props.data.isOpen = false;
        localStorage.setItem(props.data.id, JSON.stringify(props.data));
        setLike(false);
        if (props.getLikeStatus) {
          props.getLikeStatus(like);
        }
      } else {
        localStorage.removeItem(props.data.id);
        setLike(false);
        if (props.getLikeStatus) {
          props.getLikeStatus(like);
        }
      }
    }
  }, [like, props, keys]);
  const FRONT_CARD = (
    <Card sx={{ maxWidth: 3400 }}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={props.data.image} />
      </CardActionArea>
      <CardActions sx={{ borderTop: 1 }}>
        <Button
          size="small"
          color="primary"
          onClick={(e) => {
            buttonClicked(e);
          }}
        >
          {props.show}
        </Button>
      </CardActions>
    </Card>
  );

  const BACK_CARD = (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Typography
          sx={{
            fontSize: 20,
            height: 245,
            textAlign: "center",
            verticalAlign: "center",
            fontFamily: "monospace",
          }}
          color="text.primary"
          gutterBottom
        >
          <Box sx={{ paddingTop: "3em" }}>
            Name: {props.data.name}
            <br />
            Status: {props.data.status}
            <br />
            Gender: {props.data.gender}
            <br />
            Species: {props.data.species}
          </Box>
        </Typography>
      </CardActionArea>
      <CardActions sx={{ borderTop: 1 }}>
        <Button
          size="small"
          color="primary"
          onClick={(e) => {
            buttonClicked(e);
          }}
        >
          {props.show}
        </Button>
      </CardActions>
    </Card>
  );

  if (!props.data.isOpen) {
    return FRONT_CARD;
  } else {
    return BACK_CARD;
  }
}
