import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../utils/api';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import { deleteCard } from '../../utils/actions';

function App() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards);
  const likedCards = useSelector(state => state.likedCards);
  const showLikedOnly = useSelector(state => state.showLikedOnly);

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

  const handleDelete = (cardId) => {
    dispatch(deleteCard(cardId));
    const updatedCards = cards.filter(card => card.id !== cardId);
    dispatch({ type: 'FETCH_CARDS', payload: updatedCards });
  };

  const cardsWithLikes = cards.map(card => {
    const likedCard = likedCards.find(liked => liked.id === card.id);
    return likedCard ? { ...card, isLiked: likedCard.isLiked } : card;
  });
  
  const filteredCards = showLikedOnly ? cardsWithLikes.filter(card => card.isLiked) : cardsWithLikes;

  return (
    <div className='pages'>
      <h1 className='pages__title'>KITTY WORLD</h1>
      <Filter />
      {filteredCards.map(card => <Card key={card.id} card={card} onDelete={() => handleDelete(card.id)}/>)}
    </div>
  );
}

export default App;
