import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

const SearchScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
  const movieTitle = params.searchTerm || 'batman'
  const [searchTerm, setSearchTerm] = useState(movieTitle);
  const [movies, setMovies] = useState([]);
  const findMovies = () =>
  {
    navigate(`/${searchTerm}`);
    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=852159f0`)
      .then(res => res.json())
      .then(results => setMovies(results.Search))
  }
  useEffect(findMovies, []);
  return(
    <div>
      <h1>Search Screen</h1>
      <input onChange={(e) =>
        setSearchTerm(e.target.value)} value={searchTerm}/>
      <button onClick={findMovies}>
        Search
      </button>
      {JSON.stringify(params)}
      <ul>
        {
          movies.map(movie =>
          <li key={movie.imdbID}>
            <Link to={`/details/${movie.imdbID}`}>
              <img src={movie.Poster} height={50}/>
              {movie.Title}
            </Link>
          </li>
          )
        }
      </ul>
      {JSON.stringify(movies)}
    </div>
  )
};
export default SearchScreen;