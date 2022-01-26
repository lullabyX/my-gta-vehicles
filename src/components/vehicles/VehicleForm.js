import { Add, CloseRounded } from "@mui/icons-material";
import { Button, MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { vehicleCategoris, vehicleTypes } from "./VehicleCategories";

const VehicleForm = (props) => {
  const [category, setCategory] = React.useState("");
  const [type, setType] = React.useState("");

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("event triggered");
  };

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
            id="outlined-basic"
            label="Vehicle Name"
            variant="outlined"
            required
          />
          <TextField
            id="outlined-basic"
            label="Storage"
            variant="outlined"
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
          startIcon={<Add />}
          color="secondary"
          type="submit"
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default VehicleForm;
