
import './App.css'
import Banner from './components/Banner/Banner'
import Mainsection from './components/Mainsection/Mainsection';
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  
  const [usercoin, setUserCoin] = useState(0);
  const claimcredit = ()=>{
    setUserCoin(usercoin+5000000);
    toast.success('You claimed 5,000,000 coins!', {
      position: "top-center",
      autoClose: 3000, 
    });
  }

  
  return (
    <>
      
      <Navbar usercoin = {usercoin}></Navbar>
      <ToastContainer />
      <Banner claimcredit = {claimcredit} ></Banner>
      <Mainsection ></Mainsection>
    </>
  )
}

export default App
