import './Card.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeCard, dislikeCard, deleteCard } from '../../utils/actions';
import delite from '../../images/delite.png';
import dislike from '../../images/dislike.png';
import like from '../../images/like.png';

function Card({ card, onDelete }) {
  const dispatch = useDispatch();
  const likedCards = useSelector((state) => state.likedCards);

  if (!card || !card.id) {
    return null;
  }

  const isLiked = likedCards.find((likedCard) => likedCard.id === card.id && likedCard.isLiked);

  const handleLike = () => {
    if (isLiked) {
      dispatch(dislikeCard(card.id));
    } else {
      dispatch(likeCard(card.id));
    }
  };

  const handleDelete = () => {
    dispatch(deleteCard(card.id));
    onDelete(card.id);
  };

  return (
    <div className='cards'>
      <div className='card__container'>
          <img className='card__images' src={card.url} alt="карточка" />
          <button className='card__images-like' onClick={handleLike}>
            {isLiked ? <img src={like} alt='лайк' /> : <img src={dislike} alt='дизлайк' />}
          </button>
          <button className='card__images-delite' onClick={handleDelete}>
            <img src={delite} alt='картинка удаления' />
          </button>
      </div>
    </div>
  );
}


export default Card;
