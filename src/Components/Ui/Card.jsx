import React, { useState } from "react";
import { FaUser, FaFlag, FaBolt } from "react-icons/fa";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  coins,
  setCoins,
  seletedPlayers,
  setSelectedPlayers,
}) => {
  // ✅ receive props
  const isSelected = seletedPlayers.some(
    (p) => p.playerName === player.playerName,
  );

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-100 rounded-2xl overflow-hidden flex flex-col">
      <figure className="w-full h-64 overflow-hidden bg-gray-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
        />
      </figure>

      <div className="p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaUser className="text-gray-700 text-lg" />
            <h3 className="text-xl font-bold text-gray-800">
              {player.playerName}
            </h3>
          </div>

          <div className="flex justify-between items-center text-gray-500">
            <div className="flex items-center gap-2">
              <FaFlag className="text-gray-400" />
              <span className="font-medium">{player.playerCountry}</span>
            </div>
            <span className="bg-gray-100 px-4 py-1.5 rounded-lg font-semibold text-xs text-gray-600 uppercase tracking-wider">
              {player.playerType}
            </span>
          </div>
        </div>

        <div className="divider my-0 h-px bg-gray-100"></div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-sm text-gray-800">Rating</span>
            <span className="text-gray-600 font-medium">{player.rating}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-bold text-sm text-gray-800">
              Batting Style
            </span>
            <span className="text-gray-600 font-medium">
              {player.battingStyle}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-bold text-sm text-gray-800">
              Bowling Style
            </span>
            <span className="text-gray-600 font-medium">
              {player.bowlingStyle}
            </span>
          </div>

          <div className="flex justify-between items-center mt-2 pt-2">
            <span className="font-bold text-base text-gray-900">
              Price: ${player.price.toLocaleString()}
            </span>
            <button
              onClick={() => {
                if (isSelected) {
                  toast.error("Player already selected!");
                  return;
                }
                if (seletedPlayers.length >= 6) {
                  toast.warning("You can only select up to 6 players!");
                  return;
                }
                if (Number(coins) < Number(player.price)) {
                  toast.error("Not enough coins!");
                  return;
                }
                setCoins(Number(coins) - Number(player.price));
                setSelectedPlayers([...seletedPlayers, player]);
                toast.success(`${player.playerName} added to your team!`);
              }}
              disabled={isSelected}
              className="btn btn-outline btn-sm border-gray-300 hover:bg-yellow-400 hover:border-yellow-400 hover:text-gray-900 transition-all rounded-xl font-bold text-xs px-5 h-10 min-h-0"
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({
  players,
  setCoins,
  coins,
  seletedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((player, index) => (
        <PlayerCard
          key={index}
          player={player}
          coins={coins}
          setCoins={setCoins}
          seletedPlayers={seletedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ))}
    </div>
  );
};

export default Card;
