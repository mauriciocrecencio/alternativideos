import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "@/config/firebase";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import imageRegister from "public/register.svg";
import { TextField, useMediaQuery } from "@mui/material";
import { toggleLoading } from "@/store/actions/loading";
import { connect } from "react-redux";
import { ILoadingProps, ILoadingState } from "@/types/ILoading";
import Loading from "../loading";

const RegisterUser = ({ toggleLoading, isLoading }: ILoadingProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const isMobile = useMediaQuery("(min-width:600px)");

  const register = async () => {
    if (!name) alert("Please enter name");
    toggleLoading("SHOW");
    await registerWithEmailAndPassword(name, email, password);
    toggleLoading("STOP");
  };

  useEffect(() => {
    if (loading) return;
    if (user) router.push("/");
  }, [user, loading]);

  if (isLoading) return <Loading />;
  return (
    <div className={styles.register}>
      {isMobile && <Image src={imageRegister} width={700} />}

      <div className={styles.register__container}>
        <TextField
          type="text"
          className={styles.register__textBox}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome completo"
        />
        <TextField
          type="text"
          className={styles.register__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <TextField
          type="password"
          className={styles.register__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button className={styles.register__btn} onClick={register}>
          Criar conta
        </button>
        <div>
          Já tem uma conta? <Link href="/login">Login.</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: ILoadingState) => ({
  isLoading: state.loading.isLoading,
});

const mapDispatchToProps = {
  toggleLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
