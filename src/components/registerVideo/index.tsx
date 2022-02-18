import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import styles from "./styles.module.css";
import { IVideo } from "@/types/videoInterface";

const RegisterVideo = ({
  register,
  videos,
}: {
  register: (url: string) => void;
  videos: IVideo[];
}) => {
  const registerVideo = () => {
    if (!url.includes("youtube.com")) {
      alert("Link incorreto");
      return;
    }
    if (videos.find((video) => video.url === url)) {
      alert("Esse vídeo já está cadastrado");
      return;
    }
    register(url);
  };
  const [url, setUrl] = useState("");
  console.log(url);
  return (
    <Box paddingTop={2} paddingBottom={4}>
      <div className={styles.registerVideo__container}>
        <h2>Cadastrar novo vídeo</h2>
        <div>
          <TextField
            className={styles.registerVideo__input}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="URL do vídeo"
            // size="medium"
          />
          <Button
            className={styles.registerVideo__button}
            onClick={() => registerVideo()}
            variant="contained"
            // size="small"
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default RegisterVideo;
