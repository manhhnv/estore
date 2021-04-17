import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any[] = [];
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<any>) => {
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
