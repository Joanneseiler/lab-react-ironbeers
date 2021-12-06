import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Beer from './components/Beer';


function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<HomePage/>} />
        <Route path={'/beers'} element={<AllBeers/>} />
        <Route path={'/beers/:id'} element={<Beer/>} />
        <Route path={'/random-beer'} element={<RandomBeer/>} />
        <Route path={'/new-beer'} element={<NewBeer/>} />
      </Routes>
    </div>
  );
}

export default App;
