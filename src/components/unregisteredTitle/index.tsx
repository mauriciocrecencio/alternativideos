import { Paper, Box } from "@mui/material";
import Image from "next/image";
import styles from "./styles.module.css";
import unregistered from "public/unregistered.svg";

const UnregisteredTitle = () => {
  return (
    <Box className={styles.unregistered__container} marginTop={6} marginBottom={8}>
      <img src="/unregistered.svg" height={300} />
      <div className={styles.unregistered__paragraph}>
        <h1>
          você precisa fazer login para <span>curtir</span> e <span>registrar</span> vídeos!
        </h1>
      </div>
    </Box>
  );
};

export default UnregisteredTitle;
