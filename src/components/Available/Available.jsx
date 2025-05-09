import AvailablePlayer from "../AvailablePlayer/AvailablePlayer"

export default function Available({players,handleSelectPlayer}) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 ">

        {players.map((player) => (
          <AvailablePlayer key={player.player_id} player={player} handleSelectPlayer = {handleSelectPlayer} />
        ))}
    </div>
  )
}
