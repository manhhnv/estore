import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'estore/graphql/generated';

export type UserSliceType = {
    me: User | undefined;
    token: string | undefined;
};

export const mockLoginApi = createAsyncThunk(
    'user/mockLoginApi',
    async () => {
        return {
            me: {
                "id": "b4213638-9263-44f2-ac07-562b317ce7a5",
                "lastName": "Nguyễn",
                "firstName": "Văn Mạnh",
                "email": "manh117bg@gmail.com",
                "avatar": "https://lh3.googleusercontent.com/a-/AOh14GihRSXzeogSQAIfhh9EJxKmrklmPXL2sKiYUQu0mw=s96-c",
                "accountType": "google"
            },
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI0MjEzNjM4LTkyNjMtNDRmMi1hYzA3LTU2MmIzMTdjZTdhNSIsImZpcnN0TmFtZSI6IlbEg24gTeG6oW5oIiwibGFzdE5hbWUiOiJOZ3V54buFbiIsImVtYWlsIjoibWFuaDExN2JnQGdtYWlsLmNvbSIsImF2YXRhciI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdpaFJTWHplb2dTUUFJZmhoOUVKeEttcmtsbVBYTDJzS2lZVVF1MG13PXM5Ni1jIiwiY3JlYXRlZEF0IjoiMjAyMS0wNC0wN1QxNzozMjo0NS4wNjdaIiwidXBkYXRlZEF0IjoiMjAyMS0wNC0wN1QxNzozMjo0NS4wNjdaIiwicm9sZSI6eyJpZCI6MiwibmFtZSI6InVzZXIifSwiaWF0IjoxNjE4MzI5NTMyLCJleHAiOjE2MTkxOTM1MzJ9.io3vhoGC6Yt5wb0LWFotsOHao-mRFT19B-6QMDA_auo"
        }
    }
)

const initialState: UserSliceType = { me: undefined, token: undefined };


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
        login: (state, action: PayloadAction<UserSliceType>) => {
            state.token = action.payload.token;
            state.me = action.payload.me;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(mockLoginApi.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        }),
        builder.addCase(mockLoginApi.pending, (state, action) => {
            state = {} as any;
            return state;   
        }),
        builder.addCase(mockLoginApi.rejected, (state, action) => {
            state = {} as any;
            return state;
        })
    }
});

export const { queryMe, logout, login } = userSlice.actions;
export default userSlice.reducer;
