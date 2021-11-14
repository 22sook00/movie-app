import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { addMovies } from "../../features/movies/movieSlice";

//1. fetch, redux 스토어에 저장해야한다. :useEffect
function Home() {
  const dispatch = useDispatch();
  const movieText = "Harry";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("err : ", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <>
      <main className="banner-img" />
      <MovieListing />
    </>
  );
}

export default Home;
