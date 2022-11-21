import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  count: 0
}



export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increase: (state) => {
      state.count += 1
    },
    decrease: (state) => {
      state.count -= 1
    },
    clear: (state) => {
      state.count = 0
    }
  }
})



export const {increase, decrease, clear} = countSlice.actions
