import { client } from "../client";

const recipesApi = client.injectEndpoints({
  endpoints: (builder) => ({
    getRecipes: builder.query<void, void>({
      query: () => ({
        url: 'recipes',
      })
    }),
    createRecipe: builder.mutation<any, any>({
      query: (recipe) => ({
        body: recipe,
        url: 'recipes',
        method: 'POST',
      })
    })
  })
})

export const { useGetRecipesQuery, useCreateRecipeMutation } = recipesApi