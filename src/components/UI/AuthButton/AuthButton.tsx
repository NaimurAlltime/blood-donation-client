"use client";
import AccountMenu from "@/components/Dashboard/AccountMenu/AccountMenu";
import { logout } from "@/services/actions/logout";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  // console.log(userInfo);

  const handleLogOut = () => {
    removeUser();
    logout();
    // router.refresh();
    router.prefetch("/");
  };
  return (
    <>
      {userInfo?.id ? (
        // <Button color="error" onClick={handleLogOut}>
        //   Logout
        // </Button>
        <AccountMenu color="primary.main" />
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
