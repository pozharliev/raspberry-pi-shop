import { useSelector } from "react-redux";
import { RootState } from "@app/store";
import { IComponent } from "@app/services/component.service";

export const useCartQuantity = (): number => {
	return useSelector((state: RootState) => {
		return state.cart.items?.length > 0
			? state.cart.items.reduce((acc, curr) => {
				return acc + curr.quantity;
			  }, 0)
			: 0;
	});
};

export const useIsItemInCart = (id?: number): boolean => {
	return useSelector((state: RootState) => {
		return state.cart.items.find(item => item.id === id) !== undefined;
	});
};

export const useStoredComponents = (): IComponent[] => {
	return useSelector((state: RootState) => {
		return state.component.components;
	});
};
