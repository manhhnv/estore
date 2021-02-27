import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentUser, Customer } from 'estore/graphql/generated';

export type UserSliceType = {
    me?: Customer | undefined;
}

const initialState: UserSliceType = { me: undefined };

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        queryMe: (state, action: PayloadAction<Customer>) => {
            if (action.payload) {
                state.me = action.payload
            }
        },
        logout: (state, action) => {
            state = initialState;
            return state;
        }
    }
})

export const { queryMe, logout } = userSlice.actions;
export default userSlice.reducer;