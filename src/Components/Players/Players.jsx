import React, { Suspense } from "react";
import { use } from "react";
import AvailablePlayers from "../Available Players/AvailablePlayers";

const Players = ({ playerPromise ,setCoins , coins}) => {
  const players = use(playerPromise);

 
  // console.log(players);
  
  return (
    <div className="w-11/12 mx-auto my-10">
      { <AvailablePlayers players={players} coins={coins} setCoins={setCoins}></AvailablePlayers>}
    </div>
  );
};

export default Players;
