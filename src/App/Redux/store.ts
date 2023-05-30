import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {formsReducer, formsSliceState} from "./formsReducer";

const reducers = combineReducers({
    forms: formsReducer.reducer
})

const store = configureStore({
    reducer: reducers
})

export type RootState = {forms: formsSliceState}
export default store