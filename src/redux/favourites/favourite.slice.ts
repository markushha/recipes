import { createSlice } from '@reduxjs/toolkit'

interface RecipeArray {
  id: number,
  title: string,
  image?: string,
  description?: string,
}

const initialState = [] as RecipeArray[]

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      const isExist = state.some((r) => r.id === action.payload.id) // checking is this recipe already in favourites

      if (isExist) {
        const index = state.findIndex((r) => r.id === action.payload.id) // if yes, then remove it
        if (index !== -1) state.splice(index, 1)
      }
      else
        state.push(action.payload) // then pushing new recipe to favourites
    }
  }
})

export const { actions, reducer } = favouritesSlice