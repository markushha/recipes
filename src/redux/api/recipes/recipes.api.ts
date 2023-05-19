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
    }),
    deleteRecipe: builder.mutation<any, any>({
      query: (id) => ({
        url: `recipes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Recipe'],
    })
  })
})

export const { useGetRecipesQuery, useCreateRecipeMutation, useDeleteRecipeMutation } = recipesApi