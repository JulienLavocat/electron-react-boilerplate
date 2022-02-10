import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
