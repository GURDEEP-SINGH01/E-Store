// import { makeStyles } from "@mui/styles";
// import { alpha } from "@mui/material/styles";

// const drawerWidth = 0;

// export default makeStyles((theme) => ({
//   appBar: {
//     boxShadow: "none",
//     borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
//     [theme.breakpoints.up("sm")]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//     },height:"4em",
//   },
//   title: {
//     flexGrow: 1,
//     alignItems: "center",
//     display: "flex",
//     textDecoration: "none",
//   },
//   image: {
//     marginRight: "10px",
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   search: {
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "auto",
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   inputRoot: {
//     color: "inherit",
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// styles.js
import { styled } from "@mui/system";
import { AppBar, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

const drawerWidth = 0;

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  height: "4em",
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

export const Title = styled(Typography)({
  flexGrow: 1,
  alignItems: "center",
  display: "flex",
  textDecoration: "none",
});

export const Image = styled("img")({
  marginRight: "10px",
});

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const InputBaseStyled = styled("input")(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  transition: theme.transitions.create("width"),
  width: "100%",
  color: "inherit",
  [theme.breakpoints.up("md")]: {
    width: "20ch",
  },
}));
