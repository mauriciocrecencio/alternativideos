export const toggleLike = (urlVideo: string, userId: string | undefined) => {
  return {
    type: "LIKE_VIDEO",
    value: { urlVideo, userId },
  };
};
