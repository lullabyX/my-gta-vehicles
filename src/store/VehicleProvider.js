import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "./auth-context";
import VehicleContext from "./vehicle-context";

const VehicleProvider = (props) => {
  const [isVehicleLoaded, setIsVehicleLoaded] = useState(false);
  const [vehicles, setVehicles] = useState({});
  const [vehicleNames, setVehicleNames] = useState([]);

  const authCtx = useContext(AuthContext);
  const { user } = authCtx;

  const fetchAllVehicles = useCallback(async () => {
    try {
      const response = await axios(
        `https://gta-owned-vehicles-default-rtdb.firebaseio.com/vehicles.json?auth=${await user.getIdToken()}`
      );
      const vehicleNamesExtract = [];
      for (let key in response.data) {
        vehicleNamesExtract.push(key);
      }
      setVehicleNames(vehicleNamesExtract);
      setVehicles(response.data);
      setIsVehicleLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  useEffect(() => {
    fetchAllVehicles();
  }, [fetchAllVehicles]);

  return (
    <VehicleContext.Provider
      value={{
        vehicles: vehicles,
        vehicleNames: vehicleNames,
        isVehicleLoaded: isVehicleLoaded,
      }}
    >
      {props.children}
    </VehicleContext.Provider>
  );
};

export default VehicleProvider;
