import { combineReducers } from 'redux';
import userReducer from './userSlice';
import historyReducer from './historySlice';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';
import addressReducer from './addressSlice';

const rootReducer = combineReducers({
    user: userReducer,
    history: historyReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    address: addressReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
