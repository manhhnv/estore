import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'estore/graphql/generated';

export type UserSliceType = {
    me: User | undefined;
    token: string | undefined;
};

const initialState: UserSliceType = { me: {
    "id": "b4213638-9263-44f2-ac07-562b317ce7a5",
    "lastName": "Nguyễn",
    "firstName": "Văn Mạnh",
    "email": "manh117bg@gmail.com",
    "avatar": "https://lh3.googleusercontent.com/a-/AOh14GihRSXzeogSQAIfhh9EJxKmrklmPXL2sKiYUQu0mw=s96-c",
    "accountType": "google"
  },
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI0MjEzNjM4LTkyNjMtNDRmMi1hYzA3LTU2MmIzMTdjZTdhNSIsImZpcnN0TmFtZSI6IlbEg24gTeG6oW5oIiwibGFzdE5hbWUiOiJOZ3V54buFbiIsImVtYWlsIjoibWFuaDExN2JnQGdtYWlsLmNvbSIsImF2YXRhciI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdpaFJTWHplb2dTUUFJZmhoOUVKeEttcmtsbVBYTDJzS2lZVVF1MG13PXM5Ni1jIiwiY3JlYXRlZEF0IjoiMjAyMS0wNC0wN1QxNzozMjo0NS4wNjdaIiwidXBkYXRlZEF0IjoiMjAyMS0wNC0wN1QxNzozMjo0NS4wNjdaIiwicm9sZSI6eyJpZCI6MiwibmFtZSI6InVzZXIifSwiaWF0IjoxNjE4MzI3NDA5LCJleHAiOjE2MTkxOTE0MDl9.T2UYA3dgU6XO4a3MqNOAUNAnRsGkN_aczFmZEXrtyu" };

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        queryMe: (state, action: PayloadAction<User>) => {
            if (action.payload) {
                state.me = action.payload;
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
});

export const { queryMe, logout, login } = userSlice.actions;
export default userSlice.reducer;
