import {Fragment, useContext} from "react";
import AuthContext from "../../store/auth-context";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Card, CardContent} from "@mui/material";

const AuthContent = () =>
{
  const authCtx = useContext(AuthContext);
  return (
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
        <CardContent sx={{backgroundColor: "black", textAlign: "center"}}>
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
            <GitHubIcon sx={{color: "black"}} />
          </a>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default AuthContent;