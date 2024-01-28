import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    coordinates: { lat: "28.461384", lng: "77.048541" },
    name: "John Doe",
    email: "john@example.com",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setCoordinates: (state, action) => {
      state.coordinates = action.payload;
    },
  },
});

export const { setName, setEmail, setCoordinates } = userSlice.actions;

export default userSlice.reducer;
