import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "@app/components/Navbar";

// const LandingPage = lazy(() => import("@app/pages/landing.page"));
import LandingPage from "@app/pages/landing.page";

const App = (): JSX.Element => {
	return (
		<Router>
			<Navbar/>

			<Routes>
				<Route path={"/"} element={<LandingPage />}/>
			</Routes>

		</Router>
	);
};

export default App;
