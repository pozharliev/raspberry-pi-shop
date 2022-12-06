import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICartItem } from "@app/services/cart.service";

export interface CartState {
	items: ICartItem[];
}

const cartInitialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState: cartInitialState,
	reducers: {
		setStoredItems: (state: CartState, action: PayloadAction<ICartItem[]>): void => {
			state.items = action.payload;
		},
	},
});

const cartReducer = cartSlice.reducer;

export const { setStoredItems } = cartSlice.actions;

export default cartReducer;
