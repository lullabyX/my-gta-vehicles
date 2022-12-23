import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AuthContext from "../../store/auth-context";

export default function Header(props) {
  const authCtx = React.useContext(AuthContext);
  return (
    <Box
      sx={{
        width: "100%",
        position: "-webkit-sticky",
        position: "sticky",
        zIndex: "9999",
        top: "0px",
      }}
    >
      <AppBar sx={{position: 'static'}}>
        <Toolbar sx={{display: 'flex', 'justifyContent': 'space-between'}}>
          <Typography variant="h6" component="div">
            MY GTA VEHICLES
          </Typography>
          {authCtx.isSignedIn && (
            <Button color="inherit" onClick={authCtx.signout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
