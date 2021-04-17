import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from 'estore/graphql/generated';

const initialState: Partial<Order> = {};
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Partial<Order>>) => {
            if (action.payload) {
                state = action.payload;
                return state;
            }
        },
        removeFromCart: (state, action) => {
            return state;
        },
        setEmptyCart: (state, action) => {
            state = initialState;
            return state;
        }
    }
});
export const { addToCart, removeFromCart, setEmptyCart } = cartSlice.actions;
export default cartSlice.reducer;
