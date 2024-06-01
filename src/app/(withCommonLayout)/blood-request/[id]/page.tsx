"use client";

import RECheckBox from "@/components/Forms/RECheckBox";
import REDatePicker from "@/components/Forms/REDatePicker";
import REForm from "@/components/Forms/REForm";
import REInput from "@/components/Forms/REInput";
import { useCreateBloodRequestMutation } from "@/redux/api/donorApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
import assets from "@/assets";

const validationSchema = z.object({
  donorId: z.string(),
  phoneNumber: z.string().min(1, "Please enter your Phone number!"),
  dateOfDonation: z.date({
    message: "Provide a valid date of donation!",
  }),
  hospitalName: z.string().min(1, "Please enter Hospital name!"),
  hospitalAddress: z.string().min(1, "Please enter your hospital address!"),
  reason: z.string().min(1, "Please enter the reason"),
  termsAndCondition: z.literal(true),
});

const BloodRequestPage = ({ params }: { params: { id: string } }) => {
  const [createBloodRequest] = useCreateBloodRequestMutation();
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    // console.log(values);
    try {
      const res = await createBloodRequest(values).unwrap();
      // console.log(res);

      if (res?.donorId) {
        toast.success("Request successfully made");
        router.push("/donor");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    donorId: params?.id,
    phoneNumber: "",
    dateOfDonation: "",
    hospitalName: "",
    hospitalAddress: "",
    reason: "",
    termsAndCondition: false,
  };

  return (
    <Container>
      <Stack
        sx={{
          margin: "50px 0px",
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
            padding: 4,
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
                src={assets.images.logo_small}
                alt="logo"
                width={110}
                height={92}
              />
            </Box>
            <Box>
              <Typography mt={2} variant="h6" fontWeight={600}>
                Blood Request
              </Typography>
            </Box>
          </Stack>
          <Box>
            <REForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <REInput
                    label="Hospital Name"
                    fullWidth={true}
                    name="hospitalName"
                  />
                </Grid>
                <Grid item md={12}>
                  <REInput
                    label="Hospital Address"
                    type="text"
                    fullWidth={true}
                    name="hospitalAddress"
                  />
                </Grid>
                <Grid item md={12}>
                  <REInput
                    type="number"
                    label="Phone Number"
                    fullWidth={true}
                    name="phoneNumber"
                  />
                </Grid>

                {/* <Grid item md={12}>
                  <REInput
                    type="text"
                    label="Date of Donation"
                    fullWidth={true}
                    name="dateOfDonation"
                  />
                </Grid> */}
                <Grid item md={12}>
                  <REDatePicker
                    fullWidth={true}
                    name="dateOfDonation"
                    label="Date of Donation"
                  />
                </Grid>
                <Grid item md={12}>
                  <REInput
                    type="text"
                    label="Reason"
                    fullWidth={true}
                    name="reason"
                  />
                </Grid>
                <Grid item md={12}>
                  <RECheckBox
                    label="Agreement to terms and conditions"
                    name="termsAndCondition"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
                className="btn-primary"
              >
                Send Blood Request
              </Button>
            </REForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default BloodRequestPage;
