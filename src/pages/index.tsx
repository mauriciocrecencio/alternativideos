import RegisterVideo from "@/components/registerVideo";
import VideoCard from "@/components/videoCard";
import { auth, logout } from "@/config/firebase";
import { registerVideo } from "@/store/actions/registerVideo";
import { Button, CircularProgress, Grid, Container } from "@mui/material";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { toggleLike } from "@/store/actions/toggleLike";
import { toggleDislike } from "@/store/actions/toggleDislike";
import { IVideo } from "@/types/videoInterface";
import { useAuthState } from "react-firebase-hooks/auth";
import UnregisteredTitle from "@/components/unregisteredTitle";
import Image from "next/image";
import emptyVideo from "public/emptyVideo.svg";

interface IProps {
  videos: IVideo[];
  registerVideo: (url: string) => void;
  toggleLike: (url: string, userId: string | undefined) => void;
  toggleDislike: (url: string, userId: string | undefined) => void;
}

const Home = ({ videos, registerVideo, toggleLike, toggleDislike }: IProps) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  if (loading) return <CircularProgress />;
  return (
    <Container maxWidth="md" disableGutters>
      <Grid container justifyContent="space-around" direction="column" alignContent="center">
        <Grid
          className="buttonsHeader__container"
          justifyContent="end"
          container
          alignContent="center"
          marginTop={2}
          spacing={2}
        >
          {!user && (
            <Button variant="contained" size="large" onClick={() => router.push("/login")}>
              Login
            </Button>
          )}
          {!user && (
            <Button variant="outlined" onClick={() => router.push("/register")}>
              Registrar
            </Button>
          )}
          {user && (
            <Button color="error" variant="contained" onClick={logout}>
              Sair
            </Button>
          )}
        </Grid>
        <Grid item xs>
          {user ? (
            <RegisterVideo videos={videos} register={registerVideo} />
          ) : (
            <UnregisteredTitle />
          )}
        </Grid>
        <Grid item container justifyContent="center" direction="column" alignItems="center">
          {videos.length !== 0 ? (
            videos
              .sort((a, b) => b.like.value - a.like.value)
              .map(({ url, like, dislike }) => (
                <Grid item key={url}>
                  <VideoCard
                    userDisliked={user ? dislike.users.includes(user.uid) : false}
                    userLiked={user ? like.users.includes(user.uid) : false}
                    userId={user?.uid}
                    url={url}
                    like={like}
                    dislike={dislike}
                    toggleLike={toggleLike}
                    toggleDislike={toggleDislike}
                  />
                </Grid>
              ))
          ) : (
            <div className="emptyVideos__container">
              <h1>não temos nenhum vídeo cadastrado...</h1>
              <Image src={emptyVideo} height={400} />
            </div>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state: { videos: { videos: IVideo[] } }) => ({
  videos: state.videos.videos,
});

const mapDispatchToProps = {
  registerVideo,
  toggleLike,
  toggleDislike,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
