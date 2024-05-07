import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  axios  from "axios";
import StarRating from "./vote_average"
export default function MovieDetails() {
  const [ MovieDetails, setMovieDetails ] = useState({})
  const params = useParams();

  useEffect(() => {
    const movieId = params.id;  // Get the movie ID from the URL parameters
    const apiKey = 'bfe6b41dba3bea7c40d74bcb14f73e1d';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    axios.get(url)
      .then((res) => {
        setMovieDetails(res.data);  // Directly set the data as it contains the details
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <div className="movie-details-container">
      {MovieDetails.poster_path ? (
        <>
          <img src={`https://image.tmdb.org/t/p/w500/${MovieDetails.poster_path}`} alt={MovieDetails.title} className="movie-image" />
          <div className="movie-info">
            <h2>{MovieDetails.title}</h2>
            <p><strong>Release Date:</strong> {MovieDetails.release_date}</p>
            <p>
              <strong>Rating:</strong>
              <StarRating rating={MovieDetails.vote_average} />
              ({MovieDetails.vote_count} votes)
            </p>
            <p>{MovieDetails.overview}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  
}
