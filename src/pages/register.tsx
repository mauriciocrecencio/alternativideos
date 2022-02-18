import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";
import { useRouter } from "next/router";
import RegisterUser from "@/components/registerUser";

const Register = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (user) router.push("/");
  }, [user, loading]);

  return <RegisterUser />;
};
export default Register;
