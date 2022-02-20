import React, { useEffect } from "react";
import { auth } from "@/config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import LoginUser from "@/components/loginUser";
import Loading from "@/components/loading";

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  useEffect(() => {
    if (user) router.push("/");
  }, [user, loading]);
  if (loading) return <Loading />;
  return <LoginUser />;
};

export default Login;
