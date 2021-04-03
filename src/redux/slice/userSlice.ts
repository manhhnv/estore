import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'estore/graphql/generated';

export type UserSliceType = {
    me: User | undefined;
    token: string | undefined;
}

const initialState: UserSliceType = {me: undefined, token: undefined};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        queryMe: (state, action: PayloadAction<User>) => {
            if (action.payload) {
                state.me = action.payload
            }
        },
        logout: (state, action) => {
            state = initialState;
            return state;
        },
        login(state, action: PayloadAction<UserSliceType>) {
            state.token = action.payload.token;
            state.me = action.payload.me;
        }
    }
})

export const { queryMe, logout, login } = userSlice.actions;
export default userSlice.reducer;