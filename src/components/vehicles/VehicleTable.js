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
    width: 90,
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
    category: "Sports",
    type: "Air",
  },
  {
    id: "m2",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "Water",
  },
  {
    id: "m3",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "Ground",
  },
  {
    id: "m4",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "Ground",
  },
  {
    id: "m5",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "Ground",
  },
  {
    id: "m6",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "Ground",
  },
  {
    id: "m7",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "Ground",
  },
  {
    id: "m8",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "GroundAndWaterAndAir",
  },
];

export default function VehicleTable() {
  return (
    <Card
      sx={{
        height: 550,
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
        rows={rows}
        columns={columns}
        density="compact"
        editMode="row"
      />
    </Card>
  );
}
