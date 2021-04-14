import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'estore/graphql/generated';

export type WishlistSliceType = {
    total: number,
    list: Product[]
};

const initialState: WishlistSliceType = {total: 0, list: []};
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.total = state.total + 1;
            state.list.push(action.payload.data)
            return state;
        },
        removeFromWishlist: (state, action) => {
            state.total = state.total - 1;
            // state.list.pop(action.payload.data)
            return state;
        }
    }
})
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;