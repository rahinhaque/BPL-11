import React, { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import { ClimbingBoxLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const playerPromise = fetchPlayer();

function App() {
  const [coins, setCoins] = useState(2500);

  const handleClaimCredit = () => {
    setCoins((prevCoins) => prevCoins + 5000); // Adding 500k coins
    toast.success("5000 Free Credits added!");
  };

  return (
    <>
      <Navbar coins={coins} />
      <Banner handleClaimCredit={handleClaimCredit} />
      <ErrorBoundary>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "200px",
              }}
            >
              <ClimbingBoxLoader color="#7F77DD" size={15} />
            </div>
          }
        >
          <Players
            playerPromise={playerPromise}
            coins={coins}
            setCoins={setCoins}
          />
        </Suspense>
      </ErrorBoundary>
      <Newsletter />
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
