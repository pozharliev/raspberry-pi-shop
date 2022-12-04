import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "@app/components/Navbar";

import Cart from "@app/services/Cart";
import { setStoredItems } from "@app/stores/cart.store";

const App = (): JSX.Element => {
	const dispatch = useDispatch();

	useEffect(() => {
		Cart.get().then(cart => {
			dispatch(setStoredItems(cart.items.map((item, index) => {
				return item[index];
			})));
		}).catch(console.log);
	});

	return (
		<Router>
			<Navbar/>

			<Routes>
				<Route path={"/"} element={<h1> Nice </h1>}/>
			</Routes>

		</Router>
	);
};

export default App;
