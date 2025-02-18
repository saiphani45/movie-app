import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites?.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites">
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>
          Explore our collection and heart the movies you love. They'll appear
          here for easy access.
        </p>
      </div>
    </div>
  );
}

export default Favorites;
