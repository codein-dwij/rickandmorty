import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { characterData: [], likedCharacterData: [] };
const characterSlice = createSlice({
  name: "characterData",
  initialState,
  reducers: {
    setCharData(state, payload) {
      state.characterData = payload.payload;
    },
    setLikedCharacterData(state, payload) {
      state.likedCharacterData = payload;
    },
  },
});

const store = configureStore({
  reducer: characterSlice.reducer,
});
export default store;
export const characterActions = characterSlice.actions;
