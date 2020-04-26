import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router-dom'
import Homepage from './homepage/Homepage'
import Journal from './journal/Journal'

export default function App() {
	return (
		<Switch>
			<Route exact path="/" component={Homepage}/>
			<Route exact path="/journal" component={Journal}/>
		</Switch>
	)

}
