"use client";

import {
  useGetMyBloodRequestsQuery,
  useUpdateMyBloodRequestStatusMutation,
} from "@/redux/api/donorApi";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { toast } from "sonner";

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .ant-empty-img-1": {
    fill: theme.palette.primary.main,
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.secondary.main,
  },
  "& .ant-empty-img-3": {
    fill: "#434343",
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.primary.light,
  },
  "& .ant-empty-img-5": {
    fillOpacity: "1",
    fill: theme.palette.primary.main,
  },
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <Box sx={{ mt: 1, fontSize: "24px" }}>
        You Have not create any requests...!!!
      </Box>
    </StyledGridOverlay>
  );
}

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Requester Name",
    headerAlign: "left",
    align: "left",
    flex: 1,
  },
  {
    field: "bloodType",
    headerName: "Blood Group",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
  {
    field: "requestStatus",
    headerName: "Status",
    headerAlign: "center",
    align: "center",
    flex: 1,
    renderCell: (params: GridRenderCellParams<any, Date>) => {
      const handleChange = async (event: SelectChangeEvent) => {
        await params.row.handleUpdateStatus(params.row.id, event.target.value);
      };

      return (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          value={params.row.requestStatus}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="PENDING">PENDING</MenuItem>
          <MenuItem value="APPROVED">APPROVED</MenuItem>
        </Select>
      );
    },
  },
];

const BloodRequestPage = () => {
  const { data, isLoading } = useGetMyBloodRequestsQuery({});
  const [updateStatus] = useUpdateMyBloodRequestStatusMutation();

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      const res = await updateStatus({ id, payload: { status } }).unwrap();

      // console.log("u status", res);

      if (res.id) {
        toast.success("Request Accepted");
      }
    } catch (error) {
      toast.error("Failed to Accepted...");
    }
  };

  const rows = data?.map((row: any) => ({
    id: row?.id,
    name: row?.requester?.name,
    bloodType: row?.requester?.bloodType,
    requestStatus: row?.requestStatus,
    handleUpdateStatus: handleUpdateStatus,
  }));

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        hideFooter
        loading={isLoading}
        hideFooterPagination
        columns={columns}
        rows={rows || []}
        slots={{ noRowsOverlay: CustomNoRowsOverlay }}
        sx={{
          "--DataGrid-overlayHeight": "300px",
        }}
      />
    </Box>
  );
};

export default BloodRequestPage;
