import { IVideo } from "@/types/videoInterface";

const initialState: { videos: IVideo[] } = {
  videos: [],
};

export default function videos(state = initialState, action: { type: string; value: any }) {
  switch (action.type) {
    case "REGISTER_VIDEO":
      return {
        ...state,
        videos: [
          ...state.videos,
          { url: action.value, like: { value: 0, users: [] }, dislike: { value: 0, users: [] } },
        ],
      };
    case "LIKE_VIDEO":
      return {
        ...state,
        videos: state.videos.map((video) => {
          const hasUser = video.like.users.includes(action.value.userId);

          if (video.url === action.value.urlVideo) {
            return {
              ...video,
              like: {
                ...video.like,
                value: video.like.users.includes(action.value.userId)
                  ? video.like.value - 1
                  : video.like.value + 1,
                users: hasUser
                  ? [...video.like.users].filter((url) => url !== action.value.userId)
                  : [...video.like.users, action.value.userId],
              },
            };
          }
          return video;
        }),
      };
    case "DISLIKE_VIDEO":
      return {
        ...state,
        videos: state.videos.map((video) => {
          const hasUser = video.dislike.users.includes(action.value.userId);

          if (video.url === action.value.urlVideo) {
            return {
              ...video,
              dislike: {
                ...video.dislike,
                value: video.dislike.users.includes(action.value.userId)
                  ? video.dislike.value - 1
                  : video.dislike.value + 1,
                users: hasUser
                  ? [...video.dislike.users].filter((url) => url !== action.value.userId)
                  : [...video.dislike.users, action.value.userId],
              },
            };
          }
          return video;
        }),
      };
    default:
      return state;
  }
}
