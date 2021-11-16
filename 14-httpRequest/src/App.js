import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://swapi.dev/api/films')
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
  }, []) // fetchMoviesHandler

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])

  const addMovieHandler = movie => {
    console.log(movie)
  }

  let content = <h2>Found No Movies</h2>
  if (movies.length > 0) {
    content = <MoviesList movies={movies}/>
  }
  if (error) {
    content = <h2>{error}</h2>
  }
  if (isLoading) {
    content = <h2>Loading ...</h2>
  }


  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} /> 
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
