import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Curasol from './components/Curasol';
import Footer from './components/Footer';
import Roadmap from './components/Roadmap';
import Starter from './components/Starter';
import Teams from './components/Teams';
import Timer from './components/Timer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <Timer />
      <hr />
      <Starter />
      <hr />
      <About />
      <hr />
      <Curasol />
      <hr />
      <Roadmap />
      <hr />
      <Teams />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
