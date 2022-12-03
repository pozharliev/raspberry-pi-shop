import React, { useEffect } from "react";
import Cart from "./services/Cart";
import { useDispatch } from "react-redux";
import { setStoredItems } from "./stores/cart.store";

function App(): React.ReactElement {
	const dispatch = useDispatch();
	useEffect(() => {
		Cart.get().then(cart => {
			dispatch(setStoredItems(1));
		}).catch(console.log);
	});

	return (
		<h1> Hello123 </h1>
	);
}

export default App;
