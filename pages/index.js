import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import Head from "next/head";
import {Fragment, useContext} from "react";
import AuthContent from "../src/components/auth/AuthContent";
import Header from "../src/components/layout/Header";
import Vehicles from "../src/components/vehicles/Vehicles";
import AuthContext from "../src/store/auth-context";
import VehicleContext from "../src/store/vehicle-context";

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
        {!authCtx.isSignedIn && <AuthContent />}
      </ThemeProvider>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Keep track of your vehicles in GTA V: Online"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />\
        <link rel="manifest" href="/manifest.json" />\
        <title>My GTA Vehicles</title>
      </Head>
      {authCtx.isSignedIn && !vehicleCtx.isVehicleLoaded && LoadingContent}
      {authCtx.isSignedIn && vehicleCtx.isVehicleLoaded && <Vehicles />}
    </Fragment>
  );
}

export default App;
