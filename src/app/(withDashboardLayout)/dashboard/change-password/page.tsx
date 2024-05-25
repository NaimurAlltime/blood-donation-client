"use client";

import REForm from "@/components/Forms/REForm";
import REInput from "@/components/Forms/REInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import KeyIcon from "@mui/icons-material/Key";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const validationSchema = z
  .object({
    oldPassword: z.string().min(6, "Must be at least 6 characters long"),
    newPassword: z.string().min(6, "Must be at least 6 characters long"),
    confirmPassword: z.string().min(6, "Must be at least 6 characters long"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    try {
      const { oldPassword, newPassword } = values;
      const res = await changePassword({ oldPassword, newPassword });

      if ("data" in res && res.data.status === 200) {
        // removeUser();
        // router.refresh();
        toast.success("Password Changed Successfully");
      } else {
        throw new Error("Incorrect Old Password");
      }
    } catch (error) {
      toast.error("Incorrect Old Password");
      // console.log(error);
    }
  };

  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        maxWidth: 600,
        width: "100%",
        boxShadow: 1,
        borderRadius: 1,
        mx: "auto",
        mt: {
          xs: 2,
          md: 5,
        },
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Box
          sx={{
            "& svg": {
              width: 100,
              height: 100,
            },
          }}
        >
          <KeyIcon sx={{ color: "primary.main" }} />
        </Box>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mt: -1.5 }}>
          Change password
        </Typography>
      </Stack>
      <REForm
        onSubmit={onSubmit}
        defaultValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        resolver={zodResolver(validationSchema)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <REInput
              name="oldPassword"
              type="password"
              label="Old Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <REInput
              name="newPassword"
              type="password"
              label="New Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <REInput
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ width: "100%", my: 2 }}>
          Change Password
        </Button>
      </REForm>
    </Box>
  );
};

export default ChangePassword;
