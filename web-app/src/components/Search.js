import { Link } from "react-router-dom";
import Hero from "./Hero";

//tmdb api key: 95814c1adc280e1f8d969245f8a08de3
// Example link for movie searches : 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=95814c1adc280e1f8d969245f8a08de3' 'https://api.themoviedb.org/3/search/movie?query=star%20wars&include_adult=false&language=en-US&page=1';

const MovieCard = ({ movie }) => {

  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>

          <Link to={detailUrl} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const Search = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHTML = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  return (
    <div>
      <Hero text={title} />
      {resultsHTML && (
        <div className="container">
          <div className="row">{resultsHTML}</div>
        </div>
      )}
    </div>
  );
};

export default Search;
