import { CircularProgress, Container } from "@mui/material";
import { Box } from "@mui/system";

const Loading = () => {
  return (
    <Box sx={{ height: "100vh" }} display="flex" alignItems="center" justifyContent="center">
      <CircularProgress size={100} />
    </Box>
  );
};

export default Loading;
