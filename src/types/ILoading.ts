export interface ILoading {
  isLoading: boolean;
}

export interface ILoadingProps extends ILoading {
  toggleLoading: (action: string) => void;
}

export interface ILoadingState {
  loading: ILoading;
}
