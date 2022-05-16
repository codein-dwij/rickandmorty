import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.css";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginTop: "8px",
  borderRadius: theme.shape.borderRadius,
  borderColor: theme.palette.primary.main,
  backgroundColor: alpha("#0764fa", 0.15),
  "&:hover": {
    backgroundColor: alpha("#0764fa", 0.25),
  },
  marginLeft: 0,
  width: "100%",
  maxHeight: "40px",

  [theme.breakpoints.up("xs")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  border: "1px solid black",
  borderRadius: theme.shape.borderRadius,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    "&:focus": {
      width: "20ch",
    },
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export default function SearchBox(props) {
  const [option, setOption] = React.useState("name");
  const [search, setSearch] = React.useState("");
  const handleChange = (event) => {
    setOption(event.target.value);
  };
  const setSearchValue = (e) => {
    setSearch(e.target.value);
  };

  React.useEffect(() => {
    // if (age !== "" && search !== "") {
    props.setSearchOptions(option, search);
    // }
  }, [option, search, props]);
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          width: "50%",
          justifySelf: "center",
          margin: "30px auto",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px",
          backgroundColor: "primary.light",
          borderRadius: "10px",
          flexWrap: "wrap",
          boxShadow: 5,
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            textAlign: "center",
            flex: "0 0 100%",
            fontFamily: "'Poppins', sans-serif",
            // backgroundColor:"primary.light"
          }}
        >
          Search Characters
        </Typography>
        <FormControl
          sx={{
            m: 1,
            minWidth: 60,
            backgroundColor: alpha("#0764fa", 0.15),
          }}
          size="small"
        >
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={option}
            onChange={handleChange}
            defaultValue="name"
            sx={{
              border: "none",
              "& .MuiOutlinedInput-notchedOutline , .Mui-expanded , .Mui-selected , .Mui-focused":
                {
                  border: "1px solid black",
                  borderRadius: "5px",
                },
            }}
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
            className={styles.test}
          />
        </Search>
      </Box>
    </React.Fragment>
  );
}
