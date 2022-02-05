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
import {
  currencyFormat,
  dateFormat,
  getSourceFullName,
  getTypeIcon,
  upgradeLocationFull,
} from "../../../utils/functions";
import classes from "./VehicleDetail.module.css";
import VehicleItem from "./VehicleItem";

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
          <h1>{`${props.detail.manufacturer} ${props.detail.vehicle}`}</h1>
        </div>
        {props.detail.comment.length > 0 && (
          <div className={classes.comment}>
            <h2>Comment</h2>
            <p>{props.detail.comment}</p>
          </div>
        )}
        <div className={classes["image-div"]}>
          <img
            src={props.detail.images.frontQuarter}
            alt={props.detail.vehicle}
          />
          <img
            src={props.detail.images.rearQuarter}
            alt={props.detail.vehicle}
          />
        </div>
        <div className={classes["list"]}>
          <ul>
            <VehicleItem
              icon={<LocalParkingRounded style={{ fontSize: "16pt" }} />}
              itemKey="Storage"
              value={props.detail.storageType}
            />
            <VehicleItem
              icon={<TerrainRounded style={{ fontSize: "16pt" }} />}
              itemKey="Type"
              value={getTypeIcon(props.detail.type)}
            />
            <VehicleItem
              icon={<CategoryRounded style={{ fontSize: "16pt" }} />}
              itemKey="Category"
              value={props.detail.category}
            />
            <VehicleItem
              icon={<LabelRounded style={{ fontSize: "16pt" }} />}
              itemKey="Name"
              value={props.detail.vehicle}
            />
            <VehicleItem
              icon={
                <PrecisionManufacturingRounded style={{ fontSize: "16pt" }} />
              }
              itemKey="Manufacturer"
              value={props.detail.manufacturer}
            />
            <VehicleItem
              icon={<SpeedRounded style={{ fontSize: "16pt" }} />}
              itemKey="Max Speed"
              value={`${props.detail.maxSpeed} km/h`}
            />
            <VehicleItem
              icon={<ShoppingCartRounded style={{ fontSize: "16pt" }} />}
              itemKey="Source"
              value={getSourceFullName(props.detail.source)}
            />
            <VehicleItem
              icon={<MoneyRounded style={{ fontSize: "16pt" }} />}
              itemKey="Cost"
              value={currencyFormat(props.detail.cost)}
            />
            <VehicleItem
              icon={<ConstructionRounded style={{ fontSize: "16pt" }} />}
              itemKey="Upgrade Location"
              value={upgradeLocationFull(props.detail.upgradeLocation)}
            />
            <VehicleItem
              icon={<FitnessCenterRounded style={{ fontSize: "16pt" }} />}
              itemKey="Mass"
              value={`${props.detail.mass} kg`}
            />
            <VehicleItem
              icon={<SettingsRounded style={{ fontSize: "16pt" }} />}
              itemKey="Drive Gears"
              value={props.detail.driveGears}
            />
            <VehicleItem
              icon={<CircleRounded style={{ fontSize: "16pt" }} />}
              itemKey="Drive Train"
              value={props.detail.drivetrain}
            />
            <VehicleItem
              icon={<ChairRounded style={{ fontSize: "16pt" }} />}
              itemKey="Seats"
              value={props.detail.seats}
            />
            <VehicleItem
              icon={<CalendarTodayRounded style={{ fontSize: "16pt" }} />}
              itemKey="Release Date"
              value={dateFormat(props.detail.releaseDate)}
            />
            <VehicleItem
              icon={<ExtensionRounded style={{ fontSize: "16pt" }} />}
              itemKey="DLC"
              value={props.detail.dlc}
            />
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleDetail;
