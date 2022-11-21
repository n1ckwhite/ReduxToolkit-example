import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState = {
  users: [],
  pending: false,
  error: ''
}



export const usersThunk = createAsyncThunk('users',() => (fetch('https://jsonplaceholder.typicode.com/users').then((data) => data.json())))



export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducer: {},
  extraReducers: {
    [usersThunk.pending] : (state) => {
      state.pending = true
    },
    [usersThunk.fulfilled]: (state,action) => {
      state.users = [...action.payload]
    },
    [usersThunk.enjected]: (state,action) => {
      state.error = `${action.payload}`
    }
  }
})

