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
            <Route path="/openings" elemnet={<Opening />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
