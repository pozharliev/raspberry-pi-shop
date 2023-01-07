import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";

import cartReducer from "@app/stores/cart.store";
import componentReducer from "@app/stores/component.store";

const reducers = combineReducers({
	cart: cartReducer,
	component: componentReducer,
});

const persistorConfig = {
	key: "root",
	storage: localStorage,
	whitelist: ["cart", "component"],
};

const persistedReducer = persistReducer(persistorConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
