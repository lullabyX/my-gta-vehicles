import { Add } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import VehicleTable from "./VehicleTable";
import VehicleModal from "./VehicleModal";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";
import AuthContext from "../../store/auth-context";

const Vehicles = (props) => {
  const { user } = useContext(AuthContext);
  const [openVehicleModal, setOpenVehicleModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [commentContent, setCommentContent] = useState(<></>);
  const [vehiclesData, setVehiclesData] = useState([]);

  const [editDetails, setEditDetails] = useState({
    id: "",
    name: "",
    storage: "",
    category: "",
    type: "",
    comment: "",
  });

  const addVehicleHandler = async (vehicleData) => {
    try {
      const response = await axios(
        `https://gta-owned-vehicles-default-rtdb.firebaseio.com/users/${
          user.uid
        }.json?auth=${await user.getIdToken()}`,
        {
          method: "POST",
          data: vehicleData,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    getVehiclesHandler();
  };

  const updateVehicleHandler = async (vehicleData, id) => {
    try {
      const response = await axios(
        `https://gta-owned-vehicles-default-rtdb.firebaseio.com/users/${
          user.uid
        }/${id}.json?auth=${await user.getIdToken()}`,
        {
          method: "PUT",
          data: vehicleData,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    getVehiclesHandler();
  };

  const getVehiclesHandler = async () => {
    const vehicles = [];
    try {
      const response = await axios(
        `https://gta-owned-vehicles-default-rtdb.firebaseio.com/users/${
          user.uid
        }.json?auth=${await user.getIdToken()}`
      );
      console.log(response);
      for (let key in response.data) {
        vehicles.push({ ...response.data[key], id: key });
      }
      setVehiclesData(vehicles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVehiclesHandler();
  }, []);

  const handleOpen = () => setOpenVehicleModal(true);
  const handleClose = () => {
    setOpenVehicleModal(false);
    setEdit(false);
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

  const commentShowHandler = (comment) => {
    if (comment && comment.length > 0) {
      setCommentContent(
        <Card
          sx={{
            maxWidth: 500,
            margin: "auto",
            marginTop: ".5rem",
            boxShadow: "2px 2px 0 rgba(0, 0, 0, 0.25)",
            padding: ".25rem",
            borderRadius: "12px",
          }}
        >
          <div style={{ padding: "1rem", marginTop: ".25rem" }}>
            <p>{comment}</p>
          </div>
        </Card>
      );
    } else {
      setCommentContent(<></>);
    }
  };

  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <VehicleTable
          onEdit={vehicleEditHandler}
          onRowSingleClick={commentShowHandler}
          rows={vehiclesData}
        />
        {commentContent}
      </ThemeProvider>
      {addButton}
      <VehicleModal
        open={openVehicleModal}
        onClose={handleClose}
        editMode={edit}
        editDetails={editDetails}
        onAddVehicle={addVehicleHandler}
        onUpdateVehicle={updateVehicleHandler}
      />
    </Fragment>
  );
};

export default Vehicles;
