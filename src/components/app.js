import { h, Component } from 'preact';
import Hero from './Hero';
import Showroom from './Showroom';
import About from './About';
import Footer from './footer';

class App extends Component {
  state = {
    isAboutOpen: false,
  };

  openAbout = () => {
    this.setState({ isAboutOpen: true });
  };

  closeAbout = () => {
    this.setState({ isAboutOpen: false });
  };

  render() {
    const { isAboutOpen } = this.state;
    return (
      <div id="app">
        <Hero />
        <Showroom openAbout={this.openAbout} />
        <Footer />
        {isAboutOpen ? <About closeAbout={this.closeAbout} /> : null}
      </div>
    );
  }
}

export default App;
