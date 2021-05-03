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
            if (
                action &&
                action.payload &&
                action.payload.id &&
                action.payload?.id !== state?.id
            ) {
                state = action.payload;
            }
            return state;
        },
        resetAddress: (state, action) => {
            state = initialState;
            return state;
        }
    }
});
export const { changeDefaultAddress, resetAddress } = addressSlice.actions;
export default addressSlice.reducer;
