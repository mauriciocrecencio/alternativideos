import { IconButton, Paper } from "@mui/material";
import { Box } from "@mui/system";
import ReactPlayer from "react-player";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

interface IVideoCardProps {
  url: string;
  like: { value: number; users: string[] };
  dislike: { value: number; users: string[] };
  toggleLike: (url: string, userId: string | undefined) => void;
  toggleDislike: (url: string, userId: string | undefined) => void;
  userId: string | undefined;
  userLiked: boolean | undefined;
  userDisliked: boolean | undefined;
}

const VideoCard = ({
  url,
  like,
  dislike,
  toggleLike,
  toggleDislike,
  userId,
  userLiked,
  userDisliked,
}: IVideoCardProps) => {
  return (
    <Box display="inline-block" marginLeft={10} marginRight={10}>
      <Paper elevation={6}>
        <ReactPlayer url={url} />
        <Box padding={2} display="flex" justifyContent="space-around" alignContent="center">
          <IconButton color="success" disabled={!userId} onClick={() => toggleLike(url, userId)}>
            {userLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
            {like.value}
          </IconButton>
          <IconButton color="error" disabled={!userId} onClick={() => toggleDislike(url, userId)}>
            {userDisliked ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />}
            {dislike.value}
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default VideoCard;
