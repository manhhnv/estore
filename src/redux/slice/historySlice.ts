import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Array<string> = [];

const historySlice = createSlice({
    name: 'history',
    initialState: initialState,
    reducers: {
        addSearchHistory: (state, action: PayloadAction<string>) => {
            const formatted = action.payload.trim();
            if (formatted) {
                if (!state.includes(formatted)) {
                    const cloned = state;
                    const historyLength = cloned.length;
                    if (historyLength >= 6) {
                        cloned.splice(historyLength - 1, 1);
                    }
                    cloned.unshift(formatted);
                    state = cloned;
                }
            }
            return state;
        },
        clearSearchHistory: (state, action) => {
            state = initialState;
            return state;
        }
    }
});

export const { addSearchHistory, clearSearchHistory } = historySlice.actions;
export default historySlice.reducer;
