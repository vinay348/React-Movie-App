import "../styles.css";
import React from 'react'
import Moviecard from "./Moviecard";

const Watchlist = ({movies,watchlist,toggleWatchlist}) => {
  return (
    <div>
      <h1 className="title"> This is your Watchlist </h1>
      <div className="watchlist">
        {
            watchlist.map((id)=> {
                const movie = movies.find((movie) => movie.id === id);
                return <Moviecard key={id} movie={movie} toggleWatchlist={toggleWatchlist} iswatchlisted={true} />

            }
            )
        }
      </div>
    </div>
  )
}

export default Watchlist
