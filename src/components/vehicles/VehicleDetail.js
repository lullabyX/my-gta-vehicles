import {
  CalendarTodayRounded,
  CategoryRounded,
  ChairRounded,
  CircleRounded,
  ConstructionRounded,
  ExtensionRounded,
  FitnessCenterRounded,
  LabelRounded,
  LocalParkingRounded,
  MoneyRounded,
  PrecisionManufacturingRounded,
  SettingsRounded,
  ShoppingCartRounded,
  SpeedRounded,
  TerrainRounded,
} from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";
import classes from "./VehicleDetail.module.css";
import VehicleItem from "./VehicleItem";
const dummy_vehicle = {
  type: "SUVs",
  vehicle: "Granger 3600LX",
  mass: "2100",
  driveGears: "4",
  maxSpeedTheoretical: "142",
  drivetrain: "AWD",
  seats: "8",
  manufacturer: "Declasse",
  source: "SSASA",
  cost: "1380000",
  storageType: "Garage",
  upgradeLocation: "LSC & AVW",
  releaseDate: "2021-12-15T23:00:00.000Z",
  releaseYear: "2021",
  dlc: "The Contract",
  Desc: null,
  comment: "Black livelry Black livelry Black livelry Black livelry",
};

const dateFormat = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const currencyFormat = (money) => {
  return (+money).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
};

const VehicleDetail = (props) => {
  return (
    <Card
      sx={{
        maxWidth: 490,
        margin: "auto",
        marginTop: "10px",
        boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.25)",
        padding: ".25rem",
      }}
    >
      <CardContent>
        <div>
          <h1>{`${dummy_vehicle.manufacturer} ${dummy_vehicle.vehicle}`}</h1>
        </div>
        <div className={classes.comment}>
          <h2>Comment</h2>
          <p>{dummy_vehicle.comment}</p>
        </div>
        <div className={classes["list"]}>
          <ul>
            <VehicleItem
              icon={<LocalParkingRounded style={{ fontSize: "16pt" }} />}
              itemKey="Storage"
              value={dummy_vehicle.storageType}
            />
            <VehicleItem
              icon={<TerrainRounded style={{ fontSize: "16pt" }} />}
              itemKey="Type"
              value={dummy_vehicle.type}
            />
            <VehicleItem
              icon={<CategoryRounded style={{ fontSize: "16pt" }} />}
              itemKey="Category"
              value={dummy_vehicle.type}
            />
            <VehicleItem
              icon={<LabelRounded style={{ fontSize: "16pt" }} />}
              itemKey="Name"
              value={dummy_vehicle.vehicle}
            />
            <VehicleItem
              icon={
                <PrecisionManufacturingRounded style={{ fontSize: "16pt" }} />
              }
              itemKey="Manufacturer"
              value={dummy_vehicle.manufacturer}
            />
            <VehicleItem
              icon={<SpeedRounded style={{ fontSize: "16pt" }} />}
              itemKey="Max Speed"
              value={`${dummy_vehicle.maxSpeedTheoretical} km/h`}
            />
            <VehicleItem
              icon={<ShoppingCartRounded style={{ fontSize: "16pt" }} />}
              itemKey="Source"
              value={dummy_vehicle.source}
            />
            <VehicleItem
              icon={<MoneyRounded style={{ fontSize: "16pt" }} />}
              itemKey="Cost"
              value={currencyFormat(dummy_vehicle.cost)}
            />
            <VehicleItem
              icon={<ConstructionRounded style={{ fontSize: "16pt" }} />}
              itemKey="Upgrade Location"
              value={dummy_vehicle.upgradeLocation}
            />
            <VehicleItem
              icon={<FitnessCenterRounded style={{ fontSize: "16pt" }} />}
              itemKey="Mass"
              value={dummy_vehicle.mass}
            />
            <VehicleItem
              icon={<SettingsRounded style={{ fontSize: "16pt" }} />}
              itemKey="Drive Gears"
              value={dummy_vehicle.driveGears}
            />
            <VehicleItem
              icon={<CircleRounded style={{ fontSize: "16pt" }} />}
              itemKey="Drive Train"
              value={dummy_vehicle.drivetrain}
            />
            <VehicleItem
              icon={<ChairRounded style={{ fontSize: "16pt" }} />}
              itemKey="Seats"
              value={dummy_vehicle.seats}
            />
            <VehicleItem
              icon={<CalendarTodayRounded style={{ fontSize: "16pt" }} />}
              itemKey="Release Date"
              value={dateFormat(dummy_vehicle.releaseDate)}
            />
            <VehicleItem
              icon={<ExtensionRounded style={{ fontSize: "16pt" }} />}
              itemKey="DLC"
              value={dummy_vehicle.dlc}
            />
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleDetail;
