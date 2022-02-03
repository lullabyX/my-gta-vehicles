import {
  CategoryRounded,
  CircleRounded,
  ConstructionRounded,
  MoneyRounded,
  ShoppingCartRounded,
  SpeedRounded,
} from "@mui/icons-material";
import { currencyFormat } from "../../../utils/functions";
import classes from "./VehicleFormDetail.module.css";

const VehicleFormDetail = ({ currentVehicle }) => {
  const {
    category: vehicleClass,
    drivetrain,
    maxSpeed,
    source,
    upgradeLocation,
    cost,
  } = currentVehicle;
  return (
    <div className={classes.desc}>
      <div className={classes["desc-column"]}>
        <div className={classes["desc-keypair"]}>
          <div className={classes["desc-keypair--key"]}>
            <CategoryRounded style={{ fontSize: "14pt" }} />
          </div>
          <div className={classes["desc-keypair--value"]}>{vehicleClass}</div>
        </div>
        <div className={classes["desc-keypair"]}>
          <div className={classes["desc-keypair--key"]}>
            <SpeedRounded style={{ fontSize: "14pt" }} />
          </div>
          <div
            className={classes["desc-keypair--value"]}
          >{`${maxSpeed} km/h`}</div>
        </div>
      </div>
      <div className={classes["desc-column"]}>
        <div className={classes["desc-keypair"]}>
          <div className={classes["desc-keypair--key"]}>
            <ShoppingCartRounded style={{ fontSize: "14pt" }} />
          </div>
          <div className={classes["desc-keypair--value"]}>{source}</div>
        </div>
        <div className={classes["desc-keypair"]}>
          <div className={classes["desc-keypair--key"]}>
            <MoneyRounded style={{ fontSize: "14pt" }} />
          </div>
          <div className={classes["desc-keypair--value"]}>
            {currencyFormat(cost)}
          </div>
        </div>
      </div>
      <div className={classes["desc-column"]}>
        <div className={classes["desc-keypair"]}>
          <div className={classes["desc-keypair--key"]}>
            <ConstructionRounded style={{ fontSize: "14pt" }} />
          </div>
          <div className={classes["desc-keypair--value"]}>
            {upgradeLocation}
          </div>
        </div>
        <div className={classes["desc-keypair"]}>
          <div className={classes["desc-keypair--key"]}>
            <CircleRounded style={{ fontSize: "14pt" }} />
          </div>
          <div className={classes["desc-keypair--value"]}>{drivetrain}</div>
        </div>
      </div>
    </div>
  );
};

export default VehicleFormDetail;
