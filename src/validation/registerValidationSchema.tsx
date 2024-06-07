import { z } from "zod";

// Validation schema for patient registration
export const ValidationSchema = z
  .object({
    name: z.string().min(1, "Please enter your name!"),
    username: z.string().min(1, "Please enter your username!"),
    email: z.string().email("Please enter a valid email!"),
    location: z.string().min(1, "Please enter your location!"),
    password: z.string().min(6, "Must be at least 6 characters!"),
    confirm_password: z.string().min(6, "Must be at least 6 characters!"),
    bloodType: z.string().min(1, "Please select a blood group!"),
    age: z.preprocess(
      (val) => Number(val),
      z.number().min(1, "Please enter your age!")
    ),
    lastDonationDate: z.date({
      message: "Provide a valid last Donation Date",
    }),
    availability: z.boolean().refine((value) => value === true, {
      message: "You must Check mark in blood donate",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });
