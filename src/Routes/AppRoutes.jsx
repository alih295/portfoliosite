import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Skill from '../pages/Skill'
import Project from '../pages/Project'
function AppRoutes() {
   return (
      <>
         <Router>

            <Routes>
               <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About/>} />
                  <Route  path='/contact' element={<Contact/>}   />
                  <Route path='/skill' element={<Skill/>}>  </Route>
                  <Route path='/project' element={<Project/>} />

            </Routes>
         </Router>
      </>
   )
}

export default AppRoutes