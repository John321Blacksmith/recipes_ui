import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRecipesListResponse, ICategoryRecipesResponse, IRecipeDetailResponse } from '../../models/models';
import { Recipe } from '../../models/models';
import { IRecipeSearchParams } from '../../models/models';


export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3000/`,
    }),
    refetchOnFocus: true,
    endpoints: (build) => ({
        getRecipesList: build.query<IRecipesListResponse, Recipe>({
            query: () => ({
                url: `recipes/`,
                method: 'GET',
                transformResponse: (response: IRecipesListResponse) => response.recipes 
            }
            )
        }),
        getCategoryRecipes: build.query<ICategoryRecipesResponse, IRecipeSearchParams>({ // here may have been a Category model
            query: ({category}) => ({
                url: `recipes/${category}/`,
                method: 'GET'
            })
        }),
        getRecipe: build.query<IRecipeDetailResponse, Recipe>({
            query: (params) => ({
                url: `recipes/${params.pk}/`,
                params: {
                    pk: params.pk
                },
                method: 'GET'
            })
        }),

    })
})

export const {
    useLazyGetRecipeQuery,
    useGetRecipesListQuery,
    useGetCategoryRecipesQuery,
    useGetRecipeQuery,

} = recipesApi