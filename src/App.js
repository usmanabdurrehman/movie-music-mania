import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import LoginPage from './components/Pages/LoginPage/LoginPage'
import DashboardPage from './components/Pages/DashboardPage/DashboardPage'

//Providers
import {UserProvider} from './contexts/UserContext'
import {AuthProvider} from './contexts/AuthContext'

const App = () => {
	return(
		<div className="App">
		<Router>
		<AuthProvider>
		<UserProvider>
			<Route exact path="/" component={LoginPage}/>
			<Route path="/dashboard" component={DashboardPage}/>
		</UserProvider>
		</AuthProvider>
		</Router>		
		</div>
		)
}

export default App