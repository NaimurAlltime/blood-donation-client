import { Box, CircularProgress, Stack } from "@mui/material";
import Image from "next/image";
import spinner from "@/assets/loading.svg";

const Loader = () => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100%" my={10}>
      <Box width="200px" height="200px">
        {/* <Image
          src={spinner}
          alt="Loading..."
          width={200}
          height={200}
          layout="responsive"
        /> */}
        <CircularProgress size={40} />
      </Box>
    </Stack>
  );
};

export default Loader;
