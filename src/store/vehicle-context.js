import React from "react";

const VehicleContext = React.createContext({
  isVehicleLoaded: false,
  vehicles: {},
  vehicleNames: [],
});

export default VehicleContext;
