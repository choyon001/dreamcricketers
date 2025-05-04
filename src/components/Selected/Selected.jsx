import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";


export default function Selected({selectedPlayers}) {

  return (
    <div>
      {
        selectedPlayers.map((player)=>(
          <SelectedPlayer key={player.player_id} player={player} />
        ))
      }
    </div>
  )
}
