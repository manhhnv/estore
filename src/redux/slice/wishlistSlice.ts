import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'estore/graphql/generated';


const initialState: any[] = [];
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: initialState,
    reducers: {
        addToWishlist: (state, action) => {
            if (action.payload) {
                state = action.payload
                return state;
            }
        },
        removeFromWishlist: (state, action) => {
                return state;
        }
    }
})
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;