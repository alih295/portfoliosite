import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import AllProjects from '../Components/AllProjects'

function AppRoutes() {
   return (
      <>
         <Router>

            <Routes>
               <Route path='/' element={<Home />} />
               <Route  path='/project'  element={<AllProjects/>} />


            </Routes>
         </Router>
      </>
   )
}

export default AppRoutes