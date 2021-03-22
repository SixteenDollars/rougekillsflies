import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Misc from './miscView/Misc'
import Homepage from './homePage/Homepage'
import FlowerPage from './flowerPage/FlowerPage'
import AlbumView from './albumView/AlbumView'

export default function App() {
	return (
		<BrowserRouter basename="/">
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/war" component={AlbumView} />
				<Route exact path="/misc" component={Misc} />
				<Route exact path="/shoot" component={Homepage} />
				<Route exact path="/flower" component={FlowerPage} />
			</Switch>
		</BrowserRouter>
	)
}
