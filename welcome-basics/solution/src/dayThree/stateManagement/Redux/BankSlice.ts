import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SliceName} from "./SliceName.ts";

const initialState = {
    amount: 0,
}

const AmountSlice = createSlice({
    name: SliceName.AmountSlice,
    initialState,
    reducers: {
        deposit: (state: { amount: number }, action: PayloadAction<number>) => {
            state.amount += action.payload;
        },
        withdraw: (state: { amount: number }, action:PayloadAction<number> ) => {
            state.amount -= action.payload;
        }
    }
});

export default AmountSlice.reducer;
export const {deposit, withdraw} = AmountSlice.actions;