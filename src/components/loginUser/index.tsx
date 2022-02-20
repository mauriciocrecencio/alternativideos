import React, { useEffect, useState } from "react";
import { auth, loginWithEmailAndPassword, signInWithGoogle } from "@/config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, CircularProgress, TextField, useMediaQuery } from "@mui/material";
import Image from "next/image";
import imageLogin from "public/login.svg";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import { toggleLoading } from "@/store/actions/loading";
import Loading from "../loading";
import { ILoadingProps } from "@/types/ILoading";

const LoginUser = ({ toggleLoading, isLoading }: ILoadingProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isMobile = useMediaQuery("(min-width:600px)");

  const login = async () => {
    toggleLoading("SHOW");
    await loginWithEmailAndPassword(email, password);
    toggleLoading("STOP");
  };

  if (isLoading) return <Loading />;
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
        <Button className={styles.login__btn} onClick={() => login()}>
          Login
        </Button>
        <Button
          className={[styles.login__btn, styles.login__google].join(" ")}
          onClick={signInWithGoogle}
        >
          Entre com o Google
        </Button>
        <div>
          Não tem uma conta? <Link href="/register">Criar uma conta.</Link>.
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { loading: { isLoading: boolean } }) => ({
  isLoading: state.loading.isLoading,
});

const mapDispatchToProps = {
  toggleLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);
