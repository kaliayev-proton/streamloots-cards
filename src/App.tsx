import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { fetchCards } from './redux/actions';

// Components
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';

// Styles
import './App.scss';

const App: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className="sl-app">
      <h1 data-test="app-h1">Streamloots Cards</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/edit">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
