"use client";

import { Button, Chip, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useRouter } from "next/navigation";
import { useBloodRequestToMeQuery } from "@/redux/api/donorApi";

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
    headerName: "Donor Name",
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
    renderCell: ({ row }) => {
      return (
        <Chip
          label={row.requestStatus}
          color={row.requestStatus === "APPROVED" ? "primary" : "warning"}
          size="small"
        />
      );
    },
  },
  {
    field: "DonorDetails",
    headerName: "Donors Contact Details",
    headerAlign: "center",
    align: "center",
    flex: 1,
    renderCell: ({ row }) => {
      const viewContactDetails = () => {
        row.router.push(`/dashboard/profile/${row.donorId}`);
      };

      return (
        <Button
          size="small"
          variant="outlined"
          disabled={row.requestStatus !== "APPROVED"}
          onClick={viewContactDetails}
        >
          Details
        </Button>
      );
    },
  },
];

const MyRequestsPage = () => {
  const { data, isLoading } = useBloodRequestToMeQuery({});
  console.log("donner", data);
  const router = useRouter();

  const rows = data?.map((row: any) => ({
    id: row.id,
    donorId: row.donorId,
    name: row?.donor?.name || "",
    bloodType: row?.donor?.bloodType,
    requestStatus: row?.requestStatus,
    router: router,
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

export default MyRequestsPage;
