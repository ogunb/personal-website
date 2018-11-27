import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Hero from './Hero';

class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Hero path="/" />
				</Router>
			</div>
		);
	}
}

export default App;
