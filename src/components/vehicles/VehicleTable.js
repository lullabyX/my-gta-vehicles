import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card } from "@mui/material";

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
  },
];

const rows = [
  {
    id: "m1",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "Ground",
  },
  {
    id: "m1",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "Ground",
  },
  {
    id: "m1",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "Ground",
  },
  {
    id: "m1",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "Ground",
  },
  {
    id: "m1",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "Ground",
  },
  {
    id: "m1",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "Ground",
  },
  {
    id: "m1",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "Ground",
  },
  {
    id: "m1",
    name: "Kuruma(Armored)",
    storage: "Arcade",
    category: "Sports",
    type: "Ground",
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
