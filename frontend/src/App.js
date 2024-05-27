import React from 'react'
//s:accomdate routes
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const App = () => {
  return (
   <BrowserRouter>
   <Routes>

    <Route path='/login'></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
