import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components.jsx/Home";

function App(){

  return(
    <div className="h-screen w-screen bg-[#1F1F24] flex">
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        
      </Routes>
    </div>
  )
}

export default App