import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const SelectedPlayers = ({
  seletedPlayers,
  setSelectedPlayers,
  setSelectedBtn,
  coins,
  setCoins,
}) => {
  const handleDelete = (playerName) => {
    // Find the player being removed to get their price
    const playerToRemove = seletedPlayers.find(
      (player) => player.playerName === playerName,
    );

    if (playerToRemove) {
      const remainingPlayers = seletedPlayers.filter(
        (player) => player.playerName !== playerName,
      );
      setSelectedPlayers(remainingPlayers);
      setCoins(coins + playerToRemove.price);
      toast.info(
        `${playerName} removed from your team and $${playerToRemove.price} coins refunded!`,
      );
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {seletedPlayers.map((player, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl shadow-sm bg-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100">
              <img
                src={player.playerImg}
                alt={player.playerName}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                {player.playerName}
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                {player.playerType}
              </p>
              <p className="text-xs text-gray-400 font-bold">
                ${player.price.toLocaleString()}
              </p>
            </div>
          </div>
          <button
            onClick={() => handleDelete(player.playerName)}
            className="text-red-500 hover:text-red-700 transition-colors p-2"
            title="Remove Player"
          >
            <FaTrashAlt size={20} />
          </button>
        </div>
      ))}

      {seletedPlayers.length === 0 && (
        <div className="text-center py-10 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
          <p className="text-gray-500 font-medium italic">
            No players selected yet.
          </p>
        </div>
      )}

      <div className="mt-4">
        <button
          onClick={() => setSelectedBtn("Available Players")}
          className="btn btn-accent bg-yellow-400 border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500 text-gray-900 font-bold rounded-xl"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
