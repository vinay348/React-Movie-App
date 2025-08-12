import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";
import MovieGrid from "./components/MovieGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

    const [movies, setMovies] = useState([]);
    const [watchlist, setWatchlist] = useState([]);
  
      useEffect(() => {
        fetch("/movies.json")
          .then((response) => response.json())
          .then((data) => setMovies(data));
      }, []);

      const toggleWatchlist = (movieID) => {
        setWatchlist((prev) => {
          if (prev.includes(movieID)) {
            return prev.filter((id) => id !== movieID);
          } else {
            return [...prev, movieID];
          }
        });
      };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <BrowserRouter>
          <nav>
            <ul>
           <li> <Link to="/">Home</Link> </li>
           <li> <Link to="/watchlist">Watchlist</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MovieGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}/>} />
            <Route path="/watchlist" element={<Watchlist movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}/>} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
