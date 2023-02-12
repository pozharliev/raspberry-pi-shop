import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CartService from "@app/services/cart.service";

import Navbar from "@app/components/navbar";

import LandingPage from "@app/pages/landing.page";
import ProductPage from "@app/pages/product.page";
import CheckoutPage from "@app/pages/checkout.page";
import ConfirmPage from "@app/pages/confirm.page";

import { setStoredItems } from "@app/stores/cart.store";

const App = (): JSX.Element => {
	const dispatch = useDispatch();

	useEffect(() => {
		CartService.get()
			.then(res => {
				dispatch(setStoredItems(Object.values(res.items)));
			})
			.catch(console.error);
	});

	return (
		<Router>
			<Navbar />

			<Routes>
				<Route path={"/"} element={<LandingPage />} />
				<Route path={"/component/:id"} element={<ProductPage />} />
				<Route path={"/checkout"} element={<CheckoutPage />} />
				<Route path={"/confirm/*"} element={<ConfirmPage />} />
			</Routes>
		</Router>
	);
};

export default App;
