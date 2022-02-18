import { Paper, Box } from "@mui/material";
import Image from "next/image";
import styles from "./styles.module.css";
import unregistered from "public/unregistered.svg";

const UnregisteredTitle = () => {
  return (
    <Box className={styles.unregistered__container} marginTop={6} marginBottom={8}>
      <Image src={unregistered} height={400} />
      <div className={styles.unregistered__paragraph}>
        <h1>que pena :(</h1>
        <h2>
          você precisa fazer login para <span>curtir</span> e <span>registrar</span> vídeos!
        </h2>
      </div>
    </Box>
  );
};

export default UnregisteredTitle;
