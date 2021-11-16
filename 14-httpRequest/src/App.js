import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMoviesHandler = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://swapi.dev/api/fil')
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const data = await response.json();

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title, 
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovies(transformedMovies)
    } 
    catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <h2>No Movies Updated</h2>}
        {!isLoading && error && <h2>{error}</h2>}
        {isLoading && <h2>Loading...</h2>}
      </section>
    </React.Fragment>
  );
}

export default App;
