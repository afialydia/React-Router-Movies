import React, { useState } from 'react';
import MovieList from "../src/Movies/MovieList";
import SavedList from './Movies/SavedList';
import {Route} from "react-router-dom"; 
import Movie from "./Movies/Movie";


const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList}/>
      <Route path="/movies/:id" render= {props => <Movie {...props} movies={savedList} />}/>
     

    </div>
  );
};

export default App;
