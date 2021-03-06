import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetail.scss";

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  // console.log("imdbID:::::", imdbID);
  // console.log("data:::", Object.keys(data).length);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    //clean up func.
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <section className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating
                <i className="fa fa-star">{data.imdbRating}</i>
              </span>
              <span>
                IMDB Votes
                <i className="fa fa-thumbs-up">{data.imdbVotes}</i>
              </span>
              <span>
                Runtime
                <i className="fa fa-film">{data.Runtime}</i>
              </span>
              <span>
                Year
                <i className="fa fa-calendar">{data.Year}</i>
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </section>
          <section className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
