import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/Main';

function App(){
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='recipes/recipes/:pk' element={<RecipeDetailPage/>}/>
                <Route path='recipes/:category' element={<CategoryRecipesPage/>}/>
                <Route path='/:pk' element={<UserProfilePage/>}/>
            </Routes>
        </>
    )
}

export default App;