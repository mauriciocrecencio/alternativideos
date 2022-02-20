export interface IVideo {
  url: string;
  like: {
    value: number;
    users: string[];
  };
  dislike: {
    value: number;
    users: string[];
  };
}

export interface IVideoState {
  videos: {
    videos: IVideo[];
  };
}
