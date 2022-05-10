import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("xs")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     "&:focus": {
//       width: "20ch",
//     },
//     [theme.breakpoints.up("xs")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: "block", xs: "none" } }}
          >
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/home"
            >
              Rick&Morty
            </NavLink>
          </Typography>
          <MenuItem sx={{ fontSize: "20px", marginLeft: "30px" }}>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/home"
            >
              Home
            </NavLink>
          </MenuItem>

          <MenuItem sx={{ fontSize: "20px" }}>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/liked"
            >
              Liked
            </NavLink>
          </MenuItem>

          <Typography sx={{ flexGrow: 1 }}></Typography>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
