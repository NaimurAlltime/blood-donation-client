import { FieldValues } from "react-hook-form";
import setAccessToken from "./setAccessToken";

export const userLogin = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    // cache: "no-store",
    credentials: "include",
  });

  const userInfo = await res.json();

  if (userInfo?.data?.token) {
    setAccessToken(userInfo?.data?.token, { redirect: "/dashboard/profile" });
  }

  return userInfo;
};
