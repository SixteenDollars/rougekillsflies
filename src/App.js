import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './landingPage/LandingPage'
import Homepage from './homePage/Homepage'
import Journal from './journal/Journal'

export default function App() {
	return (
		<BrowserRouter basename="/">
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/home" component={Homepage} />
				<Route path="/journal/:id" component={Journal} />
			</Switch>
		</BrowserRouter>
	)

}
