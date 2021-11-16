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
      const response = await fetch('https://react-http-b68b7-default-rtdb.firebaseio.com/movies.json')
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const data = await response.json();

      const loadedMovies = []
        // Remember the 'key' is the long id that was auto-generated by firebase database
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title, 
          openingText: data[key].openingText,
          releaseDate: data[key].release_date
        })
      }

      setMovies(loadedMovies)
    } 
    catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, []) // fetchMoviesHandler

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])

  const addMovieHandler = async movie => {
    const response = await fetch('https://react-http-b68b7-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST', 
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data)
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
