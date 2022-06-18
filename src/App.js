import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import searchicon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=eab82b7c";
function App() {
  const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState(" ")
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("fast and furious");
  }, []);

  const movie1 = {
    Title: "Jackie Chan: Fast, Funny and Furious",
    Year: "2002",
    imdbID: "tt0454613",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjkxNTU2MjYtMWQ0Mi00MDUyLTkyOGMtMWIyMDg1ZDRmMjhjXkEyXkFqcGdeQXVyNTMyODM3MTg@._V1_SX300.jpg",
  };

  return (
    <div className="App">
      <h1> Pscon Movie Land</h1>

      <div className="search">
        <input
        placeholder="search for movies"  
        value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }}
        />
        <img src={searchicon} alt="searchimg" onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <div key={index}>

            <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
