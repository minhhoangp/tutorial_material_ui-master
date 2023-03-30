import {configureStore} from "@reduxjs/toolkit";
import getRoomsReducer from "./getRooms";

export default configureStore({
    reducer: {
        getRooms: getRoomsReducer
    }
})