import { RiDeleteBin2Fill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
export default function selectedPlayer({player,setSelectedPlayers,setUserCoin}) {
    const {player_name, player_img, player_category} = player;
    const removePlayer = () => {
        setSelectedPlayers((rmplr) => rmplr.filter((plr) => plr.player_id !== player.player_id));
        toast.success("Player removed successfully!", {
            position: "top-center",
            autoClose: 3000,
        });
        setUserCoin((pastcoin) => pastcoin + player.player_price);
    }
  return (
    <div className='flex  items-center justify-between gap-4 border-2 border-gray-300 p-4 rounded-lg m-2 shadow-lg'>
        <div className="flex items-center gap-4">
        <img src={player_img} alt={`${player_name}`} className="w-16 h-16 rounded-3xl border-2 border-gray-300" />
        <div className='flex flex-col items-start justify-center'>
            <h4 className='text-2xl'>{player_name}</h4>
            <p className='text-xl'>{player_category}</p>
        </div>
        </div>
        <RiDeleteBin2Fill className="text-red-600 cursor-pointer" onClick={()=>{removePlayer()}} />
    </div>
  )
}
