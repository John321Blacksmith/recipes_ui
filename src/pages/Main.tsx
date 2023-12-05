import React, { useState, useEffect } from 'react';
import { useGetRecipesListQuery, useLazyGetRecipeQuery } from '../store/recipes.api/recipes.api';


export function MainPage(){
    // this page shows a catalogue of recipes
    // const { isLoading, isError, data } = useGetRecipesListQuery()
    const data = useLazyGetRecipeQuery
    console.log(data)
    return (
        <>
        
        </>
    )
}