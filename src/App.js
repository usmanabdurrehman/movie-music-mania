import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DashboardPage from "./components/Pages/DashboardPage/DashboardPage";
import { MusicProvider } from "./Contexts/MusicContext";
import { MovieProvider } from "./Contexts/MovieContext";
import { BackGroundProvider } from "./Contexts/BackGroundContext";

const App = () => {
	return (
		<div className="App">
			<BackGroundProvider>
				<MovieProvider>
					<MusicProvider>
						<Router>
							<Route exact path="/" component={DashboardPage} />
						</Router>
					</MusicProvider>
				</MovieProvider>
			</BackGroundProvider>
		</div>
	);
};

export default App;
