import Http from "@app/requests";

export interface ICheckoutShipping {
	name: string;
	email: string;
	country: string;
	city: string;
	address: string;
	phone: string;
}

export interface ICheckoutPayment {
	cardNumber: string;
	startDate: string;
	endDate: string;
	cvv: string;
	name: string;
}

export interface ICheckoutResponse {
	orderId: number;
}

export default class CheckoutService {
	static checkout(shippingData: ICheckoutShipping, paymentData: ICheckoutPayment): Promise<ICheckoutResponse> {
		return Http.post("@api/checkout/", { shippingData, paymentData }).then(data => data as unknown as ICheckoutResponse);
	}
}
