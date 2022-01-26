import Header from "./components/layout/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AuthContext from "./store/auth-context";
import { Fragment, useContext } from "react";
import Vehicles from "./components/vehicles/Vehicles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  const authCtx = useContext(AuthContext);

  const authContent = (
    <Card
      sx={{
        maxWidth: 350,
        minWidth: 125,
        backgroundColor: "white",
        margin: "auto",
        marginTop: "12.5%",
      }}
    >
      <CardContent sx={{ backgroundColor: "black", textAlign: "center" }}>
        <h2>Sign In!</h2>
      </CardContent>
      <CardContent>{authCtx.FirebaseUI}</CardContent>
    </Card>
  );

  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <Header />
        {!authCtx.isSignedIn && authContent}
      </ThemeProvider>
      {authCtx.isSignedIn && <Vehicles />}
    </Fragment>
  );
}

export default App;
