import { createSlice } from "@reduxjs/toolkit";

export const getRoomsSlice = createSlice({
    name: "getRooms",
    initialState: {
        value: "hello rooms"
    },
    reducers:{
        updateGetRooms: (state) => {
            state.value = "updated hello rooms";
        } 
    }
});

export const {updateGetRooms} = getRoomsSlice.actions;

export default getRoomsSlice.reducer;