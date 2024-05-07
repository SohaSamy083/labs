import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../../src/store/slices/favoritesSlice'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import StarRating from "./vote_average"
const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  return (
    <div className="container mt-3">
      <h1 className="mb-4">Favorites</h1>
      <div className="row">
        {favorites.map(movie => (
          movie.poster_path && (  
            <div key={movie.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p><strong>Release Date:</strong> {movie.release_date}</p>
                  <p>
                    <strong>Rating:</strong>
                    <StarRating rating={movie.vote_average} />
                    ({movie.vote_count} votes)
                  </p>
                  <p className="card-text">{movie.overview}</p>
                  <button onClick={() => dispatch(removeFavorite(movie.id))} className="btn btn-danger">
                    <FontAwesomeIcon icon={solidHeart} /> Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
