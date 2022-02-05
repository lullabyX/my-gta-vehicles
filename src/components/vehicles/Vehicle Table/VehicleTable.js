import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card } from "@mui/material";
import { getTypeIcon } from "../../../utils/functions";

const columns = [
  { field: "fullname", headerName: "Name", width: 200 },
  { field: "storageType", headerName: "Storage", width: 120 },
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
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20, 50]}
        pagination
      />
    </Card>
  );
}
