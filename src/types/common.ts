import { USER_ROLE } from "@/contants/role";

export const BloodType = [
  "A_POSITIVE",
  "A_NEGATIVE",
  "B_POSITIVE",
  "B_NEGATIVE",
  "AB_POSITIVE",
  "AB_NEGATIVE",
  "O_POSITIVE",
  "O_NEGATIVE",
];

export const donateBlood = ["Yes", "No"];

export type UserRole = keyof typeof USER_ROLE;
