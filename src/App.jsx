
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react';

function App() {
  const [usercoin, setUserCoin] = useState(0);
  const claimcredit = ()=>{
    setUserCoin(usercoin+5000000);
    alert(`Claimed 5000000 coins `);
  }

  return (
    <>
      
      <Navbar usercoin = {usercoin}></Navbar>
      <Banner claimcredit = {claimcredit}></Banner>
    </>
  )
}

export default App
