import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuseumView from './museumView/MuseumView'
import DogPrivateView from './dogView/DogPrivateView'
import BurningCreditsView from './burningView/BurningCreditsView'
import BurningLyricsView from './burningView/BurningLyricsView'
import BurningManifesto from './burningView/BurningManifesto'
import Track1LyricsView from './burningView/lyricsView/Track1LyricsView'
import Track2LyricsView from './burningView/lyricsView/Track2LyricsView'
import Track3LyricsView from './burningView/lyricsView/Track3LyricsView'
import Track4LyricsView from './burningView/lyricsView/Track4LyricsView'
import Track5LyricsView from './burningView/lyricsView/Track5LyricsView'
import Track6LyricsView from './burningView/lyricsView/Track6LyricsView'
import Track7LyricsView from './burningView/lyricsView/Track7LyricsView'
import Track8LyricsView from './burningView/lyricsView/Track8LyricsView'
import Track9LyricsView from './burningView/lyricsView/Track9LyricsView'
import Track10LyricsView from './burningView/lyricsView/Track10LyricsView'
import Track11LyricsView from './burningView/lyricsView/Track11LyricsView'
import Track12LyricsView from './burningView/lyricsView/Track12LyricsView'
import Track13LyricsView from './burningView/lyricsView/Track13LyricsView'
import Track14LyricsView from './burningView/lyricsView/Track14LyricsView'
import Track15LyricsView from './burningView/lyricsView/Track15LyricsView'
import Track16LyricsView from './burningView/lyricsView/Track16LyricsView'

export default function App() {
	return (
		<BrowserRouter basename="/">
			<Switch>
				<Route exact path="/" component={MuseumView} />
				<Route exact path="/dog-private" component={DogPrivateView} />
				<Route exact path="/burningcredits" component={BurningCreditsView} />
				<Route exact path="/burninglyrics" component={BurningLyricsView} />
				<Route exact path="/burningmanifesto" component={BurningManifesto} />
				<Route exact path="/lyrics-1" component={Track1LyricsView} />
				<Route exact path="/lyrics-2" component={Track2LyricsView} />
				<Route exact path="/lyrics-3" component={Track3LyricsView} />
				<Route exact path="/lyrics-4" component={Track4LyricsView} />
				<Route exact path="/lyrics-5" component={Track5LyricsView} />
				<Route exact path="/lyrics-6" component={Track6LyricsView} />
				<Route exact path="/lyrics-7" component={Track7LyricsView} />
				<Route exact path="/lyrics-8" component={Track8LyricsView} />
				<Route exact path="/lyrics-9" component={Track9LyricsView} />
				<Route exact path="/lyrics-10" component={Track10LyricsView} />
				<Route exact path="/lyrics-11" component={Track11LyricsView} />
				<Route exact path="/lyrics-12" component={Track12LyricsView} />
				<Route exact path="/lyrics-13" component={Track13LyricsView} />
				<Route exact path="/lyrics-14" component={Track14LyricsView} />
				<Route exact path="/lyrics-15" component={Track15LyricsView} />
				<Route exact path="/lyrics-16" component={Track16LyricsView} />
			</Switch>
		</BrowserRouter>
	)
}
