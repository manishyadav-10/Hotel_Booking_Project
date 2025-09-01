import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'
import Layout from './pages/hotelOwner/Layout'
import Dashboard from './pages/hotelOwner/Dashboard'
import AddRoom from './pages/hotelOwner/AddRoom'
import ListRoom from './pages/hotelOwner/ListRoom'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'
import Loader from './components/Loader'


const App = () => {

const isOwnerPath = useLocation().pathname.includes("owner");
const {showHotelReg} = useAppContext();

  // Explicitly access the context to show the current mode in console
  // const { darkMode } = useAppContext();
  // console.log('App rendering, darkMode state:', darkMode);
//  {darkMode ? 'dark' : ''}
  return (
    <div className={` bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
      <Toaster/>
      {/* navbar hide when owner login */}
    {!isOwnerPath && <Navbar/>} 
    { showHotelReg && <HotelReg/> }
    <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
           <Route path='/rooms' element={<AllRooms/>}/>
            <Route path='/rooms/:id' element={<RoomDetails/>}/>
             <Route path='/my-bookings' element={<MyBookings/>}/>
             <Route path='/loader/:nextUrl' element={<Loader/>}/>

             <Route path='/owner' element={<Layout/>}>
             <Route index element={<Dashboard/>}/>
             <Route path='add-room' element={<AddRoom/>}/>
             <Route path='list-room' element={<ListRoom/>}/>
             </Route>
        </Routes>
    </div>
    {/* it mount  outside because it show on every pages */}
    <Footer/>
    {/* <ThemeReset />  */}
    </div>
  )
}

export default App
