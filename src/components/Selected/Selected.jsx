import SelectedPlayer from "../selectedPlayer/selectedPlayer";


export default function Selected({selectedPlayers,setSelectedPlayers,setUserCoin}) {

  return (
    <div className="mb-10">
      {
        selectedPlayers.map((player)=>(
          <SelectedPlayer key={player.player_id} player={player} setSelectedPlayers={setSelectedPlayers} setUserCoin={setUserCoin} />
        ))
      }
      <button className="bg-[rgba(231,254,41,1)] p-2 border-1 rounded-md flex " onClick={()=>{}}>Add More Player</button>
    </div>
  )
}
