import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuseumView from './museumView/MuseumView'
import BurningCreditsView from './creditViews/BurningCreditsView'
import BurningCompanionsView from './creditViews/BurningCompanionsView'
import BurningLinks from './creditViews/BurningLinks'
import DogLinks from './creditViews/DogLinks'
import WarCompanionsView from './creditViews/WarCompanionsView'
import WarLinks from './creditViews/WarLinks'

export default function App() {
	return (
		<BrowserRouter basename="/">
			<Switch>
				<Route exact path="/" component={MuseumView} />
				<Route exact path="/doglinks" component={DogLinks} />
				<Route exact path="/burninglinks" component={BurningLinks} />
				<Route exact path="/burningcredits" component={BurningCreditsView} />
				<Route exact path="/burningcompanions" component={BurningCompanionsView} />
				<Route exact path="/warcompanions" component={WarCompanionsView} />
				<Route exact path="/warlinks" component={WarLinks} />
			</Switch>
		</BrowserRouter>
	)
}
