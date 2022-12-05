import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "@app/components/Navbar";

const App = (): JSX.Element => {
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
