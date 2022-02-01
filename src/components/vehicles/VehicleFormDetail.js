import {CategoryRounded, CircleRounded, ConstructionRounded, MoneyRounded, ShoppingCartRounded, SpeedRounded} from "@mui/icons-material";
import classes from "./VehicleFormDetail.module.css";

const VehicleFormDetail = (props) => {
  return (
    <div className={classes.desc}>
      <div className={classes["desc-column"]}>
        <div className={classes["desc-keypair"]}>
          <div className={classes["desc-keypair--key"]}>
            <CategoryRounded style={{ fontSize: "14pt" }} />
          </div>
          <div className={classes["desc-keypair--value"]}>Super</div>
        </div>
        <div className={classes["desc-keypair"]}>
          <div className={classes["desc-keypair--key"]}>
            <SpeedRounded style={{ fontSize: "14pt" }} />
          </div>
          <div className={classes["desc-keypair--value"]}>142 km/h</div>
        </div>
      </div>
      <div className={classes["desc-column"]}>
        <div className={classes["desc-keypair"]}>
          <div className={classes["desc-keypair--key"]}>
            <ShoppingCartRounded style={{ fontSize: "14pt" }} />
          </div>
          <div className={classes["desc-keypair--value"]}>SSASA</div>
        </div>
        <div className={classes["desc-keypair"]}>
          <div className={classes["desc-keypair--key"]}>
            <MoneyRounded style={{ fontSize: "14pt" }} />
          </div>
          <div className={classes["desc-keypair--value"]}>$1,380,000</div>
        </div>
      </div>
      <div className={classes["desc-column"]}>
        <div className={classes["desc-keypair"]}>
          <div className={classes["desc-keypair--key"]}>
            <ConstructionRounded style={{ fontSize: "14pt" }} />
          </div>
          <div className={classes["desc-keypair--value"]}>LSC & AVW</div>
        </div>
        <div className={classes["desc-keypair"]}>
          <div className={classes["desc-keypair--key"]}>
            <CircleRounded style={{ fontSize: "14pt" }} />
          </div>
          <div className={classes["desc-keypair--value"]}>AWD</div>
        </div>
      </div>
    </div>
  );
};

export default VehicleFormDetail;
