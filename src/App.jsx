import React from 'react'
import Navbar from './components/navbar/Navbar'
import SideBar from './components/sidebar/SideBar';
import Add from './pages/Add/Add'
import {Routes,Route} from 'react-router-dom';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <SideBar/>
        <Routes>
          <Route path='/add' element={<Add />}/>
          <Route path='/list' element={<List />}/>
          <Route path='/orders' element={<Orders />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App