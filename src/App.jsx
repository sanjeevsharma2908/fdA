import React from 'react'
import Navbar from './components/navbar/Navbar'
import SideBar from './components/sidebar/SideBar';
import Add from './pages/Add/Add'
import {Routes,Route} from 'react-router-dom';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const url = 'http://localhost:4000';
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <SideBar/>
        <Routes>
          <Route path='/add' element={<Add url = {url} />}/>
          <Route path='/list' element={<List url = {url} />}/>
          <Route path='/orders' element={<Orders url = {url} />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App