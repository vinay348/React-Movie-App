import React from "react";

const Moviecard = ({ movie, toggleWatchlist, iswatchlisted }) => {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const MovieRatingClass = (rating) => {
    if (rating >= 8) return "rating-good";
    else if (rating >= 5 && rating < 8) return "rating-ok";
    else return "rating-bad";
  };
  return (
    <div className="movie-card" key={movie.id}>
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card genre">{movie.genre}</span>
          <span
            className={`movie-card-rating ${MovieRatingClass(movie.rating)}`}
          >
            {movie.rating}
          </span>
          <label className="switch">
            <input type="checkbox" checked={iswatchlisted} onChange={() => toggleWatchlist(movie.id)} />
            <span
              className="slider">
                <span className="slider-label">
                  {iswatchlisted ? "Remove from Watchlist" : "Add to Watchlist"}
              </span>
            </span>
          </label>



        </div>
      </div>
    </div>
  );
};

export default Moviecard;
