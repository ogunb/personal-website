import { h, Component } from 'preact';
import Hero from './Hero';
import Showroom from './Showroom';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Hero />
        <Showroom />
      </div>
    );
  }
}

export default App;
