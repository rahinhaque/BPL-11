import React, { useState } from 'react';

import Card from '../Ui/Card';
import SelectedPlayers from '../Selected Players/SelectedPlayers';

const AvailablePlayers = ({ players  , setCoins , coins}) => {

 const [SelectedBtn, setSelectedBtn] = useState("Available Players");
  const [seletedPlayers, setSelectedPlayers] = useState([]);


  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
        {SelectedBtn === "Available Players" ? (
          <h2 className="text-2xl font-bold">
            Available Players ({players.length})
          </h2>
        ) : (
          <h2 className="text-2xl font-bold">
            Selected Players ({seletedPlayers.length}/6)
          </h2>
        )}

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => setSelectedBtn("Available Players")}
            className={`btn ${
              SelectedBtn === "Available Players" ? "btn-active" : "bg-sky-100"
            } btn-accent w-full sm:w-auto`}
          >
            Available players ({players.length})
          </button>
          <button
            onClick={() => setSelectedBtn("Selected Players")}
            className={`btn ${
              SelectedBtn === "Selected Players" ? "btn-active" : "bg-sky-100"
            } btn-accent w-full sm:w-auto`}
          >
            Selected players ({seletedPlayers.length})
          </button>
        </div>
      </div>

      {SelectedBtn === "Available Players" ? (
        <Card
          players={players}
          coins={coins}
          setCoins={setCoins}
          setSelectedPlayers={setSelectedPlayers}
          seletedPlayers={seletedPlayers}
        />
      ) : (
        <SelectedPlayers
          seletedPlayers={seletedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          setSelectedBtn={setSelectedBtn}
          coins={coins}
          setCoins={setCoins}
        />
      )}
    </div>
  );
};

export default AvailablePlayers;