import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useAuth } from "../../store/auth"
import { useState,useEffect } from "react";

const Users = () => {

  const { users } = useAuth();
  const [dataResult, setDataResult] = useState([]);

  useEffect(() => {
      const updatedData = users.map(row => ({
          ...row,
          id: row.id || generateUniqueId(),
      }));
      setDataResult(updatedData);
  }, [users]);


  const columns = [

    {
      field: "username",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "gender",
      headerName: "Sex",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Mobile",
      flex: 1,
    },
    {
      field: "govtIdType",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "govtid",
      headerName: "ID Number",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "state",
      headerName: "State",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },

    {
      field: "country",
      headerName: "Country",
      flex: 1,
    },
    {
      field: "pin",
      headerName: "Pin-Code",
      flex: 0.5,
      headerAlign: "left",
      align: "left",
    },

  ];

  const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};


  return <Box m="20px">

    <Box
      m="40px 0 0 0"
      height="75vh"
    >
      <DataGrid
        rows={dataResult}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        getRowId={(row) => row.id}
      />
    </Box>

  </Box>
}

export default Users