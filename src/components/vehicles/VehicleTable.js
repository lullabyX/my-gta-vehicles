import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card } from "@mui/material";
import { getTypeIcon } from "./VehicleCategories";

const columns = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "storage", headerName: "Storage", width: 100 },
  {
    field: "category",
    headerName: "Category",
    width: 102,
  },
  {
    field: "type",
    headerName: "Type",
    width: 90,
    renderCell: (params) => getTypeIcon(params.formattedValue),
  },
];

const rows = [
  {
    id: "m1",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports Car",
    type: "Air",
  },
  {
    id: "m2",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports Car",
    type: "Water",
  },
  {
    id: "m3",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports Car",
    type: "Ground",
  },
  {
    id: "m4",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports Car",
    type: "Ground",
  },
  {
    id: "m5",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports Car",
    type: "Ground",
  },
  {
    id: "m6",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports Car",
    type: "Ground",
    comment: "",
  },
  {
    id: "m7",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports Classic",
    type: "Ground",
    comment: "npc cannot destroy",
  },
  {
    id: "m8",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports Car",
    type: "GroundAndWaterAndAir",
    comment: "dummy comment 1",
  },
];

export default function VehicleTable(props) {
  const rowDoubleClickHandler = (params) => {
    console.log(params);
    props.onEdit(params.row);
  };

  const rowSingleClickHandler = (params) => {
    console.log(params);
    props.onRowSingleClick(params.row.comment);
  };

  return (
    <Card
      sx={{
        height: 450,
        maxWidth: 500,
        margin: "auto",
        marginTop: "2%",
        backgroundColor: "#222",
        boxShadow: "16px black",
        padding: ".25rem",
      }}
    >
      <DataGrid
        sx={{ color: "white" }}
        rows={props.rows}
        columns={columns}
        density="compact"
        editMode="row"
        onRowDoubleClick={rowDoubleClickHandler}
        onRowClick={rowSingleClickHandler}
      />
    </Card>
  );
}
