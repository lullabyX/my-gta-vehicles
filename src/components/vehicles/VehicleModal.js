import * as React from "react";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import VehicleForm from "./VehicleForm";
import {
  CancelOutlined,
  CheckCircleOutline,
  DeleteForeverRounded,
  HourglassBottom,
} from "@mui/icons-material";
import classes from "./VehicleModal.module.css";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "1px solid purple",
  borderRadius: "12px",
  padding: "1rem",
  boxShadow: 24,
  p: 4,
};

const VehicleModal = (props) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Box sx={style}>
          {!props.isDeleted && (
            <div className={classes.container}>
              {props.isLoading && (
                <h2 style={{ color: "purple" }}>
                  {props.editMode ? "Updating..." : "Adding..."}
                  <HourglassBottom />
                </h2>
              )}
              {props.isSubmitted && !props.isError && (
                <h2 style={{ color: "green" }}>
                  Vehical {props.editMode ? "Updated" : "Added"}
                  <CheckCircleOutline />
                </h2>
              )}
              {props.isError && (
                <h2 style={{ color: "red" }}>
                  Something went wrong, try again
                  <CancelOutlined />
                </h2>
              )}
              {/* </div> */}

              <h2>{props.editMode ? "Update" : "Add"} Vehicle</h2>
              <VehicleForm
                onClose={props.onClose}
                editMode={props.editMode}
                editDetails={props.editDetails}
                onAddVehicle={props.onAddVehicle}
                onUpdateVehicle={props.onUpdateVehicle}
                onDeleteVehicle={props.onDeleteVehicle}
              />
            </div>
          )}
          {props.isDeleted && (
            <div>
              <h2 style={{ color: "#e3242b" }}>
                Vehicle Deleted
                <DeleteForeverRounded />
              </h2>
              <div style={{ textAlign: "right" }}>
                <Button
                  sx={{
                    backgroundColor: "#ccc",
                    marginTop: "1rem",
                    color: "black",
                    border: "1px solid black",
                    padding: ".25rem",
                  }}
                  onClick={props.onClose}
                >
                  close
                </Button>
              </div>
            </div>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default VehicleModal;
