import './Filter.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../../utils/actions';


function Filter () {
  const dispatch = useDispatch();
  const { showLikedOnly } = useSelector((state) => state);

  const handleToggleFilter = () => {
    dispatch(toggleFilter());
  };

  return (
    <button onClick={handleToggleFilter}>
      {showLikedOnly ? 'Show All' : 'Show Liked Only'}
    </button>
  );
}

export default Filter;