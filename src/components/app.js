import { h, Component } from 'preact';
import { Router } from 'preact-router';

import HomeRouter from '../routes/HomeRouter';

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<HomeRouter path="/" />
				</Router>
			</div>
		);
	}
}
