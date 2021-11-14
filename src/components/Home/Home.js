import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

//1. fetch, redux 스토어에 저장해야한다. :useEffect
function Home() {
  const dispatch = useDispatch();
  // const movieText = "Harry";
  useEffect(() => {
    // const fetchMovies = async () => {
    // movieSlice 의 createAsyncThunk로 대체.
    // const response = await movieApi
    //   .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //   .catch((err) => {
    //     console.log("err : ", err);
    //   });
    // dispatch(addMovies(response.data));
    // };
    // fetchMovies();
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <>
      <main className="banner-img" />
      <MovieListing />
    </>
  );
}

export default Home;
