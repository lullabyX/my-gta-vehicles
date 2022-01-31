import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "./auth-context";
import VehicleContext from "./vehicle-context";

const VehicleProvider = (props) => {
  const [vehicles, setVehicles] = useState({});

  const authCtx = useContext(AuthContext);
  const { user } = authCtx;

  const fetchAllVehicles = useCallback(async () => {
    try {
      const response = await axios(
        `https://gta-owned-vehicles-default-rtdb.firebaseio.com/vehicles/.json?auth=${await user.getIdToken()}`
      );
      setVehicles(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  useEffect(() => {
    fetchAllVehicles();
  }, [fetchAllVehicles]);

  return (
    <VehicleContext.Provider value={{ vehicles: vehicles }}>
      {props.children}
    </VehicleContext.Provider>
  );
};

export default VehicleProvider;
