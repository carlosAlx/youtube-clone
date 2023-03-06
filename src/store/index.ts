import { configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../utils/Type";

const initialState: InitialState = {
  videos: [],
  currentPlayng: null,
  searchTerm: "",
  searchResult: [],
  nextPageToken: null,
  recommendedVideos: [],
};

const YoutubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {},
});

export const store = configureStore({
  reducer: {
    youtubeApp: YoutubeSlice.reducer,
  },
});
