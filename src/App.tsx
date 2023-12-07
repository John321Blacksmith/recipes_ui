<<<<<<< HEAD
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
=======
import React from 'react';
import { useState, useEffect } from 'react';
import MenuTopComponent from './components/header/MenuTop';
import MainPage from './pages/Main';


function App(){
  return (
    <>
      <MenuTopComponent/>
      <MainPage/>
      <div className="footer">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                </ul>
              </div>

              <div className="col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>Subscripe to new recipes</h5>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                    <button className="btn btn-primary" type="button">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>&copy; 2023 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
>>>>>>> beta
}

export default App;