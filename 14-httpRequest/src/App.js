import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const fetchMoviesHandler = () => {
    fetch('https://swapi.dev/api/films')
      .then(res => {
        
      })
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* <MoviesList movies={dummyMovies} /> */}
      </section>
    </React.Fragment>
  );
}

export default App;
