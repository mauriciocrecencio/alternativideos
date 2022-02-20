import { ILoading } from "@/types/ILoading";

const initialState: ILoading = {
  isLoading: false,
};

export default function loading(state = initialState, action: { type: string }) {
  switch (action.type) {
    case "SHOW":
      return {
        ...state,
        isLoading: true,
      };
    case "STOP":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
