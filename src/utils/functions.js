import {
  DirectionsBoat,
  DirectionsCar,
  FlightRounded,
} from "@mui/icons-material";

export const vehicleCategoris = [
  {
    value: "Boat",
    label: "Boat",
  },
  {
    value: "Cycle",
    label: "Cycle",
  },
  {
    value: "Military",
    label: "Military",
  },
  {
    value: "Plane",
    label: "Plane",
  },
  {
    value: "Sports Classic",
    label: "Sports Classic",
  },
  {
    value: "Commercial",
    label: "Commercial",
  },
  {
    value: "Emergency",
    label: "Emergency",
  },
  {
    value: "Motorcycle",
    label: "Motorcycle",
  },
  {
    value: "Sedan",
    label: "Sedan",
  },
  {
    value: "Special",
    label: "Special",
  },
  {
    value: "Utility",
    label: "Utility",
  },
  {
    value: "Compact",
    label: "Compact",
  },
  {
    value: "Helicopter",
    label: "Helicopter",
  },
  {
    value: "Muscle Car",
    label: "Muscle Car",
  },
  {
    value: "Service",
    label: "Service",
  },
  {
    value: "Super Car",
    label: "Super Car",
  },
  {
    value: "Van",
    label: "Van",
  },
  {
    value: "Coupe",
    label: "Coupe",
  },
  {
    value: "Industrial",
    label: "Industrial",
  },
  {
    value: "Off-Road",
    label: "Off-Road",
  },
  {
    value: "Sports Car",
    label: "Sports Car",
  },
  {
    value: "SUV",
    label: "SUV",
  },
];

export const vehicleTypes = [
  {
    value: "Ground",
    label: <DirectionsCar />,
  },
  {
    value: "Air",
    label: <FlightRounded />,
  },
  {
    value: "Water",
    label: <DirectionsBoat />,
  },
  {
    value: "GroundAndAir",
    label: (
      <div>
        <DirectionsCar />
        {/* <AddCircleOutlineOutlined fontSize="small" /> */}
        <FlightRounded />
      </div>
    ),
  },
  {
    value: "GroundAndWater",
    label: (
      <div>
        <DirectionsCar />
        {/* <AddCircleOutlineOutlined fontSize="small" /> */}
        <DirectionsBoat />
      </div>
    ),
  },
  {
    value: "WaterAndAir",
    label: (
      <div>
        <DirectionsBoat />
        {/* <AddCircleOutlineOutlined fontSize="small" /> */}
        <FlightRounded />
      </div>
    ),
  },
  {
    value: "GroundAndWaterAndAir",
    label: (
      <div>
        <DirectionsCar />
        {/* <AddCircleOutlineOutlined fontSize="small" /> */}
        <DirectionsBoat />
        {/* <AddCircleOutlineOutlined fontSize="small" /> */}
        <FlightRounded />
      </div>
    ),
  },
];

export const getTypeIcon = (typeValue) => {
  const type = vehicleTypes.filter((item) => item.value === typeValue);
  return type[0].label;
};

export const getSourceFullName = (source) => {
  let sourceFull = source
    .replace("SSASA", "Southern San Andreas Super Autos")
    .replace("L.Motorsport", "Legendary Motorsports")
    .replace("Warstock", "Warstock Cache & Carry")
    .replace("ArenaWar", "Arena War")
    .replace("P and M", "Pedal and Metal Cycles")
    .replace("Elitas Travel", "Elitás Travel")
    .replace("Benny's", "Benny's Original Motor Works");
  // switch (source) {
  //   case "SSASA":
  //     sourceFull = "Southern San Andreas Super Autos";
  //     break;
  //   case "L.Motorsport":
  //     sourceFull = "Legendary Motorsports";
  //     break;
  //   case "Warstock":
  //     sourceFull = "Warstock Cache & Carry";
  //     break;
  //   case "ArenaWar":
  //     sourceFull = "Arena War";
  //     break;
  //   case "MOC":
  //     sourceFull = "Mobile Operations Center";
  //     break;
  //   case "P and M":
  //     sourceFull = "Pedal and Metal Cycles";
  //     break;
  //   case "Elitas":
  //     sourceFull = "Elitás Travel";
  //     break;
  //   case "Benny's":
  //     sourceFull = "Benny's Original Motor Works";
  //     break;
  //   default:
  //     sourceFull = source;

  return sourceFull;
};

export const upgradeLocationFull = (location) => {
  let locationFull = location.replace(/LSC/g, "Los Santos Customs");
  locationFull = locationFull.replace(/Agency/g, "Agency Vehicle Workshop");
  locationFull = locationFull
    .replace(/MOC/g, "Mobile Operations Center")
    .replace("Benny's", "Benny's Original Motor Works");

  return locationFull;
};

export const dateFormat = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const currencyFormat = (money) =>
{
  if (isNaN(+money))
    return 'N/A'
  return (+money).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
};

export const slashFormat = (str) => {
  return str.replace(/Slash/g, "/");
};

export const retrieveVehicles = async (token) => {
  try {
    const response = await fetch("/api/fromsc", {
      method: "POST",
      body: JSON.stringify({token}),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

