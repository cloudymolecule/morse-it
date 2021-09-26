import '../styles/App.css'
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from '../components/Nav';

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App
