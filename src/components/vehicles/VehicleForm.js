import {
  Add,
  CloseRounded,
  DeleteForeverOutlined,
  UpgradeOutlined,
} from "@mui/icons-material";
import { Autocomplete, Button, MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import VehicleContext from "../../store/vehicle-context";
import { vehicleCategoris, vehicleTypes } from "../../utils/functions";
import useInput from "../hooks/use-input";

import classes from "./VehicleForm.module.css";
import VehicleFormDetail from "./VehicleFormDetail";

const VehicleForm = (props) => {
  const { editMode, editDetails } = props;
  const [category, setCategory] = React.useState("");
  const [type, setType] = React.useState("");

  const [vehicleName, setVehicleName] = React.useState(null);

  const vehicleCtx = useContext(VehicleContext);

  const vehicleNameAutoCompleteOptions = {
    options: vehicleCtx.vehicleNames,
  };

  const {
    value: vehicleStorage,
    setValue: setVehicleStorage,
    changeHandler: vehicleStorageChangeHandler,
    touchHandler: storageTouchHandler,
    reset: vehicleStorageReset,
    isInputValid: isVehicleStorageValid,
    hasError: storageHasError,
  } = useInput((value) => value.trim() !== "");

  const {
    value: vehicleComment,
    setValue: setVehicleComment,
    changeHandler: vehicleCommentChangeHandler,
    touchHandler: commentTouchHandler,
    reset: vehicleCommentReset,
    isInputValid: isVehicleCommentValid,
    hasError: commentHasError,
  } = useInput((value) => true);

  const isFormValid = isVehicleStorageValid && isVehicleCommentValid;

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const resetForm = () => {
    setCategory("");
    setType("");
    vehicleStorageReset();
    vehicleCommentReset();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    const vehicleDetail = {
      name: vehicleName.trim(),
      storage: vehicleStorage.trim(),
      category: category,
      type: type,
      comment: vehicleComment.trim(),
    };
    if (editMode) {
      props.onUpdateVehicle(vehicleDetail, editDetails.id, resetForm);
    } else {
      props.onAddVehicle(vehicleDetail, resetForm);
    }
  };

  const {
    name,
    storage,
    comment,
    category: editCategory,
    type: editType,
  } = editDetails;

  useEffect(() => {
    if (editMode) {
      setVehicleName(name);
      setVehicleStorage(storage);
      setVehicleComment(comment);
      setCategory(editCategory);
      setType(editType);
    }
  }, [
    editMode,
    name,
    storage,
    comment,
    editCategory,
    editType,
    setVehicleName,
    setVehicleStorage,
    setVehicleComment,
  ]);

  return (
    <form onSubmit={submitHandler}>
      <Box
        sx={{
          "& .MuiTextField-root": { margin: ".25rem 0rem", width: "25ch" },
          textAlign: "center",
        }}
      >
        <h2 className={classes.h2}>{`${
          props.editMode ? "Edit" : "Add"
        } Vehicle`}</h2>
        <div className={classes["form-container"]}>
          <div className={classes["form-container--inline"]}>
            <Autocomplete
              {...vehicleNameAutoCompleteOptions}
              id="controlled-autocomplete"
              value={vehicleName}
              onChange={(event, newValue) => {
                setVehicleName(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Vehicle Name"
                  variant="filled"
                  helperText="Please select your vehicle"
                  required
                />
              )}
            />
            <TextField
              id="filled-select-currency"
              select
              label="Type"
              value={type}
              onChange={handleChangeType}
              helperText="Please select your vehicle type"
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
          <div className={classes["form-container--inline"]}>
            {/* <TextField
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
          </TextField> */}

            <TextField
              error={storageHasError}
              id="outlined-basic"
              label="Storage"
              variant="outlined"
              onChange={vehicleStorageChangeHandler}
              onBlur={storageTouchHandler}
              value={vehicleStorage}
              helperText={
                storageHasError ? "Vehicle storage cannot be empty" : ""
              }
              required
            />
            <TextField
              edit={commentHasError}
              id="outlined-multiline-flexible"
              label="Comment"
              onChange={vehicleCommentChangeHandler}
              onBlur={commentTouchHandler}
              value={vehicleComment}
              multiline
              maxRows={5}
            />
          </div>
        </div>

        {/* <div className={classes.container}></div> */}
        <VehicleFormDetail />
      </Box>
      <div
        className={`${props.editMode ? classes.button : classes["button-add"]}`}
      >
        <Button
          sx={{
            backgroundColor: "#ccc",
            marginTop: "1rem",
            color: "black",
            border: "1px solid black",
            marginRight: ".5rem",
          }}
          color="secondary"
          onClick={props.onClose}
        >
          <CloseRounded />
        </Button>
        {props.editMode && (
          <Button
            sx={{
              backgroundColor: "red",
              marginTop: "1rem",
              color: "black",
              border: "1px solid red",
              marginRight: ".5rem",
            }}
            color="secondary"
            onClick={props.onDeleteVehicle.bind(
              "dummy",
              editDetails.id,
              resetForm.bind()
            )}
          >
            <DeleteForeverOutlined />
          </Button>
        )}
        <Button
          variant="contained"
          className={classes["button-update"]}
          sx={{
            backgroundColor: "black",
            marginTop: "1rem",
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
