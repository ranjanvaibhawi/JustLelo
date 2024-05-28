import React, { Component } from 'react'
import './App.css'
//s:accomdate routes
import { BrowserRouter,Route,Routes } from 'react-router-dom';
//s:import components
import {LoginPage,SignupPage} from "./Routes.js"
const App = () => {
  return (
   <BrowserRouter>
   <Routes>

    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/sign-up' element={<SignupPage/>}/> 
   </Routes>
   </BrowserRouter>
  )
}

export default App;
