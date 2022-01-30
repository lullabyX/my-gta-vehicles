import classes from "./VehicleItem.module.css";

const VehicleItem = (props) => {
  return (
    <li className={classes["item-view"]}>
      <div className={classes["item-view--icon"]}>{props.icon}</div>
      <div className={classes["item-view--key"]}>{props.itemKey}:</div>
      <div className={classes["item-view--value"]}>{props.value}</div>
    </li>
  );
};

export default VehicleItem;
