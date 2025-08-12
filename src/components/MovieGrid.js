import  { useState } from "react";
import "../styles.css";
import Moviecard from "./Moviecard";

const MovieGrid = ({movies,watchlist,toggleWatchlist}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [Genre, setGenre] = useState("All Genre");
  const [Rating, setRating] = useState("All");



  const handlesearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };
  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genre" || movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };
  const matchesRating = (movie, rating) => {
    const r = rating.toLowerCase();
    if (r === "ok") return movie.rating >= 5 && movie.rating < 8;
    else if (r === "good") return movie.rating >= 8;
    else if (r === "bad") return movie.rating < 5;
    return true;
  };
  const matchesSearch = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
  const filterMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, Genre) &&
      matchesRating(movie, Rating) &&
      matchesSearch(movie, searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handlesearch}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <lable>Genre</lable>
          <select
            className="filter-dropdown"
            value={Genre}
            onChange={handleGenre}
          >
            <option>All Genre</option>
            <option>Action</option>
            <option>Drama</option>
            <option>fantasy</option>
            <option>Horror</option>
          </select>
        </div>

        <div className="filter-slot">
          <lable>Rating</lable>
          <select
            className="filter-dropdown"
            value={Rating}
            onChange={handleRating}
          >
            <option>All</option>
            <option>Ok</option>
            <option>Good</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filterMovies.map((movie) => (
          <Moviecard movie={movie} key={movie.id}  
          toggleWatchlist={toggleWatchlist} iswatchlisted={watchlist.includes(movie.id)}/>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
