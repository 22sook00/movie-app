import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
      return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${seriesText}&type=series`);
      return response.data;
  }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi
      .get(`?apiKey=${APIKey}&i=${id}&plot=full`);
      return response.data;
  }
);

const initialState = {
  movies: {},
  shows : {},
  selectMovieOrShow : {},
};

const movieSlice = createSlice({
  //여기서 name 은 type 같은것. 즉, 여기서 타입은 movies 가 됨.
  name: "movies",
  initialState,
  reducers: {
    // addMovies 는 이미 fetchAsyncMovies 함수 만들어서 더이상 필요가 없음.
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    //   //{...state,payload} 와 같은역할.
    // },
    // for clean-up func 
    removeSelectedMovieOrShow : (state) => {
      state.selectMovieOrShow = {};
    }
  },
  extraReducers : {
    [fetchAsyncMovies.pending] : () => {
      console.log('Pending')
    },
    [fetchAsyncMovies.fulfilled] : (state,{payload}) => {
      console.log('fetched successfully');
      return {...state,movies:payload}
    },
    [fetchAsyncMovies.rejected] : () => {
      console.log('fetched rejected');
    },
    [fetchAsyncShows.fulfilled] : (state,{payload}) => {
      console.log('fetched successfully');
      return {...state,shows:payload}
    },
    [fetchAsyncMovieOrShowDetail.fulfilled] : (state,{payload}) => {
      console.log('fetched successfully');
      return {...state,selectMovieOrShow:payload}
    },
  }
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;

//이 다음에 스토어로 이동해서 리듀서 연결해준다.
