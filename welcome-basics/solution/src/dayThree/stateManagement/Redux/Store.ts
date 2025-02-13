import AmountSlice from "./BankSlice.ts"
import {configureStore} from "@reduxjs/toolkit";

const Store = configureStore({
    reducer: {
        bank: AmountSlice
    }
});
export type RootState = ReturnType<typeof Store.getState>
export default Store;