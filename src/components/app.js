import { h, Component } from 'preact';
import Hero from './Hero';
import Showroom from './Showroom';
import About from './About';
import Footer from './footer';

class App extends Component {
  state = {
    isAboutOpen: false,
    learnButton: null,
  };

  openAbout = learnButton => {
    this.setState({ isAboutOpen: true, learnButton });
  };

  closeAbout = () => {
    const { learnButton } = this.state;
    learnButton.removeAttribute('style');
    this.setState({ isAboutOpen: false });
  };

  render() {
    const { isAboutOpen } = this.state;
    return (
      <div id="app">
        <Hero />
        {isAboutOpen ? <About closeAbout={this.closeAbout} /> : null}
        <Showroom openAbout={this.openAbout} />
        <Footer />
      </div>
    );
  }
}

export default App;
