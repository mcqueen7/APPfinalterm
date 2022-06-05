import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// Part1: Define Slice (including reducers and actions)
const initialState = { articleNumValue:0, };

const articleNumSlice = createSlice({
   name: 'articleNum',
   initialState,
   
   // The `reducers` field lets us define reducers and generate associated actions
   reducers: {
      setArticleNum: (state, action) => {
         state.articleNumValue = action.payload;
      },
   },
});

// export state to global
export const selectArticleNum = (state) => state.articleNum.articleNumValue;

// export actions to global
export const { setArticleNum } = articleNumSlice.actions;

// export reducer to global
export default articleNumSlice.reducer;
