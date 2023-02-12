import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICartItem, ICartResponse } from "@app/services/cart.service";
import { IComponent } from "@app/types/component";

export interface CartState {
	items: ICartItem[];
	total: number;
}

const cartInitialState: CartState = {
	items: [],
	total: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: cartInitialState,
	reducers: {
		setCart: (state: CartState, action: PayloadAction<ICartResponse>): void => {
			state.items = Object.values(action.payload.items);
			state.total = action.payload.totals.total;
		},
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
				state.items.push({ ...action.payload.item, quantity: action.payload.quantity });
			}
		},
		removeStoredItem: (state: CartState, action: PayloadAction<number>): void => {
			state.items = state.items.filter(item => item.id !== action.payload);
		},
		updateStoredItem: (state: CartState, action: PayloadAction<{ itemId: number, quantity: number }>): void => {
			state.items = state.items.map(item => {
				if (item.id === action.payload.itemId) {
					item.quantity = action.payload.quantity;
				}
				return item;
			});
		},
	},
});

const cartReducer = cartSlice.reducer;

export const { setCart, setStoredItems, addStoredItem, removeStoredItem, updateStoredItem } = cartSlice.actions;

export default cartReducer;
