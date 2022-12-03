import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";

import cartReducer from "./stores/cart.store";

const reducers = combineReducers({
	cart: cartReducer
});

const persistorConfig = {
	key: "root",
	storage: localStorage,
	whitelist: ["cart"]
};

const persistedReducer = persistReducer(persistorConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	})
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
