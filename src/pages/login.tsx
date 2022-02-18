import React, { useEffect, useState } from "react";
import { auth } from "@/config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { Button, CircularProgress } from "@mui/material";
import LoginUser from "@/components/loginUser";

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  useEffect(() => {
    if (user) router.push("/");
  }, [user, loading]);
  if (loading) return <CircularProgress />;
  return <LoginUser />;
};
export default Login;
