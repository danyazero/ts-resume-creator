import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {formsReducer, IFormsSliceState} from "./formsReducer";

const reducers = combineReducers({
    forms: formsReducer.reducer
})

const store = configureStore({
    reducer: reducers
})

export type RootState = {forms: IFormsSliceState}
export default store