import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Fragment, useContext } from "react";
import Header from "./components/layout/Header";
import Vehicles from "./components/vehicles/Vehicles";
import AuthContext from "./store/auth-context";
import VehicleContext from "./store/vehicle-context";
import GitHubIcon from "@mui/icons-material/GitHub";

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
  const vehicleCtx = useContext(VehicleContext);

  const authContent = (
    <Fragment>
      <Card
        sx={{
          maxWidth: 350,
          minWidth: 125,
          backgroundColor: "white",
          margin: "auto",
          marginTop: "6.25%",
        }}
      >
        <CardContent sx={{ backgroundColor: "black", textAlign: "center" }}>
          <h2>Sign In!</h2>
        </CardContent>
        <CardContent>{authCtx.FirebaseUI}</CardContent>
      </Card>
      <Card
        sx={{
          maxWidth: 350,
          minWidth: 125,
          backgroundColor: "white",
          color: "black",
          margin: "auto",
          marginTop: "1rem",
        }}
      >
        <CardContent>
          <h2>About</h2>
          <p>
            Keep track of the vehicles that you own in GTA Online and where
            you've stored them, see the vehicle details, sort/filter the
            vehicles based on their properties.
          </p>
          <a href="https://github.com/lullabyX/my-gta-vehicles">
            <GitHubIcon sx={{ color: "black" }} />
          </a>
        </CardContent>
      </Card>
    </Fragment>
  );

  const LoadingContent = (
    <Card
      sx={{
        maxWidth: 350,
        minWidth: 125,
        backgroundColor: "white",
        margin: "auto",
        marginTop: "12.5%",
        textAlign: "center",
      }}
    >
      <CardContent>
        <h2>Loading...</h2>
      </CardContent>
    </Card>
  );

  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <Header />
        {!authCtx.isSignedIn && authContent}
      </ThemeProvider>
      {authCtx.isSignedIn && !vehicleCtx.isVehicleLoaded && LoadingContent}
      {authCtx.isSignedIn && vehicleCtx.isVehicleLoaded && <Vehicles />}
    </Fragment>
  );
}

export default App;
