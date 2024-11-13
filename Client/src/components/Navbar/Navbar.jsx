import {
  // AppBar,
  Toolbar,
  IconButton,
  Badge,
  // Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import logo from "../../assets/commerce.png";
import { CustomAppBar, Image, Title } from "./styles";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      contrastText: "#47008F",
    },
  },
});
const Navbar = () => {
  // const classes = makeStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const logout = async () => {
    console.log(document.cookie);
    const ck = document.cookie.split("=");
    if (ck[0] === "LoggedUser") {
      document.cookie = `${ck[0]}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
      navigate("/");
    }
  };

  return (
    <>
      <CustomAppBar position="fixed" >
        <Toolbar>
          <Title
            component={Link}
            to="/products"
            variant="h6"
            color="inherit"
          >
            <Image src={logo} alt="logo" height="25px" />
            E-Store
          </Title>
          <div style={{ flexGrow: 1 }} />
          {(location.pathname === "/products" ||
            location.pathname === "/cart" ||
            location.pathname === "/checkout") && (
            <div>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart item"
                color="inherit"
              >
                {location.pathname === "/products" && (
                  <Badge badgeContent={0} color="secondary">
                    <ShoppingCart></ShoppingCart>
                  </Badge>
                )}
              </IconButton>
              <ThemeProvider theme={theme}>
                <Button
                  onClick={logout}
                  variant="contained"
                  size="medium"
                  style={{ fontWeight: "700", color: "#1976d2" }}
                >
                  Logout
                </Button>
              </ThemeProvider>
            </div>
          )}
        </Toolbar>
      </CustomAppBar>
      <Outlet />
    </>
  );
};
export default Navbar;
