import React from "react";
import "./MovieListing.scss";
// import Slider from "react-slick";
// import { Settings } from "../../common/settings";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  // 모든 무비를 제대로 렌더했을때(트루일때, 콘솔및 리덕스 스테이스에서 확인가능)
  // 성공적으로 보여주기 아니면 에러표시
  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, idx) => {
        return <MovieCard key={idx} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, idx) => {
        return <MovieCard key={idx} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrpaeer">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}
          {/* <Slider {...Settings}>{renderMovies}</Slider> */}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}
          {/* <Slider {...Settings}>{renderShows}</Slider> */}
        </div>
      </div>
    </div>
  );
}

export default MovieListing;
