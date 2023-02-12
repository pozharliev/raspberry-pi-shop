import { useSelector } from "react-redux";

import { RootState } from "@app/store";

import { IComponent } from "@app/types/component";
import { ICartItem } from "@app/services/cart.service";

export const useCartQuantity = (): number => {
	return useSelector((state: RootState) => {
		return state.cart.items?.length > 0 ?
			state.cart.items.reduce((acc, curr) => {
				return acc + curr.quantity;
			  }, 0) :
			0;
	});
};

export const useIsItemInCart = (id?: number): boolean => {
	return useSelector((state: RootState) => {
		return state.cart.items.find(item => item.id === id) !== undefined;
	});
};

export const useCartItems = (): ICartItem[] => {
	return useSelector((state: RootState) => {
		return state.cart.items;
	});
};

export const useCartTotal = (): number => {
	return useSelector((state: RootState) => {
		return state.cart.total;
	});
};

export const useStoredComponents = (): IComponent[] => {
	return useSelector((state: RootState) => {
		return state.component.components;
	});
};
