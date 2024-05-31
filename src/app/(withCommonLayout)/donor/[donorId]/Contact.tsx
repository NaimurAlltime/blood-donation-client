"use client";

import REDatePicker from "@/components/Forms/REDatePicker";
import REForm from "@/components/Forms/REForm";
import REInput from "@/components/Forms/REInput";
import dateFormatter from "@/utils/dateFormatter";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { z } from "zod";

const bloodRequestSchema = z.object({
  numberOfBag: z
    .string()
    .min(1, { message: "Number of bag must be equal or more than 1 " }),
  phoneNumber: z.string().min(1, { message: "Please Enter your phone number" }),
  dateOfDonation: z.date({ invalid_type_error: "Enter a valid date" }),
  reason: z.string().min(1, { message: "Please select blood group" }),
});

const Contact = ({ donorId }: { donorId: string }) => {
  // const token = useAppSelector((state) => state.auth.token);
  // const [sendBloodRequest, { isLoading }] = useSendBloodRequestToDonorMutation();
  const router = useRouter();

  const handleBloodRequest = async (values: any) => {
    console.log(values);
    // if (!token) {
    //   router.push('/login');
    //   toast.error('Please login to request blood');
    //   return;
    // }

    // const payload = {
    //   numberOfBag: parseInt(values.numberOfBag),
    //   phoneNumber: values.phoneNumber,
    //   dateOfDonation: dateFormatter.dateToString(values.dateOfDonation),
    //   reason: values.reason,
    // };

    // const toastId = toast.loading('Sending Blood Request...');
    // try {
    //   const res = await sendBloodRequest({ id: donorId, payload }).unwrap();

    //   if (res.success) {
    //     toast.success('Blood Request Sent Successfully', { id: toastId });
    //     return true;
    //   } else {
    //     toast.error('Failed to request blood', { id: toastId });
    //   }
    // } catch (error) {
    //   toast.error('Failed to request blood', { id: toastId });
    // }
  };

  return (
    <REForm
      onSubmit={handleBloodRequest}
      defaultValues={{
        numberOfBag: "",
        phoneNumber: "",
        dateOfDonation: "",
        reason: "",
      }}
      resolver={zodResolver(bloodRequestSchema)}
    >
      <Stack gap={1}>
        <REInput name="numberOfBag" label="Number of Bag" type="number" />
        <REInput name="phoneNumber" label="Phone Number" />
        <REDatePicker name="dateOfDonation" label="Date of Donation" />
        <REInput
          name="reason"
          label="Message"
          type="textarea"
          placeholder="Message donor, Why do you need blood"
        />
        <Button type="submit">Send Blood Request</Button>
      </Stack>
    </REForm>
  );
};

export default Contact;
