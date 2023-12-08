
import React, { useState, useEffect } from 'react';
import { useGetCategoryRecipeQuery } from '../store/api/recipes'


export default function CategoryRecipesPage(){
    const {data} = useGetCategoryRecipeQuery('meat')
    
    return (
        <>
            {data?.map((recipe)=>{
                return (
                    <>
                        <p>{JSON.stringify(recipe)}</p>
                    </>
                )
            })}
        </>
    )
}