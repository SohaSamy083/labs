import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
 import axios from "axios";


const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const apiKey = 'bfe6b41dba3bea7c40d74bcb14f73e1d';

  const fetchMovies = (page) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;
    axios.get(url)
      .then(response => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch(error => console.error('Error fetching data: ', error));
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages -totalPages+6; i++) {
      pages.push(
        <button key={i} onClick={() => handlePageChange(i)} className={`button_page btn btn-danger me-3 page-item ${currentPage === i ? 'active' : ''}`}>
          {i}
        </button>
      );
    }
    return pages;
  };

  const fetchSearchResults = (query) => {
    if (query.trim()) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
      axios.get(url)
        .then(response => {
          setMovies(response.data.results);
          setTotalPages(response.data.total_pages);
          setCurrentPage(1);  
        })
        .catch(error => console.error('Error fetching data: ', error));
    }
  };


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchSearchResults(searchTerm);
  };


  return (
    <>
      <h2>Movie List</h2>
      <form className="searchForm" onSubmit={handleSearch}>
        <input 
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for a movie..."
        />
        <button className="btn btn-secondary ms-5" type="submit">Search</button>
      </form>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <div className="col" key={movie.id}>
            <MovieCard MovieItem={movie} deleteMovie={() => console.log("Delete Movie")} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {renderPageNumbers()}
      </div>
    </>
  );
};

export default MovieList;