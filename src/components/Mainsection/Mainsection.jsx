import React, { useEffect, useState } from 'react';
import Available from '../Available/Available';
import Selected from '../Selected/Selected';

export default function Mainsection() {
  const [isAvailable, setIsAvailable] = useState(true);

  const handleAvailable = () => {
    setIsAvailable(true);
  };

  const handleSelected = () => {
    setIsAvailable(false);
  };
  const [players, setPlayers] = useState([]);
  useEffect(()=>{
    fetch('players.json').then(res=>res.json()).then(data=>setPlayers(data))
  },[]);
return (
    <div className='w-10/12 mx-auto'>
        <div className='flex justify-between items-center'>
            <div className='w-2/3'>
                <h1 className='text-4xl'>{isAvailable ? 'Available' : 'Selected'} Players</h1>
            </div>
            <div className='w-1/3 flex gap-2 items-center justify-end'>
                <button
                    className={`p-2 rounded-lg text-black font-bold ${isAvailable ? 'bg-[rgba(231,254,41,1)]' : 'bg-white'}`}
                    onClick={handleAvailable}
                >
                    Available
                </button>
                <button
                    className={`p-2 rounded-lg text-black font-bold ${!isAvailable ? 'bg-[rgba(231,254,41,1)]' : 'bg-white'}`}
                    onClick={handleSelected}
                >
                    Selected(0)
                </button>
            </div>
        </div>
        <div className='text-center mt-5'>
            {isAvailable ? <Available players = {players} /> : <Selected />}
        </div>
    </div>
);
}
