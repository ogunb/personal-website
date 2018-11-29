import { h, Component } from 'preact';

import Hero from './Hero';

class App extends Component {
	render() {
		return (
			<div id="app">
				<Hero />
			</div>
		);
	}
}

export default App;
