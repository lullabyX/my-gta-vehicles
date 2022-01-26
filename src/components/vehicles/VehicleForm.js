import { Add, CloseRounded, UpgradeOutlined } from "@mui/icons-material";
import { Button, MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { vehicleCategoris, vehicleTypes } from "./VehicleCategories";
import useInput from "../../hooks/use-input";

const VehicleForm = (props) => {
  const { editMode, editDetails } = props;
  const [category, setCategory] = React.useState("");
  const [type, setType] = React.useState("");

  const vehicleNameInput = useInput((value) => value.trim() !== "");
  const vehicleStorageInput = useInput((value) => value.trim() !== "");
  const vehicleCommentInput = useInput((value) => true);

  const isFormValid =
    vehicleNameInput.isInputValid &&
    vehicleStorageInput.isInputValid &&
    vehicleCommentInput.isInputValid;

  console.log(isFormValid);

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    const vehicleDetail = {
      name: vehicleNameInput.value.trim(),
      storage: vehicleStorageInput.value.trim(),
      category: category,
      type: type,
      comment: vehicleCommentInput.value,
    };
    if (editMode) {
      props.onUpdateVehicle(vehicleDetail, editDetails.id);
    } else {
      props.onAddVehicle(vehicleDetail);
    }
  };

  useEffect(() => {
    console.log(editDetails);
    if (editMode) {
      vehicleNameInput.setValue(editDetails.name);
      vehicleStorageInput.setValue(editDetails.storage);
      vehicleCommentInput.setValue(editDetails.comment);
      setCategory(editDetails.category);
      setType(editDetails.type);
    }
  }, [editMode]);

  return (
    <form onSubmit={submitHandler}>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          textAlign: "center",
        }}
      >
        <div>
          <TextField
            error={vehicleNameInput.hasError}
            id="outlined-basic"
            label="Vehicle Name"
            variant="outlined"
            onChange={vehicleNameInput.changeHandler}
            onBlur={vehicleNameInput.touchHandler}
            value={vehicleNameInput.value}
            helperText={
              vehicleNameInput.hasError ? "Vehicle name cannot be empty" : ""
            }
            required
          />
          <TextField
            error={vehicleStorageInput.hasError}
            id="outlined-basic"
            label="Storage"
            variant="outlined"
            onChange={vehicleStorageInput.changeHandler}
            onBlur={vehicleStorageInput.touchHandler}
            value={vehicleStorageInput.value}
            helperText={
              vehicleStorageInput.hasError
                ? "Vehicle storage cannot be empty"
                : ""
            }
            required
          />
        </div>
        <div>
          <TextField
            id="filled-select-currency"
            select
            label="Category"
            value={category}
            onChange={handleChangeCategory}
            helperText="Select your vehicle category"
            variant="filled"
            required
          >
            {vehicleCategoris.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="filled-select-currency"
            select
            label="Type"
            value={type}
            onChange={handleChangeType}
            helperText="Select your vehicle type"
            variant="filled"
            required
          >
            {vehicleTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div style={{ width: 100 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Comment"
            onChange={vehicleCommentInput.changeHandler}
            onBlur={vehicleCommentInput.touchHandler}
            value={vehicleCommentInput.value}
            multiline
            maxRows={5}
          />
        </div>
      </Box>
      <div style={{ textAlign: "right" }}>
        <Button
          sx={{
            backgroundColor: "#ccc",
            marginTop: "1rem",
            color: "black",
            border: "1px solid black",
            marginRight: ".5rem",
          }}
          startIcon={<CloseRounded />}
          color="secondary"
          onClick={props.onClose}
        >
          Close
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            marginTop: "1rem",
            color: "#eee",
            border: "1px solid black",
          }}
          startIcon={editMode ? <UpgradeOutlined /> : <Add />}
          color="secondary"
          type="submit"
        >
          {editMode ? "Update" : "Add"}
        </Button>
      </div>
    </form>
  );
};

export default VehicleForm;
