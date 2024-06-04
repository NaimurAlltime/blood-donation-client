"use client";

import { Button, CssBaseline, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <>
      <CssBaseline />
      <Stack height="100vh" justifyContent="center" alignItems="center">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          maxWidth="600px"
          px={4}
          height="200px"
          sx={{ border: "1px solid #808080", borderRadius: ".6rem" }}
        >
          <Typography variant="h4" fontWeight="600">
            404! Not Found...
          </Typography>
          <Stack justifyContent="center" mt={1}>
            <Button onClick={() => router.back()}>Go back</Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default NotFoundPage;
