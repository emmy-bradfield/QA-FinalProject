import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home.jsx";
import Navbar from "./components/navbar.jsx";
import Listings from "./components/listings.jsx";
import BeautyBeast from "./components/BeautyBeef.jsx";
import MoonstersInc from "./components/MoonstersInc.jsx";
import DairyMovie from "./components/DairyMovie.jsx";
import Cowsablanca from "./components/Cows-ablanca.jsx";
import Opening from "./components/opening";
import PaymentPage from "./components/PaymentPage";
import NewReleases from "./components/newreleases";
import TerrorDairy from "./components/TerrorDairy";
import Moonions from "./components/Moonions";
import Calftime from "./components/Calftime";
import TheCows from "./components/thecows";
import Information from "./components/information";
import Screens from "./components/screens";
import Directions from "./components/directions";
import Nearby from "./components/nearby";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/listings/beautybeef" element={<BeautyBeast />} />
            <Route path="/listings/moonstersinc" element={<MoonstersInc />} />
            <Route path="/listings/dairymovie" element={<DairyMovie />} />
            <Route path="/listings/cowsablanca" element={<Cowsablanca />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/new-releases" element={<NewReleases/>}/>
            <Route path="/new-releases/terrordairy" element={<TerrorDairy/>}/>
            <Route path="/new-releases/moonions" element={<Moonions/>}/>
            <Route path="/new-releases/calftime" element={<Calftime/>}/>
            <Route path="/new-releases/thecows" element={<TheCows/>}/>
            <Route path="/openings" element={<Opening />} />
            <Route path="/information" element={<Information/>}>
              <Route path="/information/screens" element={<Screens />}/>
              <Route path="/information/directions" element={<Directions />}/>
              <Route path="/information/nearby" element={<Nearby />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
