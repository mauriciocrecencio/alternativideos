import { combineReducers } from "@reduxjs/toolkit";
import videos from "./videos";
import loading from "./loading";

export default combineReducers({
  videos,
  loading,
});
