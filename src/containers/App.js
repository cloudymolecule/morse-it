import '../styles/App.css'
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from '../components/Nav';
import Morse from '../components/Morse';
import Home from '../components/Home';
import Footer from '../components/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/morse' exact component={Morse} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App
