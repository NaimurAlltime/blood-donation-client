// validationSchema.js
import { z } from "zod";

export const validationSchema = z.object({
  usernameOrEmail: z
    .string()
    .min(1, "Please enter a valid Username or Email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});
