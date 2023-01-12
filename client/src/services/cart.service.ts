import Http from "@app/requests";

export interface ICartTotals {
	total: number;
	subtotal: number;
	discount: number;
	shipping: number;
}

export interface ICartItem {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	url: string;
	storeId: number;
	categoryId: number;
	quantity: number;
}

export interface ICartStore {
	ok: boolean; // TODO
}

export interface ICartResponse {
	totals: ICartTotals;
	items: { [key: number]: ICartItem };
	stores: ICartStore[];
}

export default class CartService {
	static async get(): Promise<ICartResponse> {
		return await Http.get("@api/cart").then(data => data as unknown as ICartResponse);
	}

	static async addItem(itemId: number, quantity = 1): Promise<ICartResponse> {
		return await Http.put(`@api/cart/item/${itemId}`, { quantity }).then(data => data as unknown as ICartResponse);
	}

	static async removeItem(itemId: number): Promise<ICartResponse> {
		return await Http.delete(`@api/cart/item/${itemId}`).then(data => data as unknown as ICartResponse);
	}
}
