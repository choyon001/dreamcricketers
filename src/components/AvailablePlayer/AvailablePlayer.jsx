import { FaFlag } from "react-icons/fa";

export default function AvailablePlayer({player,handleSelectPlayer}) {
    const {player_img,player_name,player_country,player_category,batting_style,player_price} = player;
    
return (
    <div className="flex flex-col justify-between items-center gap-4 bg-white p-6 rounded-lg shadow-lg mb-6 w-full max-w-md">
        <div className="flex justify-center">
            <img src={player_img} alt={`${player_name}`} className="w-full h-60 object-cover rounded-lg" />
        </div>
        <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-center gap-4">
                <img src={player_img} alt={`${player_name}`} className="w-16 h-16 rounded-full border-2 border-gray-300" />
                <h5 className="text-xl font-bold text-gray-800">{player_name}</h5>
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                    <FaFlag className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-600">{player_country}</span>
                </div>
                <span className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">{player_category}</span>
            </div>

            <hr className="w-full border-gray-300 my-4" />

            <div className="flex flex-col gap-3 w-full">
                <div className="flex justify-between items-center w-full">
                    <h5 className="text-sm font-semibold text-gray-700">Batting Style:</h5>
                    <span className="text-sm text-gray-600">{batting_style}</span>
                </div>
                <div className="flex justify-between items-center w-full">
                    <h5 className="text-sm font-semibold text-gray-700">Price:</h5>
                    <span className="text-sm text-gray-600">${player_price}</span>
                </div>
            </div>

            <button className="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-600 transition" onClick={() => handleSelectPlayer(player)}>
                Choose Player
            </button>
        </div>
    </div>
);
}
