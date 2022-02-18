export const toggleDislike = (urlVideo: string, userId: string | undefined) => {
  return {
    type: "DISLIKE_VIDEO",
    value: { urlVideo, userId },
  };
};
