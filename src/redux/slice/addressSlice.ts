import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Address } from 'estore/graphql/generated';

const initialState = {} as Partial<Address>;
const addressSlice = createSlice({
    name: 'address',
    initialState: initialState,
    reducers: {
        changeDefaultAddress: (
            state,
            action: PayloadAction<Partial<Address>>
        ) => {
            if (action.payload) {
                state = action.payload;
                return state;
            }
        },
        resetAddress: (state, action) => {
            state = initialState;
            return state;
        }
    }
});
export const { changeDefaultAddress, resetAddress } = addressSlice.actions;
export default addressSlice.reducer;
