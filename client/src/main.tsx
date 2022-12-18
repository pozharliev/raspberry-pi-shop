import React from "react";
import ReactDOM from "react-dom/client";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "./global";

import { store } from "./store";
import App from "./app";

const persistor = persistStore(store);

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<GlobalStyles />
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
