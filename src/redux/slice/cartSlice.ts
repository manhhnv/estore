import { createSlice } from '@reduxjs/toolkit';

const initialState = null;
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            return state;
        },
        removeFromCart: (state, action) => {
            return state;
        }
    }
})
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;