import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import VehicleTable from "./Vehicle Table/VehicleTable";
import VehicleModal from "./New Vehicle/VehicleModal";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import VehicleContext from "../../store/vehicle-context";
import VehicleDetail from "./Detail/VehicleDetail";

const Vehicles = (props) => {
  const { user } = useContext(AuthContext);
  const [openVehicleModal, setOpenVehicleModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [detailContent, setDetailContent] = useState(<></>);
  const [vehiclesData, setVehiclesData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isDeleted, setIsDeleted] = useState(false);

  const { vehicles: loadedVehicles } = useContext(VehicleContext);

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
    setEditDetails({ ...vehicleDetails });
    setEdit(true);
    setOpenVehicleModal(true);
  };

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

  const detailShowHandler = (id) => {
    const detail = vehiclesData.filter((data) => data.id === id);
    setDetailContent(<VehicleDetail detail={detail[0]} />);
  };

  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <VehicleTable
          onEdit={vehicleEditHandler}
          onRowSingleClick={detailShowHandler}
          rows={vehiclesData}
        />
      </ThemeProvider>
      {addButton}
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
      {detailContent}
    </Fragment>
  );
};

export default Vehicles;
