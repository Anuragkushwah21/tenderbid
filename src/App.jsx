import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
// import Registration from './component/Registration'
import Header from './component/Header'
import Footer from './component/Footer'
import AdminDashboard from './component/AdminDashboard/AdminDashboard'
import TenderForm from './component/AdminDashboard/TenderForm'
import TenderList from './component/AdminDashboard/TenderList'
import BidForm from './component/BidForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      {/* <Route path='/registration' element={<Registration/>}></Route> */}
      <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
      <Route path='/tenderform' element={<TenderForm/>}></Route>
      <Route path='/tenderlist' element={<TenderList/>}></Route>
      <Route path='/bidform' element={<BidForm/>}></Route>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
