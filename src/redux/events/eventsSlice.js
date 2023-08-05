import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents, addEvent, removeEvent } from "./eventsOperations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(fetchEvents.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    addCase(fetchEvents.fulfilled, (state, { payload }) => {
      state.items = [...payload];
      state.isLoading = false;
      state.error = null;
    });
    addCase(fetchEvents.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    // add
    addCase(addEvent.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    addCase(addEvent.fulfilled, (state, { payload }) => {
      state.items = [...state.items, ...payload];
      state.isLoading = false;
      state.error = null;
    });
    addCase(addEvent.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    //remove
    addCase(removeEvent.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    addCase(removeEvent.fulfilled, (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
      state.isLoading = false;
      state.error = null;
    });
    addCase(removeEvent.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const eventsReducer = eventsSlice.reducer;
