import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  movies:[]
}

const movieSlice = createSlice({
  //여기서 name 은 type 같은것. 즉, 여기서 타입은 movies 가 됨.
  name :'movies',
  initialState,
  reducers:{
    addMovies : (state,{payload}) => {
      state.movies = payload;
      //{...state,payload} 와 같은역할.
    }
  },
})

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer;

//이 다음에 스토어로 이동해서 리듀서 연결해준다.