"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import REInput from "@/components/Forms/REInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import REForm from "@/components/Forms/REForm";
import { validationSchema } from "@/validation/loginvalidationSchema";

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const defaultValues = {
    usernameOrEmail: "",
    password: "",
  };

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);

      // Check if res.data and res.data.token exist
      if (res?.data?.token) {
        toast.success(res?.message);
        storeUserInfo({ token: res.data.token });
        // router.push("/dashboard");
        router.refresh();
      } else {
        // Handle the case where res.data or res.data.token is undefined
        const errorMsg = res?.message || "An error occurred during login.";
        setError(errorMsg);
      }
    } catch (err: any) {
      setError(err.message || "Internal Server Error");
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image
                src={assets.images.logo}
                width={120}
                height={120}
                alt="logo"
              />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login Form
              </Typography>
            </Box>
          </Stack>

          {error && (
            <Box sx={{ backgroundColor: "red", p: 1, borderRadius: 1, mt: 1 }}>
              <Typography color="white">{error}</Typography>
            </Box>
          )}

          <Box>
            <REForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item xs={12} md={6}>
                  <REInput
                    name="usernameOrEmail"
                    label="Username OR Email"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <REInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Typography mb={1} textAlign="end" component="p" fontWeight={300}>
                Forgot Password?
              </Typography>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth
                type="submit"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-blue-500">
                  <Box component="span" color="primary.main">
                    Create an account
                  </Box>
                </Link>
              </Typography>
            </REForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
