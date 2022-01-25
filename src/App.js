import Header from "./components/layout/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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
      {!authCtx.isSignedIn && authCtx.FirebaseUI}
    </ThemeProvider>
  );
}

export default App;
