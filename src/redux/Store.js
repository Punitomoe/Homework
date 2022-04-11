import { configureStore } from "@reduxjs/toolkit";
import TokenReducer from "./TokenReducer";

export default configureStore({
    reducer: {
        token: TokenReducer
    }
});