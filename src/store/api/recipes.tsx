// API endpoints to recipes app backend
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRecipesListResponse, IRecipeDetailResponse, RecipeCard, RecipeDetail } from '../../models/models';


interface Pokemon{

}


export  const recipeApi = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    endpoints: (builder) => ({
        getRecipeList: builder.query<RecipeCard[], void>({
            query: () => ({url: '/recipes'}),
            transformResponse: (response: IRecipesListResponse) => response.recipes
        }),
        getCategoryRecipe: builder.query<RecipeCard[], string>({
            query: (category) => ({'url': `recipes/${category}/`}),
            transformResponse: (response: IRecipesListResponse) => response.recipes
        }),
        getPokemon: builder.query<Pokemon, string>({
            query: (name)=> ({url: `pokemon/${name}`})
        })
        // getRecipe: builder.mutation<RecipeDetail[], number>({
        //     query: (pk) => ({url: `recipes/recipes/${pk}`}),
        //     transformResponse: (response: IRecipeDetailResponse) => response.recipe
        // }),
    }),
})


export const {
    useGetRecipeListQuery,
    useGetCategoryRecipeQuery,
    useGetPokemonQuery,
    // useGetRecipeMutation,
} = recipeApi   