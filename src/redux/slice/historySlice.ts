import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchItem } from 'estore/types';

const initialState: Array<SearchItem> | null | undefined = [];

const historySlice = createSlice({
    name: 'history',
    initialState: initialState,
    reducers: {
        addHistorySearchKeyWord: (state, action: PayloadAction<SearchItem>) => {
            return state;
        }
    }
});

export const { addHistorySearchKeyWord } = historySlice.actions;
export default historySlice.reducer;
