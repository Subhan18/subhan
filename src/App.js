import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home';
import Postview from "./components/PostView";
import CreatePost from "./components/form";
import Navbar from "./components/navbar"
import './App.css';

function App() {
       return (
              <BrowserRouter>
              
                     <Route exact path="/"><Home /></Route>
                     <Navbar/>
                     <Route path="/postview"><Postview /></Route>
                     <Route path="/form"><CreatePost /></Route>
                     
              </BrowserRouter>

 
  


       )



}

export default App;
