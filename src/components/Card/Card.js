import React, {
  useEffect,
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, CardActionArea, CardActions } from "@mui/material";
import useGetLikedCharacters from "../useGetLikedCharacters";
import ReactCardFlip from "react-card-flip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const MultiActionAreaCard = forwardRef((props, ref) => {
  const [like, setLike] = useState(false);
  const [likedCharacters, keys] = useGetLikedCharacters(like);
  function buttonClicked(e) {
    e.stopPropagation();
    console.log("here");
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
        const key = Object.keys(localStorage);
        if (key.length === 0) {
          localStorage.setItem("liked", JSON.stringify([props.data]));
        } else {
          const values = JSON.parse(localStorage.getItem("liked"));
          values.push(props.data);
          localStorage.setItem("liked", JSON.stringify(values));
        }
        props.data.isOpen = false;
        // localStorage.setItem(props.data.id, JSON.stringify(props.data));
        setLike(false);
        if (props.getLikeStatus) {
          props.getLikeStatus(like);
        }
      } else {
        const values = JSON.parse(localStorage.getItem("liked"));

        const index = values.findIndex(
          (element) => element.id === props.data.id
        );
        values.splice(index, 1);
        localStorage.setItem("liked", JSON.stringify(values));
        setLike(false);
        if (props.getLikeStatus) {
          props.getLikeStatus(like);
        }
      }
    }
  }, [like, props, keys]);

  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  const FRONT_CARD = (
    <Card sx={{ maxWidth: 3400 }}>
      <CardActionArea>
        <CardMedia component="img" height="350" image={props.data.image} />
      </CardActionArea>
      <CardActions sx={{ borderTop: 1 }}>
        <Button
          size="small"
          color="primary"
          onClick={(e) => {
            buttonClicked(e);
          }}
        >
          {props.show === "Like" && (
            <FavoriteBorderIcon sx={{ color: "red" }} />
          )}
          {props.show === "Unlike" && <FavoriteIcon sx={{ color: "red" }} />}
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
            height: 343,
            textAlign: "center",
            verticalAlign: "center",
            fontFamily: "'Poppins', sans-serif",
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
          {props.show === "Like" && (
            <FavoriteBorderIcon sx={{ color: "red" }} />
          )}
          {props.show === "Unlike" && <FavoriteIcon sx={{ color: "red" }} />}
        </Button>
      </CardActions>
    </Card>
  );

  // if (!props.data.isOpen) {
  //   return FRONT_CARD;
  // } else {
  //   return BACK_CARD;
  // }
  useImperativeHandle(ref, () => ({
    flipCard() {
      handleClick();
      console.log("here2");
    },
  }));
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={handleClick}>
        {FRONT_CARD}
        {/* <button onClick={handleClick}>Click to flip</button> */}
      </div>

      <div onClick={handleClick}>
        {BACK_CARD}
        {/* <button onClick={handleClick}>Click to flip</button> */}
      </div>
    </ReactCardFlip>
  );
});

export default MultiActionAreaCard;
