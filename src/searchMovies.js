import React, {useState} from "react"
import MovieCard from "./movieCard"

export default function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);


  const searchMovies = async (e) => {
    e.preventDefault();
    // console.log("submitting from searchMovies");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=19b7c5b6b2c769af3d7245d82e90893f&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name:
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e Toy Story"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
        <button
          className="button"
          type="submit"
          value="Submit">
          Search
        </button>
      </form>

      <div className="card-list">
        {/* filter's only movie's that have a poster image */}
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  )
}