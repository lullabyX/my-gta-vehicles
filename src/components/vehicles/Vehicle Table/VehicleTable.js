import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import VehicleTableToolbar from "./VehicleTableToolbar";
import { Card } from "@mui/material";
import {
  currencyFormat,
  dateFormat,
  getTypeIcon,
} from "../../../utils/functions";

const columns = [
  { field: "fullname", headerName: "Name", width: 210 },
  { field: "storageType", headerName: "Storage", width: 120 },
  {
    field: "class",
    headerName: "Class",
    width: 102,
  },
  {
    field: "type",
    headerName: "Type",
    width: 90,
    renderCell: (params) => getTypeIcon(params.formattedValue),
  },
  {
    field: "maxSpeed",
    headerName: "Top Speed",
    width: 100,
    type: "number",
    renderCell: (params) => `${params.formattedValue} km/h`,
  },
  {
    field: "cost",
    headerName: "Cost",
    width: 100,
    type: "number",
    renderCell: (params) => currencyFormat(params.formattedValue),
  },
  {
    field: "releaseDate",
    headerName: "Release Date",
    width: 150,
    type: "date",
    // align: 'left'
    renderCell: (params) => dateFormat(params.formattedValue),
  },
];

export default function VehicleTable(props) {
  const [pageSize, setPageSize] = React.useState(10);
  const rowDoubleClickHandler = (params) => {
    props.onEdit(params.row);
  };

  const rowSingleClickHandler = (params) => {
    props.onRowSingleClick(params.row.id);
  };

  return (
    <Card
      sx={{
        height: "calc(100vh - 64px - 96px - 60px)",
        minHeight: "500px",
        maxWidth: "895px",
        margin: "auto",
        marginTop: "10px",
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
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20, 50]}
        pagination
        components={{
          Toolbar: VehicleTableToolbar,
        }}
        componentsProps={{
          panel: {
            sx: {
              "& .MuiFormControl-root": {
                width: "auto",
              },
            },
          },
        }}
      />
    </Card>
  );
}
