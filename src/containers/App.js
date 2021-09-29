import '../styles/App.css'
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from '../components/Nav';
import Morse from '../components/Morse';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/morse' exact component={Morse} />
      </Switch>
    </Router>
  );
}

export default App
