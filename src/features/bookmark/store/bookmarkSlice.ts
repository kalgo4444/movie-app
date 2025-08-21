import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  data: any;
}

const localStoreBookmark = localStorage.getItem("bookmark");
const initialState: IInitialState = {
  data: localStoreBookmark ? JSON.parse(localStoreBookmark) : [],
};

export const bookmarkSlice = createSlice({
  name: "Bookmark",
  initialState,
  reducers: {
    toggleItem: (state, action) => {
      const ex = state.data.some((item: any) => item.id == action.payload.id);
      if (ex) {
        state.data = state.data.filter(
          (item: any) => item.id !== action.payload.id
        );
        localStorage.setItem("bookmark", JSON.stringify(state.data));
      } else {
        state.data.push(action.payload);
        localStorage.setItem("bookmark", JSON.stringify(state.data));
      }
    },
  },
});

export const { toggleItem } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
