import {Add} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {GridExpandMoreIcon} from "@mui/x-data-grid";
import axios from "axios";
import {useCallback, useContext, useEffect, useState} from "react";
import AuthContext from "../../store/auth-context";
import VehicleContext from "../../store/vehicle-context";
import GetToken from "./AddFromSC/VehicleAddSC";
import VehicleDetail from "./Detail/VehicleDetail";
import VehicleModal from "./New Vehicle/VehicleModal";
import VehicleTable from "./Vehicle Table/VehicleTable";
import classes from "./Vehicles.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import VehicleAddSC from "./AddFromSC/VehicleAddSC";

const Vehicles = (props) => {
  const {user} = useContext(AuthContext);
  const [openVehicleModal, setOpenVehicleModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [detailContent, setDetailContent] = useState(<></>);
  const [vehiclesData, setVehiclesData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isDeleted, setIsDeleted] = useState(false);

  const {vehicles: loadedVehicles} = useContext(VehicleContext);

  const [editDetails, setEditDetails] = useState({
    id: "",
    fullname: "",
    storageType: "",
    comment: "",
  });

  const addVehicleHandler = async (vehicleData, resetForm) => {
    setIsLoading(true);
    setIsError(false);
    setIsSubmitted(false);
    try {
      await axios(
        `https://gta-owned-vehicles-default-rtdb.firebaseio.com/users/${
          user.uid
        }.json?auth=${await user.getIdToken()}`,
        {
          method: "POST",
          data: vehicleData,
        }
      );
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
    setIsSubmitted(true);
    getVehiclesHandler();
    resetForm();
  };

  const updateVehicleHandler = async (vehicleData, id, resetForm) => {
    setIsLoading(true);
    setIsError(false);
    setIsSubmitted(false);
    try {
      await axios(
        `https://gta-owned-vehicles-default-rtdb.firebaseio.com/users/${
          user.uid
        }/${id}.json?auth=${await user.getIdToken()}`,
        {
          method: "PUT",
          data: vehicleData,
        }
      );
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
    setIsSubmitted(true);
    getVehiclesHandler();
    // resetForm();
  };

  const deleteVehicleHandler = async (id, resetForm) => {
    setIsLoading(true);
    setIsError(false);
    setIsSubmitted(false);
    try {
      await axios(
        `https://gta-owned-vehicles-default-rtdb.firebaseio.com/users/${
          user.uid
        }/${id}.json?auth=${await user.getIdToken()}`,
        {
          method: "DELETE",
        }
      );
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
    setIsSubmitted(true);
    getVehiclesHandler();
    setIsDeleted(true);
    resetForm();
  };

  const getVehiclesHandler = useCallback(async () => {
    const vehicles = [];
    try {
      const response = await axios(
        `https://gta-owned-vehicles-default-rtdb.firebaseio.com/users/${
          user.uid
        }.json?auth=${await user.getIdToken()}`
      );
      for (let key in response.data) {
        vehicles.push({
          ...loadedVehicles[response.data[key].fullname],
          ...response.data[key],
          id: key,
        });
      }
      setVehiclesData(vehicles);
    } catch (error) {
      console.log(error);
    }
  }, [user, loadedVehicles]);

  useEffect(() => {
    getVehiclesHandler();
  }, [getVehiclesHandler]);

  const handleOpen = () => setOpenVehicleModal(true);
  const handleClose = () => {
    setOpenVehicleModal(false);
    setEdit(false);
    setIsLoading(false);
    setIsSubmitted(false);
    setIsError(false);
    setIsDeleted(false);
  };

  const vehicleEditHandler = (vehicleDetails) => {
    setEditDetails({...vehicleDetails});
    setEdit(true);
    setOpenVehicleModal(true);
  };

  const addButton = (
    <div style={{textAlign: "center"}}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          marginTop: "1rem",
          color: "#eee",
          ":hover": {
            backgroundColor: "#452c63",
          },
        }}
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

  const help = (
    <div
      style={{
        maxWidth: 495,
        margin: "auto",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight: "bold"}}>Help</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul style={{paddingLeft: "1rem"}}>
            <li>
              You can sort/filter based on vehicle properties in the table
            </li>
            <li>In the table, single click on a vehicle to see it's details</li>
            <li>Double click on a vehicle to edit/delete it</li>
          </ul>
          <p style={{fontStyle: "italic"}}>Data is gathered from gtacars.net</p>
          <a href="https://github.com/lullabyX/my-gta-vehicles">
            <GitHubIcon sx={{color: "black"}} />
          </a>
        </AccordionDetails>
      </Accordion>
    </div>
  );

  const detailShowHandler = (id) => {
    const detail = vehiclesData.filter((data) => data.id === id);
    setDetailContent(<VehicleDetail detail={detail[0]} />);
  };

  return (
    <div className={classes.grid}>
      <div className={classes.left}>
        {/* <VehicleAddSC onGetVehicles={getVehiclesHandler} /> */}
        <div>
          <ThemeProvider theme={darkTheme}>
            <VehicleTable
              onEdit={vehicleEditHandler}
              onRowSingleClick={detailShowHandler}
              rows={vehiclesData}
            />
          </ThemeProvider>
          {addButton}
        </div>
        <VehicleModal
          open={openVehicleModal}
          onClose={handleClose}
          editMode={edit}
          editDetails={editDetails}
          onAddVehicle={addVehicleHandler}
          onUpdateVehicle={updateVehicleHandler}
          onDeleteVehicle={deleteVehicleHandler}
          isLoading={isLoading}
          isError={isError}
          isSubmitted={isSubmitted}
          isDeleted={isDeleted}
        />
      </div>
      <div className={classes.right}>{detailContent}</div>
      <div className={classes.help}>{help}</div>
    </div>
  );
};

export default Vehicles;
