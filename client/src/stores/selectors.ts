import { useSelector } from "react-redux";
import { RootState } from "@app/store";

export const useCartQuantity = (): number => {
	return useSelector((state: RootState) => {
		return state.cart.items.length > 0
			   ? state.cart.items.reduce((acc, curr) => {
				return acc + curr.quantity;
			   }, 0)
			   : 0;
	});
};
