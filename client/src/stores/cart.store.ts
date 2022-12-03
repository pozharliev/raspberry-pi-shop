import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
	ok?: boolean;
}

const cartInitialState: CartState = {

};

const cartSlice = createSlice({
	name: "cart",
	initialState: cartInitialState,
	reducers: {
		setStoredItems: (state: CartState, action: PayloadAction<number>): void => {
			state.ok = Boolean(action.payload);
		}
	}
});

const cartReducer = cartSlice.reducer;

export const { setStoredItems } = cartSlice.actions;

export default cartReducer;
