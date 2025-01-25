import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components.jsx/Home";
import Trending from "./components.jsx/Trending";
import Popular from "./components.jsx/Popular";
import Movie from "./components.jsx/Movie";
import Tvshow from "./components.jsx/Tvshow";
import People from "./components.jsx/People";
import About from "./components.jsx/About";
import ContactUs from "./components.jsx/Contact";
import Moviedetails from "./components.jsx/moviedetails";
import Persondetails from "./components.jsx/PersonDetails";
import Tvdetails from "./components.jsx/Tvdetails";

function App(){

  return(
    <div className="h-screen w-screen bg-[#1F1F24] flex">
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/trending" element = {<Trending/>}/>
        <Route path = "/popular" element = {<Popular/>}/>
        <Route path = "/movie" element = {<Movie/>} />
        <Route path = "/movie/details/:id" element={<Moviedetails/>}/>
        
        <Route path = "/tv" element = {<Tvshow/>} />
        <Route path = "/tv/details/:id" element={<Tvdetails/>}/>
        
        <Route path = "/person" element = {<People/>} />
        <Route path = "/person/details/:id" element={<Persondetails/>}/>
        
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<ContactUs/>}/>
      </Routes>
    </div>
  )
}

export default App