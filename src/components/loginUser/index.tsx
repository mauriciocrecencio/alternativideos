import React, { useEffect, useState } from "react";
import { auth, loginWithEmailAndPassword, signInWithGoogle } from "@/config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, CircularProgress, TextField, useMediaQuery } from "@mui/material";
import Image from "next/image";
import imageLogin from "public/login.svg";
import styles from "./styles.module.css";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading] = useAuthState(auth);
  const isMobile = useMediaQuery("(min-width:600px)");

  if (loading) return <CircularProgress />;
  return (
    <div className={styles.login}>
      {isMobile && <Image src={imageLogin} width={700} height={400} />}
      <div className={styles.login__container}>
        <TextField
          type="text"
          className={styles.login__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <TextField
          type="password"
          className={styles.login__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button
          className={styles.login__btn}
          onClick={() => loginWithEmailAndPassword(email, password)}
        >
          Login
        </Button>
        {/* <Button className={styles.login__btn}login__google" onClick={signInWithGoogle}>
          Entre com o Google
        </Button> */}
        <div>
          Não tem uma conta? <Link href="/register">Criar uma conta.</Link>.
        </div>
      </div>
    </div>
  );
};
export default LoginUser;
