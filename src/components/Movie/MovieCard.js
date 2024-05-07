import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { addFavorite, removeFavorite } from '../../store/slices/favoritesSlice'; // Update this path as needed



export default function MovieCard(props,onRemoveFavorite ) {

 
  console.log(props);
  const { MovieItem, deleteMovie } = props;

  const navigate = useNavigate();
  console.log(`https://image.tmdb.org/t/p/w500/${MovieItem.image}`);

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);
  const isFavorite = favorites.some(movie => movie.id === MovieItem.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(MovieItem.id));
    } else {
      dispatch(addFavorite(MovieItem));
    }
  };

  return (
    <div className="card h-100">
<img src={`https://image.tmdb.org/t/p/w500/${MovieItem.poster_path}`} className="card-img-top" alt={MovieItem.title} />
    <div className="card-body">
      {MovieItem.video ? (
        <span className="badge text-bg-success">Has video</span>
      ) : (
        <span className="badge text-bg-secondary">Hasn't video</span>
      )}
    <h5 className="card-title">{MovieItem.title}</h5>
      <h6>Original Title :-</h6><p className="card-text">{MovieItem.original_title}</p>
      <button
        className="btn btn-dark"
        onClick={() => navigate(`/Movie-details/${MovieItem.id}`)}
      >
        View
      </button>
      <button
        className="btn btn-danger mx-3"
        onClick={() => deleteMovie(MovieItem.id)}
      >
        Delete Movie
      </button>
      <button className="btn btn-warning" onClick={toggleFavorite}>
          <FontAwesomeIcon icon={isFavorite ? solidHeart : regularHeart} />
        </button>
    </div>
  </div>
  );
}
