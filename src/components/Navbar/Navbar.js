import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  // console.log(props);

  return (
    <Box sx={{ flexGrow: 0.5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              display: { sm: "block", xs: "none" },
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <NavLink className="links" to="/">
              Rick & Morty
            </NavLink>
          </Typography>
          <MenuItem
            sx={{
              fontSize: { md: "20px", sm: "7px" },
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link links" : "links"
              }
              to="/"
            >
              Home
            </NavLink>
          </MenuItem>

          <MenuItem
            sx={{
              fontSize: { md: "20px", sm: "7px" },
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link links" : "links"
              }
              to="/liked"
            >
              Liked
            </NavLink>
          </MenuItem>

          <Typography sx={{ flexGrow: { md: 1 } }}></Typography>
          {/* <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
          
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={option}
              onChange={handleChange}
              defaultValue="name"
            >
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="status">Status</MenuItem>
              <MenuItem value="gender">Gender</MenuItem>
              <MenuItem value="species">Species</MenuItem>
            </Select>
          </FormControl>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={setSearchValue}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
