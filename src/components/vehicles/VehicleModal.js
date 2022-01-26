import * as React from "react";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import VehicleForm from "./VehicleForm";

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
          <VehicleForm
            onClose={props.onClose}
            editMode={props.editMode}
            editDetails={props.editDetails}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default VehicleModal;
