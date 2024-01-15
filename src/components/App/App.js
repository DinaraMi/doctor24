import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../utils/api';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';

function App() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await fetchData();
        dispatch({ type: 'FETCH_CARDS', payload: data });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCards();
  }, [dispatch]);

  return (
    <div className='pages'>
      <h1 className='pages__title'>KITTY WORLD</h1>
      <Filter />
      {cards.map(card => <Card key={card.id} card={card} />)}
    </div>
  );
}

export default App;
