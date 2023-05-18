import { client } from "../client";

const recipesApi = client.injectEndpoints({
  endpoints: (builder) => ({
    getRecipes: builder.query<void, void>({
      query: () => ({
        url: 'recipes/?_sort=id&_order=desc',
      }),
      providesTags: ['Recipe'],
    }),
    createRecipe: builder.mutation<any, any>({
      query: (recipe) => ({
        body: {
          ...recipe,
        },
        url: 'recipes',
        method: 'POST',
      }),
      invalidatesTags: ['Recipe'],
    })
  })
})

export const { useGetRecipesQuery, useCreateRecipeMutation } = recipesApi