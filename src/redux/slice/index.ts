import { combineReducers } from 'redux';
import userReducer from './userSlice';
import historyReducer from './historySlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
    user: userReducer,
    history: historyReducer,
    cart: cartReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
