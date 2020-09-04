import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './landingPage/LandingPage'
import HomePage from './homePage/HomePage'
import Journal from './journal/Journal'

export default function App() {
	return (
		<BrowserRouter basename="/">
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/home" component={HomePage} />
				<Route path="/journal/:id" component={Journal} />
			</Switch>
		</BrowserRouter>
	)

}
