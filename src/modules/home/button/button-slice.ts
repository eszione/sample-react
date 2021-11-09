import { createSlice } from '@reduxjs/toolkit';
import { IButtonState } from './button-state';

const initialState: IButtonState = {
    count: 0,
}

export const buttonSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count -= 1;
            }
        },
    },
});

export const { increment, decrement } = buttonSlice.actions;

export default buttonSlice.reducer;