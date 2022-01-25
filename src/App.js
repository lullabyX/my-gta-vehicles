import Header from "./components/layout/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AuthContext from "./store/auth-context";
import { useContext } from "react";

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
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />

      {!authCtx.isSignedIn && (
        <Card
          sx={{
            maxWidth: 350,
            backgroundColor: "white",
            margin: "auto",
            marginTop: "12.5%",
          }}
        >
          <CardContent>{authCtx.FirebaseUI}</CardContent>
        </Card>
      )}
    </ThemeProvider>
  );
}

export default App;
