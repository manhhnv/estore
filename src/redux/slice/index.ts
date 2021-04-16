import { combineReducers } from 'redux';
import userReducer from './userSlice';
import historyReducer from './historySlice';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';

const rootReducer = combineReducers({
    user: userReducer,
    history: historyReducer,
    cart: cartReducer,
    wishlist: wishlistReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
