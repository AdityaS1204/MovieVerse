import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import searchicon from "./search.svg";
import MovieCard from './MovieCard';


// 496673e9
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=496673e9";

function App() {
const [movies,setmovies] = useState([]);
const [searchterm,setSearchterm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}+&s=${title}`)
    const data = await response.json();
    setmovies(data.Search);
  }
  useEffect(() => {
    searchMovies("superman");
  }, [])

  return (
  
      <div className="app">
        <h1>MovieVerse</h1>

        <div className="search">
          <input
            type="text"
            placeholder='Search movies'
            value={searchterm}
            onChange={(e) => setSearchterm(e.target.value)}
          />
          <img src={searchicon}
            onClick={() => {searchMovies(searchterm)}}
          />
        </div>
       
       {
        movies?.length > 0 ? (
          <div className="container">
            {
              movies.map((movie)=>(
                <MovieCard movie={movie}/>
              ))
            }
           </div>
        ): (
          <div className="empty"> 
          <h2>No movies</h2>
          </div>
        )
       }
      </div>   
  )
}

export default App
