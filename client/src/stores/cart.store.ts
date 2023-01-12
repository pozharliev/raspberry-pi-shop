import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICartItem } from "@app/services/cart.service";
import { IComponent } from "@app/services/component.service";

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
		addStoredItem: (state: CartState, action: PayloadAction<{ item: IComponent, quantity: number }>): void => {
			if (state.items.find(item => item.id === action.payload.item.id) !== undefined) {
				state.items = state.items.map(item => {
					if (item.id === action.payload.item.id) {
						item.quantity += action.payload.quantity;
					}
					return item;
				});
			} else {
				state.items.push({ ...action.payload.item, quantity: action.payload.quantity, storeId: action.payload.item.store.id, categoryId: action.payload.item.category.id });
			}
		},
		removeStoredItem: (state: CartState, action: PayloadAction<number>): void => {
			state.items = state.items.filter(item => item.id !== action.payload);
		},
	},
});

const cartReducer = cartSlice.reducer;

export const { setStoredItems, addStoredItem, removeStoredItem } = cartSlice.actions;

export default cartReducer;
