import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AlbumView from './albumView/AlbumView'
import PressView from './pressView/PressView'
import NailBombView from './nailBombView/NailBombView'
import BurningCreditsView from './burningView/BurningView'
import BurningNoteView from './burningView/BurningNoteView'

export default function App() {
	return (
		<BrowserRouter basename="/">
			<Switch>
				<Route exact path="/" component={AlbumView} />
				<Route exact path="/war" component={AlbumView} />
				<Route exact path="/press" component={PressView} />
				<Route exact path="/nailbomb" component={NailBombView} />
				<Route exact path="/burningcredits" component={BurningCreditsView} />
				<Route exact path="/burningnote" component={BurningNoteView} />
			</Switch>
		</BrowserRouter>
	)
}
