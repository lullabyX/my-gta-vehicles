import { Add, ArrowForwardIosRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import useInput from "../../hooks/use-input";
import {retrieveVehicles} from "../../../utils/functions";

const VehicleAddSC = (props) => {
  const tokenInput = useInput((value) => value !== "");

  const addVehicles = async () =>
  {
    if(tokenInput.value.trim() === "") {
      return;
    }
    const vehicles = await retrieveVehicles(tokenInput.value);
    console.log(vehicles)
  }

  return (
    <div
      style={{
        maxWidth: 495,
        margin: "auto",
        marginTop: "1rem",
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight: "bold"}}>
            Auto Add All Owned Vehicles
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{marginBottom: "1rem"}}>
            <p>
              This is not the most elegant way of doing things but it's the
              quickest one to implement.
            </p>
            <Link
              href="https://www.reddit.com/r/gtaonline/comments/2ubq61/rockstar_social_club_api_cheat_sheet/"
              underline="always"
              color="secondary"
              variant="h5"
              target="_blank"
              rel="noopener"
            >
              How To
            </Link>
          </div>

          <TextField
            fullWidth
            error={!tokenInput.isInputValid}
            multiline
            id="bearer"
            label="BearerToken"
            variant="filled"
            value={tokenInput.value}
            onChange={tokenInput.changeHandler}
            onBlur={tokenInput.touchHandler}
            helperText={
              !tokenInput.isInputValid
                ? "Read the 'How To' to know about BearerToken"
                : ""
            }
          />
          <div style={{textAlign: "centre"}}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000",
                marginTop: "1rem",
                color: "#eee",
                ":hover": {
                  backgroundColor: "#452c63",
                },
              }}
              startIcon={<ArrowForwardIosRounded />}
              onClick={() => addVehicles()}
            >
              Proceed
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default VehicleAddSC;
