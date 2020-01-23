import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import DashboardPage from './components/Pages/DashboardPage/DashboardPage'

const App = () => {
	return(
		<div className="App">
			<Router>
				<Route exact path="/" component={DashboardPage}/>
			</Router>		
		</div>
		)
}

export default App