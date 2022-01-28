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
