import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'estore/graphql/generated';

const initialState: Product[] = [];
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: initialState,
    reducers: {
        addToWishlist: (state, action) => {
            return state;
        },
        removeFromWishlist: (state, action) => {
            return state;
        }
    }
})
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;