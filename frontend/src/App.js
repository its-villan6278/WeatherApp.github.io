
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Hero from './components/Hero.js'

function App() {
  return (
   <>
  <Router>
 
    <Routes>
    
      <Route exact path="/" element={<Hero/>}/>
    
    </Routes>
  
</Router>

   </>
  );
}

export default App;