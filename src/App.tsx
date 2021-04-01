import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Redux
import {
  getCards
} from './redux/selectors';
import { fetchCards } from './redux/actions';

// Components
import List from './components/List/List';
import Detail from './components/Detail/Detail';

// Models
import {CardInterface} from './models/cards';

// Styles
import './App.scss';

const App: React.FC = () => {
  const cards: CardInterface[] = useSelector(getCards);
  console.log(cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className="App">
      <List items={cards} />
      <Detail />
    </div>
  );
}

export default App;
