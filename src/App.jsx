import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Registration from './component/Registration'
import Header from './component/Header'
import Footer from './component/Footer'
import AdminDashboard from './component/AdminDashboard/AdminDashboard'
import TenderForm from './component/AdminDashboard/TenderForm'
import TenderList from './component/AdminDashboard/TenderList'
import BidForm from './component/BidForm'
import ViewTender from './component/ViewTender'
import TenderUpdate from './component/TenderUpdate'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Registration/>}></Route>
      <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
      <Route path='/tenderform' element={<TenderForm/>}></Route>
      <Route path='/tenderlist' element={<TenderList/>}></Route>
      <Route path='/bidform' element={<BidForm/>}></Route>
      <Route path='/viewtender/:id' element={<ViewTender/>}></Route>
      <Route path='/tenderupdate/:id' element={<TenderUpdate/>}></Route>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
