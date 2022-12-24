import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "@app/components/Navbar";

import Cart from "@app/services/cart.service";

// const LandingPage = lazy(() => import("@app/pages/landing.page"));
import LandingPage from "@app/pages/landing.page";
import { setStoredItems } from "@app/stores/cart.store";
import { useDispatch } from "react-redux";

const App = (): JSX.Element => {
	const dispatch = useDispatch();

	useEffect(() => {
		Cart.get()
			.then(res => {
				dispatch(setStoredItems(Object.values(res.items)));
			})
			.catch(console.log);
	});

	return (
		<Router>
			<Navbar />

			<Routes>
				<Route path={"/"} element={<LandingPage />} />
			</Routes>
		</Router>
	);
};

export default App;
