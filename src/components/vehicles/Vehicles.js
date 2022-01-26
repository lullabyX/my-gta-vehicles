import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Fragment, useState } from "react";
import VehicleTable from "./VehicleTable";
import VehicleModal from "./VehicleModal";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Vehicles = (props) => {
  const [openVehicleModal, setOpenVehicleModal] = useState(false);

  const handleOpen = () => setOpenVehicleModal(true);
  const handleClose = () => setOpenVehicleModal(false);

  const addButton = (
    <div style={{ textAlign: "center" }}>
      <Button
        variant="contained"
        sx={{ backgroundColor: "black", marginTop: "1rem", color: "#eee" }}
        startIcon={<Add />}
        color="secondary"
        onClick={handleOpen}
      >
        Add New
      </Button>
    </div>
  );

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <VehicleTable />
      </ThemeProvider>
      {addButton}
      <VehicleModal open={openVehicleModal} onClose={handleClose} />
    </Fragment>
  );
};

export default Vehicles;
