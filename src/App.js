import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AlbumView from './albumView/AlbumView'
import PressView from './pressView/PressView'
import NailBombView from './nailBombView/NailBombView'

export default function App() {
	return (
		<BrowserRouter basename="/">
			<Switch>
				<Route exact path="/" component={AlbumView} />
				<Route exact path="/war" component={AlbumView} />
				<Route exact path="/press" component={PressView} />
				<Route exact path="/nailbomb" component={NailBombView} />
			</Switch>
		</BrowserRouter>
	)
}
