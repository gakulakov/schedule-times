import {combineReducers, configureStore} from "@reduxjs/toolkit";
import mainSlice from "./slicers/mainSlice";

const rootReducer = combineReducers({
    main: mainSlice,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer
})