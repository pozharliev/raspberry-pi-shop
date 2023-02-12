import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	CartItemsHeading,
	CheckoutCartItemsContainer,
	CheckoutPageContainer, CheckoutContainerTotal,
	Heading, ContinueShoppingText, CheckoutDetailsContainer, CheckoutDetailsTextContainer, CheckoutDetailsText,
} from "@app/styles/checkout.style";
import { ContainerColumn } from "@app/styles/common.style";
import CartItem from "@app/components/ui/cart-item";
import CartService from "@app/services/cart.service";
import { setCart } from "@app/stores/cart.store";
import { useCartItems, useCartTotal } from "@app/stores/selectors";
import CheckoutDetailsShipping from "@app/components/ui/checkout.details.shipping";
import CheckoutDetailsPayment from "@app/components/ui/checkout.details.payment";
import CheckoutService, { ICheckoutPayment, ICheckoutShipping } from "@app/services/checkout.service";
import { LeftArrow } from "@app/components/common/svg";
import { MEDIUM, SMALL } from "@app/const";

const CheckoutPage: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const cartItems = useCartItems();
	const total = useCartTotal();

	const [tabsState, setTabsState] = useState(1);
	const [detailsShipping, setDetailsShipping] = useState<ICheckoutShipping>();
	const [detailsPayment, setDetailsPayment] = useState<ICheckoutPayment>();
	const [errorsShipping, setErrorsShipping] = useState("");
	const [errorsPayment, setErrorsPayment] = useState("");

	useEffect(() => {
		setErrorsShipping("");
	}, [detailsShipping]);

	useEffect(() => {
		setErrorsPayment("");
	}, [detailsPayment]);

	useEffect(() => {
		if (tabsState === 3 && detailsShipping !== undefined && detailsPayment !== undefined) {
			CheckoutService.checkout(detailsShipping, detailsPayment)
				.then(res => {
					navigate(`/confirm/${res.orderId}`);
				})
				.catch(console.error);
		}
	}, [tabsState]);

	useEffect(() => {
		CartService.get()
			.then(data => {
				dispatch(setCart(data));
			})
			.catch(console.error);
	}, []);

	const checkShipping = (): void => {
		if (detailsShipping !== undefined &&
			((detailsShipping.city === "") ||
			(detailsShipping.name === "") ||
			(detailsShipping.address === "") ||
			(detailsShipping.country === "") ||
			(detailsShipping.email === "") ||
			(detailsShipping.phone === ""))) {
			setErrorsShipping("One or more fields are empty!");
		} else {
			setTabsState(2);
		}
	};

	const checkPayment = (): void => {
		if (detailsPayment !== undefined &&
			((detailsPayment.cvv === "") ||
			(detailsPayment.name === "") ||
			(detailsPayment.cardNumber === "") ||
			(detailsPayment.startDate === "") ||
			(detailsPayment.endDate === ""))) {
			setErrorsPayment("One or more fields are empty!");
		} else {
			setTabsState(3);
		}
	};

	return (
		<>
			<CheckoutPageContainer>
				<ContainerColumn>
					<Heading> Shopping Cart </Heading>
					<CheckoutCartItemsContainer>
						<CartItemsHeading>
							<th> Product </th>
							<th> Quantity </th>
							<th> Total Price </th>
							<th> </th>
						</CartItemsHeading>

						{
							cartItems.length > 0 ?
								cartItems.map(item => {
									return <CartItem item={item} key={item.id} />;
								}) :
								null
						}
					</CheckoutCartItemsContainer>
					<CheckoutContainerTotal>
						<ContinueShoppingText onClick={() => navigate("/")}>
							<LeftArrow
								initial={{ width: 15, height: 29 }}
								breakpoints={{
									[MEDIUM]: { width: 14, height: 23 },
									[SMALL]: { width: 13, height: 20 },
								}} />

							<h1> Continue Shopping </h1>
						</ContinueShoppingText>
						<h1> Total: ${total.toFixed(2)} </h1>
					</CheckoutContainerTotal>
				</ContainerColumn>

				<CheckoutDetailsContainer>
					<CheckoutDetailsTextContainer>
						<CheckoutDetailsText isActive={tabsState === 1} onClick={() => setTabsState(1)}> Shipping </CheckoutDetailsText>
						<CheckoutDetailsText isActive={tabsState === 2} onClick={() => checkShipping()}> Payment </CheckoutDetailsText>
						<CheckoutDetailsText isActive={tabsState === 3} onClick={() => checkPayment()}> Success </CheckoutDetailsText>
					</CheckoutDetailsTextContainer>

					{
						tabsState === 1 ?
							<CheckoutDetailsShipping
								onClick={() => {
									checkShipping();
								}}
								onChange={(data: ICheckoutShipping) => {
									setDetailsShipping(data);
								}}
								error={errorsShipping} /> :
							null
					}
					{
						tabsState === 2 ?
							<CheckoutDetailsPayment
								onClick={() => {
									checkPayment();
								}}
								onChange={(data: ICheckoutPayment) => setDetailsPayment(data)}
								error={errorsPayment} /> :
							null
					}
				</CheckoutDetailsContainer>
			</CheckoutPageContainer>
		</>
	);
};

export default CheckoutPage;
